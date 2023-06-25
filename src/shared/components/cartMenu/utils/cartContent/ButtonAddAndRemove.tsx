import styled from 'styled-components'

const ButtonAddAndRemoveStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border-radius: 0.5rem;

  width: 1.3rem;
  height: 1.3rem;
`

export function ButtonAddAndRemove() {
  return <ButtonAddAndRemoveStyle></ButtonAddAndRemoveStyle>
}
