export class LocalStorage {
    getItem(key, defaultValue) {
        const result = JSON.parse(localStorage.getItem(key));
        return result ? result : defaultValue;
    }

    setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}