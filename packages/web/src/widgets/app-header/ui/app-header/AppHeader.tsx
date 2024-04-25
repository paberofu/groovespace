import { Link } from 'react-router-dom'
import {
  AppHeaderContainer,
  AppHeaderNav,
  AppHeaderNavList,
  AppHeaderNavListItem,
} from './styled'

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