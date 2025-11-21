import { writable } from 'svelte/store';
import { hasLocalStorage } from "$lib/utils";

let stored = []

if (hasLocalStorage()) {
    let favData = localStorage.getItem("favorites")
    stored = favData ? JSON.parse(favData) : [];
}

export const favorites = writable(stored);

// Sync LocalStorage with svelte store
if (hasLocalStorage()) {
favorites.subscribe((value) => {
    localStorage.setItem("favorites", JSON.stringify(value));
});
}