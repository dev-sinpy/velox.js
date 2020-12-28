import { promisified } from './helper'

export async function openDialog(multiple: boolean, format ? : string[]) {
    let cmd = {
        fileSystem: {
            openDialog: { multiple: multiple, format: null }
        }
    };

    return await promisified < string > (cmd);
}

export async function selectFolder() {
    let cmd = {
        fileSystem: {
            selectFolder: {}
        }
    };

    return await promisified < string > (cmd);
}

function readTextFile(path: string) {
    // body...
}

function writeFile(file: object) {

}

export async function copyFile(from: string, to: string) {
    let cmd = {
        fileSystem: {
            copyFile: { from: from, to: to }
        }
    };

    return await promisified < string > (cmd);

}

export async function createDir(path: string) {
    let cmd = {
        fileSystem: {
            createDir: { path: path }
        }
    };

    return await promisified < string > (cmd);
}

export async function createFile(path: string) {
    let cmd = {
        fileSystem: {
            createFile: { path: path }
        }
    };

    return await promisified < string > (cmd);
}

export async function readDir(path: string) {
    let cmd = {
        fileSystem: {
            readDir: { path: path }
        }
    };

    return await promisified < string > (cmd);
}

export async function removeFile(path: string) {
    let cmd = {
        fileSystem: {
            removeFile: { path: path }
        }
    };

    return await promisified < string > (cmd);
}

export async function removeDir(path: string) {
    let cmd = {
        fileSystem: {
            removeDir: { path: path }
        }
    };

    return await promisified < string > (cmd);
}

export async function renameFile(from: string, to: string) {
    let cmd = {
        fileSystem: {
            renameFile: { from: from, to: to }
        }
    };

    return await promisified < string > (cmd);
}