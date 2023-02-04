// chakra ui theme extended

import { Roboto } from '@next/font/google';
import { extendTheme } from '@chakra-ui/react';

// include all subsets and weights
const roboto = Roboto({
  weight: ['300', '400', '700', '900'],
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
        fontFamily: roboto.style.fontFamily,
      },
    },
  },
});

export default theme;
