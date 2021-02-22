function s4(): string {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
}

function uid(): string {
    return (
        s4() +
        s4() +
        '-' +
        s4() +
        '-' +
        s4() +
        '-' +
        s4() +
        '-' +
        s4() +
        s4() +
        s4()
    )
}

function transformCallback(
    callback ? : (response: any) => void,
    once = false
): string {
    const identifier = uid()

    Object.defineProperty(window, identifier, {
        value: (result: any) => {
            if (once) {
                Reflect.deleteProperty(window, identifier)
            }

            return (callback as any)(result)
        },
        writable: false,
        configurable: true
    })

    return identifier
}

/**
 * sends an asynchronous command to the backend
 *
 * @param args
 *
 * @return {Promise<T>} Promise resolving or rejecting to the backend response
 */
async function promisified < T > (args: any): Promise < T > {
    return await new Promise((resolve, reject) => {
        const callback = transformCallback((res) => {
            resolve(JSON.parse(res))
            Reflect.deleteProperty(window, error)
        }, true)
        const error = transformCallback((err) => {
            reject(JSON.parse(err))
            Reflect.deleteProperty(window, callback)
        }, true)

        // insert callback in command so that rust can return data.
        Object.keys(args).forEach(function(k) {
            var entry = args[k];
            (Object as any).values(entry).forEach(function(a: object) {
                (a as any).success_callback = callback;
                (a as any).error_callback = error;
            });
        });
        window.invoke(JSON.stringify(args));
    })
}

export { transformCallback, promisified }