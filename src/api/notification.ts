import { promisified } from './helper'

interface SuccessResponse {
    result: string
}

interface ErrorResponse {
    error: string
}

export async function showNotification(summary: string, body: string, timeout: number) {
    let cmd = {
        notification: {
            showNotification: {
                summary: summary,
                body: body,
                timeout: timeout
            }
        }
    };

    return await promisified < SuccessResponse | ErrorResponse > (cmd);
}