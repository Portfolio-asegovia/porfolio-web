module.exports = {
    darkMode: 'class',
    content: [
        './**/*.html',
        './js/**/*.js',
        "./src/**/*.twig",
        "./src/**/*.php",
        "./resources/**/*.{js,jsx,ts,tsx,vue}",
    ],

    theme: {
        extend: {

            screens: {
                'xs': '400px',
                'sm': '640px',
                'md': '768px',
                'pcTab': '1000px',
                'lg': '1199px',
                'xl': '1500px',
                '2xl': '1750px',
                '3xl': '2000px'
            },
            fontFamily: {

            },
            fontSize: {
                x: ['0.50rem', { lineHeight: '1.5' }],
                xs: ['0.75rem', { lineHeight: '1.5' }],
                sm: ['0.875rem', { lineHeight: '1.5715' }],
                base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
                lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
                xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
                '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.01em' }],
                '3xl': ['2rem', { lineHeight: '1.3125', letterSpacing: '-0.01em' }],
                '4xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
                '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
                '6xl': ['4rem', { lineHeight: '1.1562', letterSpacing: '-0.01em' }],
            },

            lineHeight: {
                'small': '0.5',
                'short': '0.75',
                'normal': '1',
                'semi': '1.25',
                'medium': '1.5',
                'double': '2'
            },
            letterSpacing: {
                tighter: '-0.02em',
                tight: '-0.01em',
                normal: '0',
                wide: '0.01em',
                wider: '0.02em',
                widest: '0.4em',
            },
        },
        variants: {
            extend: {
                backgroundColor: ['responsive', 'hover', 'focus', 'active'],
                textColor: ['responsive', 'hover', 'focus', 'active'],
                borderColor: ['responsive', 'hover', 'focus', 'active'],
            },
        },
    },
    plugins: [
        // eslint-disable-next-line global-require
        require('@tailwindcss/forms'),
    ],
};


