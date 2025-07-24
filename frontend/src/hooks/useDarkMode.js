import { useState, useEffect } from 'react';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(() => {
        // Optional: Try to match system preference on first load
        if (typeof window !== "undefined") {
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    });

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return [darkMode, setDarkMode];
};
export default useDarkMode;