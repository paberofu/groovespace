import { styled } from 'styled-components'

export const AppLayoutHeader = styled.header`
  padding-inline: 1rem;
  padding-block: 0.5rem;
  border-block-end: 1px solid ${props => props.theme.colors.gray[4]};
`
