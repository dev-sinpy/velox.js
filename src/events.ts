function send_event() {
    let cmd = {
        event: {
            veloxEvent: "Initialised"
        }
    }
    window.invoke(cmd);
}