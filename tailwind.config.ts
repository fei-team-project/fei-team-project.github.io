import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                background: colors.gray[100],
                'fei-blue': '#0038a5'
            }
        }
    }
} satisfies Config
