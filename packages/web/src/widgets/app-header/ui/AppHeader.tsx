import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const AppHeaderContainer = styled.div``
const AppHeaderNav = styled.div``
const AppHeaderNavList = styled.ul``
const AppHeaderNavListItem = styled.li``

const appNavItems = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'TODO',
    path: '/todo',
  },
  {
    title: 'Notebook',
    path: '/notebook',
  },
]

export function AppHeader() {
  return (
    <AppHeaderContainer>
      <AppHeaderNav>
        <AppHeaderNavList>
          {appNavItems.map((item) => (
            <AppHeaderNavListItem>
              <Link to={item.path}>
                {item.title}
              </Link>
            </AppHeaderNavListItem>
          ))}
        </AppHeaderNavList>
      </AppHeaderNav>
    </AppHeaderContainer>
  )
}