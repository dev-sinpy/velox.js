interface SuccessResponse {
    result: string
}

interface ErrorResponse {
    error: string
}

export async function showNotification(summary: string, body: string, timeout: number) {
    return window.__VELOX__.rpc.call("show_notification", summary, body, timeout)
}