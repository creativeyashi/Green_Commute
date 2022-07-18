import { createTheme, Color } from '@mui/material'
import React from 'react'
const fontFaceMontserratMedium = {
  fontFamily: 'Montserrat',
  src: `url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap')`,
}
const fontFaceMontserratBold = {
  fontFamily: 'Montserrat',
  src: `url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap')`,
}
const fontFaceMontserrat = {
  fontFamily: 'Montserrat',
  src: `url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap')`,
}

type ColorPartial = Partial<Color>
declare module '@mui/material/styles/createPalette' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface PaletteColor extends ColorPartial {}
}

declare module '@mui/material/styles/createTypography' {
  interface Typography {
    caption2: React.CSSProperties
  }

  interface TypographyOptions {
    caption2?: React.CSSProperties
  }
}

declare module '@mui/material/Typography/Typography' {
  interface TypographyPropsVariantOverrides {
    caption2: true
  }
}

const theme = createTheme({
  spacing: [0, 4, 8, 12, 16, 20, 24, 32],
  palette: {
    primary: {
      main: '#0B6D62',
      '500': '#1B877A',
      '300': '#4ABAAD',
      '200': '#77EDDF',
      '100': '#B2FFF6',
    },
    text: {
      primary: '#373C38',
      secondary: '#656E66',
      disabled: '#94A196',
    },
    grey: {
      '400': '#D6D6D6',
      '200': '#E9EBE9',
      '100': '#F7F7F7',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          '@font-face': [
            fontFaceMontserratBold,
            fontFaceMontserrat,
            fontFaceMontserratMedium,
          ],
        },
      },
    },
  },

  typography: {
    button: {
      textTransform: 'none',
    },
    h1: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontSize: '32px',
      fontWeight: 600,
      lineHeight: '48px',
    },
    h2: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '30px',
    },
    subtitle1: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '24px',
    },
    subtitle2: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '24px',
    },
    body1: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '22px',
    },
    body2: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '22px',
    },
    caption: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '12px',
      lineHeight: '16px',
    },
    caption2: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '16px',
    },
  },
})

export default theme

export const EXTRA_COLORS = {
  shade: {
    '300': 'linear-gradient(155.94deg, #EFFEFF 6.2%, #E9FFF4 52.61%)',
    '200': 'linear-gradient(143.84deg, #E0FFE5 0%, #FFFAEA 102.58%)',
    '400': '#E8FFFC',
    '500': '#E7FCE0',
    '100': '#F5FFF7',
    '600': '#77EDDF',
    '700': '#FFFFFF',
    '800': '#E5E5E5',
  },
  primary: {
    '400': '#30A193',
    '1000': '#EFFFFD',
  },

  grey: {
    '400': '#D6D6D6',
  },
  accent: {
    '100': '#ED8F02',
    '200': '#FF725E',
  },
  text: {
    primary: '#373C38',
  },
}
