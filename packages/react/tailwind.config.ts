import type { Config } from 'tailwindcss';
import { colors } from '@thiagobrolly/tokens';

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    colors,
    extend: {},
  },
  plugins: [],
} satisfies Config;
