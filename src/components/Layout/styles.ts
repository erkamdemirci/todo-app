import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.lightBorder};
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
`;
