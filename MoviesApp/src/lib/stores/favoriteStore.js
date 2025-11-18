import { writable } from 'svelte/store';

const stored = JSON.parse(localStorage.getItem("favorites")) || [];

export const favorites = writable(stored);

// Sync LocalStorage with svelte store
favorites.subscribe((value) => {
    localStorage.setItem("favorites", JSON.stringify(value));
});