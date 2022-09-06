import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Input = styled.div`
  input {
    border-bottom: 1px dashed ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.text};
    outline: none;
    text-align: center;
    padding: 1rem 0;
    margin: 0 auto;
    display: block;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    background-color: transparent;

    ::placeholder {
      font-weight: 300;
    }
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.text};
  font-weight: 900;
  text-align: center;
  display: block;
  font-size: 1.125rem;
  line-height: 1.75rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  margin-top: 2rem;
`;

export const ButtonC = styled.div`
  button {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
    width: fit-content;
    margin: 1rem auto;
    display: block;
    padding: 0.75rem 5rem;
    text-align: center;
    font-weight: 700;
    border-radius: 0.5rem;
  }
`;
