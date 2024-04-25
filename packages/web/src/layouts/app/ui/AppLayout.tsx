import { Outlet } from 'react-router-dom'
import { AppHeader } from '@/widgets/app-header'
import {
  AppLayoutContainer,
  AppLayoutHeader,
  AppLayoutMain,
} from './styled'

export function AppLayout() {
  return (
    <AppLayoutContainer>
      <AppLayoutHeader>
        <AppHeader />
      </AppLayoutHeader>
      <AppLayoutMain>
        <Outlet />
      </AppLayoutMain>
    </AppLayoutContainer>
  )
}