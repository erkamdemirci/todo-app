import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 25px;
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-direction: column;
  margin: 1.5rem auto 1rem;

  .spinner {
    fill: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
  }

  span {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.text};
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: start;
  gap: 25px;
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  gap: 5px;

  span {
    font-weight: 800;
  }

  input {
    background-color: transparent;
    border-bottom: 1px solid ${({ theme }) => theme.lightBorder};
    width: 100%;
    font-weight: 300;
    padding: 0.5rem 0;
  }
`;

export const ErrorText = styled.span`
  margin-top: 0.25rem;
  color: red;
  font-size: 13px;
  font-weight: 500;
`;
