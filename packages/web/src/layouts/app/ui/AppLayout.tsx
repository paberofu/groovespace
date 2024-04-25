import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'
import { AppHeader } from '@/widgets/app-header'

const AppLayoutContainer = styled.div``
const AppLayoutHeader = styled.header``
const AppLayoutMain = styled.main``

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