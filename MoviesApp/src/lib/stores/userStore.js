import { writable } from 'svelte/store';
import { hasLocalStorage } from "$lib/utils";


let storedUser = null;

if (hasLocalStorage()) {
  const userData = localStorage.getItem('user');
  storedUser = userData ? JSON.parse(userData) : null;
}

export const user = writable(storedUser);

// userStore.js – auto-sync with localStorage
if (hasLocalStorage()) {
  user.subscribe(value => {
    if (value) localStorage.setItem('user', JSON.stringify(value));
    else localStorage.removeItem('user');
  });
}