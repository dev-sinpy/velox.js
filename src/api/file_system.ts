interface SuccessResponse {
    result: string | object
}

interface ErrorResponse {
    error: string
}

export async function openDialog < T > (multiple: boolean, format ? : string[]): Promise < T > {
    return window.__VELOX__.rpc.call("open_dialog", multiple)
}

export async function selectFolder < T > (): Promise < T > {
    return window.__VELOX__.rpc.call("select_folder")
}

export async function saveFile < T > (path: String, content: number[], mode: String): Promise < T > {
    return window.__VELOX__.rpc.call("save_file", path, content, mode)
}

export async function readTextFile < T > (path: string): Promise < T > {
    return window.__VELOX__.rpc.call("read_text_file", path)
}

function writeFile(file: object) {

}

export async function copyFile < T > (from: string, to: string): Promise < T > {
    return window.__VELOX__.rpc.call("copy_file", from, to)

}

export async function createDir < T > (path: string): Promise < T > {
    return window.__VELOX__.rpc.call("create_dir", path)
}

export async function createFile < T > (path: string): Promise < T > {
    return window.__VELOX__.rpc.call("create_file", path)
}

export async function readDir < T > (path: string): Promise < T > {
    return window.__VELOX__.rpc.call("read_dir", path)
}

export async function removeFile < T > (path: string): Promise < T > {
    return window.__VELOX__.rpc.call("remove_file", path)
}

export async function removeDir < T > (path: string): Promise < T > {
    return window.__VELOX__.rpc.call("remove_dir", path)
}

export async function renameFile < T > (from: string, to: string): Promise < T > {
    return window.__VELOX__.rpc.call("rename_file", from, to)
}