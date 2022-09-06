import styled from 'styled-components';

export const ButtonDiv = styled.div`
  button {
    background-color: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.lightBorder};
  }
`;

export const Icons = styled.span`
  svg {
    color: ${({ theme }) => theme.text};
    z-index: 11;
  }
`;
