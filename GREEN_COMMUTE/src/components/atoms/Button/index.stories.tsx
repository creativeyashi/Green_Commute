import { Story } from '@storybook/react'
import { ButtonComponent, ButtonIconProps } from '.'

export default {
  title: 'Atom/Button',
  component: ButtonComponent,
}

const Template: Story<ButtonIconProps> = (args) => <ButtonComponent {...args} />

export const Save = Template.bind({})
Save.args = {
  children: 'Save',
  style: {
    display: 'inline-block',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 32px 8px 32px',
    gap: '10px',
    textTransform: 'none',
    borderRadius: '8px',
    border: '1px solid lightgray',
    fontFamily: 'Montserrat',
    color: '#4ABAAD',
    fontStyle: 'Bold',
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '22px',
    borderColor: 'green',
  },
}

export const Next = Template.bind({})
Next.args = {
  children: 'Next',
  style: {
    display: 'inline-block',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px 60px 12px 60px',
    gap: '10px',
    textTransform: 'none',
    borderRadius: '8px',
    fontFamily: 'Montserrat',
    color: 'white',
    fontStyle: 'SemiBold',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '22px',
    borderColor: 'green',
    backgroundColor: '#30A193',
  },
}

export const Skip = Template.bind({})
Skip.args = {
  children: 'Skip',
  style: {
    display: 'inline-block',
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: '0px 0px 10px 0px',
    textTransform: 'none',
    borderBottom: '4px solid #30A193',
    fontFamily: 'Montserrat',
    color: '#30A193',
    fontStyle: 'Bold',
    fontWeight: '700',
    fontSize: '30px',
    lineHeight: '24px',
  },
}

export const Back = Template.bind({})
Back.args = {
  children: 'Back',
  style: {
    display: 'inline-block',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px 80px 12px 50px',
    gap: '10px',
    textTransform: 'none',
    borderRadius: '8px',
    border: '1px solid lightgray',
    fontFamily: 'Montserrat',
    color: '#30A193',
    fontStyle: 'Bold',
    fontWeight: '700',
    fontSize: '17px',
    lineHeight: '22px',
    borderColor: 'green',
    width: '99px',
  },
}

export const Okay = Template.bind({})
Okay.args = {
  children: 'OKAY',
  style: {
    display: 'inline-block',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px 60px 12px 60px',
    gap: '10px',
    textTransform: 'none',
    borderRadius: '8px',
    fontFamily: 'Montserrat',
    color: 'white',
    fontStyle: 'Bold',
    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '16px',
    borderColor: 'green',
    backgroundColor: '#30A193',
  },
}
