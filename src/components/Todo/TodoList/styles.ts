import styled from 'styled-components';

export const TodoList = styled.div`
  overflow: auto;
  max-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  border-top: 1px dashed ${({ theme }) => theme.lightBorder};

  ::-webkit-scrollbar {
    width: 7.5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
`;

export const Loading = styled.span`
  color: ${({ theme }) => theme.text};
  width: 100%;
  text-align: center;
  margin: 40px 0;
  font-weight: 800;
  color: lightgray;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.text};
`;

export const SubmitButton = styled.div`
  button {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
  }
`;

export const Heading = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: row;
  place-content: space-between;
  width: 100%;
  margin-top: 1.5rem;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 300;
  padding: 0 1.5rem;
  padding-bottom: 1rem;
  gap: 0.5rem;
`;

export const EmptyList = styled.label`
  color: ${({ theme }) => theme.text};
  display: block;
  padding: 2rem;
  font-style: italic;
  font-size: 1.125rem;
  border-top: 1px dashed ${({ theme }) => theme.lightBorder};
  width: 100%;
  text-align: center;
  opacity: 50%;
`;
