import { promisified } from './helper'

export default async function show_notification(summary: string, body: string, timeout: number) {
    let cmd = {
        notification: {
            showNotification: {
                summary: summary,
                body: body,
                timeout: timeout
            }
        }
    };

    return await promisified < string > (cmd);
}