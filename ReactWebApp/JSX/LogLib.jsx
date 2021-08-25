export function log(msg) {
    if (window.console && typeof window.console.log === "function")
        window.console.log(msg);
}
