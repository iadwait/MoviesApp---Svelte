// Browser checks
export function hasLocalStorage() {
    return typeof window !== "undefined" && !!window.localStorage;
}