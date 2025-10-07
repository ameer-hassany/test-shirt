
import { useState, useEffect } from 'react';

export const useTheme = (initialTheme: string = 'light'): [string, (theme: string) => void] => {
    const [theme, setTheme] = useState(initialTheme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return [theme, setTheme];
};
