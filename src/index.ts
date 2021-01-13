// import * as fs from "./api/file_system";
// import showNotification from "./api/notification";
// import { isText, isBinary, getEncoding } from 'istextorbinary'

declare global {
    interface Window {
        invoke: (cmd: any) => void
    }
}

// function test() {
// fs.openDialog(true).then((val) => console.log(val))
//     .catch((err) => console.log(err));
// fs.selectFolder()
//     .then((val) => console.log(`${val}`))
//     .catch((err) => console.log(err));
// fs.readDir("/home/dev/Desktopd ")
//     .then((val) => console.log(`${val}`))
//     .catch((err) => console.log(err));
// fs.copyFile("/home/dev/Desktop/d.txt", "/home/dev/Desktop/newfile.txt")
//     .then((val) => console.log(`${val}`))
//     .catch((err) => console.log(err));
// fs.renameFile("/home/dev/Desktop/d.txt", "/home/dev/Desktop/demo.txt")
//     .then((val) => console.log(`${val}`))
//     .catch((err) => console.log(err));
// fs.createFile("/home/dev/Desktop/d.txt")
//     .then((val) => console.log(`${val}`))
//     .catch((err) => console.log(err));
// fs.removeFile("/home/dev/Desktop/d.txt ")
//     .then((val) => console.log(`${val}`))
//     .catch((err) => console.log(err));
// fs.createDir("/home/dev/Desktop/d")//     .then((val) => console.log(`${val}`))
//     .catch((err) => console.log(err));
// fs.removeDir("/home/dev/Desktop/d")
//     .then((val) => console.log(`${val}`))
//     .catch((err) => console.log(err));
// fs.readTextFile("/home/dev/Desktop/demo.txt")
//     .then((val) => console.log(val))
//     .catch((err) => console.log(err));
//     showNotification("hello, world!", "this is test notification ", 10000)
// .then((res) => console.log(res));
// fs.saveFile("/home/dev/Desktop/demo.txt", [23], "w")
//     .then((val) => console.log(val))
//     .catch((err) => console.log(err));
// }
export * as fs from "./api/file_system";
export { showNotification } from "./api/notification";
export * as subprocess from "./api/subprocess";

// (window as any).test = test;