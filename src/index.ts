declare global {
    interface Window {
        __VELOX__: __VELOX__
    }
}

interface __VELOX__ {
    rpc: Rpc
}

interface Rpc {
    call: (func_name: string, ...args: any) => Promise < any >
        notify: (func_name: string) => Promise < any >
}

export * as fs from "./api/file_system";
export { showNotification } from "./api/notification";
export * as window from "./api/window";
export * as subprocess from "./api/subprocess";