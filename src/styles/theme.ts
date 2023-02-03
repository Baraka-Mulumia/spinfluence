// chakra ui theme extended

import { extendTheme } from '@chakra-ui/react';

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
});

export default theme;
