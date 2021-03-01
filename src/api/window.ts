import { promisified } from './helper'

interface SuccessResponse {
    result: string
}

interface ErrorResponse {
    error: string
}

export async function setTitle(title: string) {
    let cmd = {
        window: {
            setTitle: {
                title: title
            }
        }
    };

    return await promisified < SuccessResponse | ErrorResponse > (cmd);
}

export async function setTransparent(transparent: boolean) {
    let cmd = {
        window: {
            setFullscreen: {
                transparent: transparent
            }
        }
    };

    return await promisified < SuccessResponse | ErrorResponse > (cmd);
}

export async function setFullscreen(fullscreen: boolean) {
    let cmd = {
        window: {
            setFullscreen: {
                fullscreen: fullscreen
            }
        }
    };

    return await promisified < SuccessResponse | ErrorResponse > (cmd);
}