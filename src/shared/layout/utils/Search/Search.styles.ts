import { theme } from '@/shared/theme'
import styled from 'styled-components'

export const SearchStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 40%;
  transition: all 0.2s ease-out;

  .search {
    background-color: ${theme.gray[800]};
    border-radius: 0.25rem 0 0 0.25rem;
    border-top: 1px solid ${theme.gray[400]};
    border-left: 1px solid ${theme.gray[400]};
    border-right: 0px solid ${theme.gray[400]};
    border-bottom: 1px solid ${theme.gray[400]};

    height: 2.25rem;
    width: 100%;

    padding: 0.5rem;
    color: ${theme.gray[100]};

    &:focus {
      border-top: 1px solid ${theme.gray[400]};
      border-left: 1px solid ${theme.gray[400]};
      border-right: 0px solid ${theme.gray[400]};
      border-bottom: 1px solid ${theme.gray[400]};
      outline: none;
    }

    &::placeholder {
      color: ${theme.gray[400]};
    }

    @media screen and (min-width: 470px) {
      padding-right: 2rem;
    }
  }

  .clearInput {
    cursor: pointer;
    position: absolute;
    right: 3rem;
  }
`

export const ButtonSubmitSeachStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${theme.gray[400]};
  border-radius: 0 0.25rem 0.25rem 0;
  background-color: ${theme.gray[700]};

  height: 2.25rem;
  width: 3rem;
  cursor: pointer;

  &:focus {
    border-top: 1px solid ${theme.gray[400]};
    border-left: 0px solid ${theme.gray[400]};
    border-right: 1px solid ${theme.gray[400]};
    border-bottom: 1px solid ${theme.gray[400]};
    outline: none;
  }

  &:hover {
    background-color: ${theme.gray[900]};
  }
`
