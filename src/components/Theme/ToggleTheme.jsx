import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { cn } from '../../lib/utils';

function ToggleTheme() {
    const [isDarkMode, setIsDarkMode] = useState(true); // default = dark

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');

        if (!savedTheme) {
            // لو مفيش saved theme خلي الدارك هو الافتراضي
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
            return;
        }

        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    function toggleTheme() {
        if (isDarkMode) {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }

    return (
        <div>
            <button
                className={cn(
                    "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                    "focus:outlin-hidden"
                )}
                onClick={toggleTheme}
            >
                {isDarkMode
                    ? <Sun className='h-6 w-6 text-yellow-300' />
                    : <Moon className='h-6 w-6 text-blue-900' />}
            </button>
        </div>
    )
}

export default ToggleTheme;
