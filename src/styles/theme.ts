// chakra ui theme extended

import { Lato } from '@next/font/google';
import { extendTheme } from '@chakra-ui/react';

// include all subsets and weights
const lato = Lato({
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
  },

  styles: {
    global: {
      body: {
        fontFamily: lato.style.fontFamily,
      },
    },
  },
});

export default theme;
