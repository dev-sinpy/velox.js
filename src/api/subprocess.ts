interface SuccessResponse {
    result: string
}

interface ErrorResponse {
    error: string
}

export async function exec(command: string, cwd: string, stream_output: boolean) {
    return window.__VELOX__.rpc.call("exec", command, cwd, stream_output)
}