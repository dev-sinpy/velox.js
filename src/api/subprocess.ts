import { promisified } from './helper'

interface SuccessResponse {
    result: string
}

interface ErrorResponse {
    error: string
}

export async function exec(command: string, cwd: string, stream_output: boolean) {
    let cmd = {
        subProcess: {
            exec: {
                cmd: command,
                cwd: cwd,
                stream_output: stream_output,
            }
        }
    };

    return await promisified < SuccessResponse | ErrorResponse > (cmd);
}