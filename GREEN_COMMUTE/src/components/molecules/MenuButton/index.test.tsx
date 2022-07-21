// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-children-prop */
import { render, screen } from '@testing-library/react'
import DashboardIcon from '@mui/icons-material/DashboardCustomizeOutlined'
import { DASHBOARD } from '../../utils/constant'

import MenuButton from './index'
import '@testing-library/jest-dom'

it('Button Save', () => {
  render(
    <MenuButton
      icon={<DashboardIcon className="hoveredIcon" />}
      label={DASHBOARD}
    />
  )
  const button = screen.getByTestId('dashboard')

  expect(button).toBeInTheDocument()
})
