interface SuccessResponse {
    result: string
}

interface ErrorResponse {
    error: string
}

export async function addWindow(title: string, url: string) {
    return window.__VELOX__.rpc.call("add_window", title, url)
}

export async function setTitle(title: string, window_identifier: string) {
    return window.__VELOX__.rpc.call("set_title", title, window_identifier)
}

export async function setTransparent(transparent: boolean, window_identifier: string) {
    return window.__VELOX__.rpc.call("set_transparent", transparent, window_identifier)
}

export async function setFullscreen(window_identifier: string) {
    return window.__VELOX__.rpc.call("set_fullscreen", window_identifier)
}

export async function maximize(flag: boolean, window_identifier: string) {
    return window.__VELOX__.rpc.call("maximize", flag, window_identifier)
}

export async function minimize(flag: boolean, window_identifier: string) {
    return window.__VELOX__.rpc.call("minimize", flag, window_identifier)
}