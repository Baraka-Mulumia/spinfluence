// chakra ui theme extended

import { DM_Sans, Roboto } from '@next/font/google';

import { extendTheme } from '@chakra-ui/react';

// DM Sans
const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin', 'latin-ext'],
  style: ['normal', 'italic'],
});

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },

  breakpoints: {
    sm: '360px',
    sxm: '480px',
    md: '640px',
    mxd: '768px',
    lg: '992px',
    xl: '1024px',
    xxl: '1280px',
    xxxl: '1440px',
  },

  colors: {
    blue_000: '#729DFE',
    blue_100: '#334D88',
    blue_200: '#6679A5',
    bg_000: '#F7F8FB',
    text_primary: '#343D48',
  },

  styles: {
    global: {
      body: {
        fontFamily: dmSans.style.fontFamily,
      },
    },
  },
});

export default theme;
