export function log(msg: any) {

    if (window.console && typeof window.console.log === "function")
        window.console.log(msg);
}