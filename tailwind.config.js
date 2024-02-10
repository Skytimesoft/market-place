import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },

            colors: {
                'primary': '#116db4',
                'secondary': '#EDA566',
        
                'success': '#39B54A',
                'danger': '#ff0003',
                'warning': '#ff8f3c',
                'info': '#1ba2db',
        
                'heading': '#222836',
                'body': '#F7F7F6',
                'content': '#4b6179',
                
                'borderDark': '#6b7280',
                'borderLight': '#E1E3E6',
            },
        },
    },

    plugins: [forms],
};
