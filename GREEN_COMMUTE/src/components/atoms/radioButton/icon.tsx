import styled from '@emotion/styled'

export const BpIcon = styled('span')(() => ({
  borderRadius: '50%',
  width: 24,
  height: 24,
  boxShadow: 'inset 0 0 0 2px rgba(16,22,26,.2), inset 0 0 0 rgba(16,22,26,.1)',
  backgroundColor: '#fff',
  backgroundImage:
    'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },

  'input:disabled ~ &': {
    boxShadow: 'gray',
    background: 'rgba(206,217,224,.5)',
  },
}))

export const BpCheckedIcon = styled(BpIcon)({
  boxShadow: 'inset 0 0 0 0px rgba(16,22,26,.2), inset 0 0 0 rgba(16,22,26,.1)',

  backgroundColor: '#4ABAAD',
  backgroundImage:
    'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 24,
    height: 24,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
})
