function send_event() {
    let cmd = {
        event: {
            veloxEvent: "Initialised"
        }
    };
    window.__VELOX__.rpc.notify(JSON.stringify(cmd));
}