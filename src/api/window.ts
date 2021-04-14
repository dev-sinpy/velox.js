interface SuccessResponse {
    result: string
}

interface ErrorResponse {
    error: string
}

export async function addWindow(title: string, url: string) {
    return window.__VELOX__.rpc.call("add_window", title, url)
}

export async function setTitle(title: string) {
    return window.__VELOX__.rpc.call("set_title", title)
}

export async function setTransparent(transparent: boolean) {
    return window.__VELOX__.rpc.call("set_transparent", transparent)
}

export async function setFullscreen(fullscreen: boolean) {
    return window.__VELOX__.rpc.call("set_fullscreen", fullscreen)
}