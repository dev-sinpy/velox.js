function send_event() {
    let cmd = {
        event: {
            veloxEvent: "Initialised"
        }
    };
    window.__VELOX__.rpc.notify(JSON.stringify(cmd));
}

export function sendNetworkEvents(event: Event) {
    if (event.type == "offline") {
        let cmd = {
            networkEvent: "offline"
        };
        window.__VELOX__.rpc.notify(JSON.stringify(cmd));
    }
    if (event.type == "online") {
        let cmd = {
            networkEvent: "online"
        };
        window.__VELOX__.rpc.notify(JSON.stringify(cmd));
    }
}