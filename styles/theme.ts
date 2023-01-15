import { Inter } from '@next/font/google'
import { extendTheme } from '@chakra-ui/react';

const inter = Inter({ weight: ['400', '600', '700'] });

export const theme = extendTheme({
  fonts: {
    heading: inter.style.fontFamily,
    body: inter.style.fontFamily,
  },
});
