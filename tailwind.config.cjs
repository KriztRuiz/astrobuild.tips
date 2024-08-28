module.export = {
    content: ['./src/**/*/*.{astro,html,js,jsx}'],
    theme: {
        extend: {

        }
    },
    plugins: [require('@tailwindcss/line-clamp')]
}