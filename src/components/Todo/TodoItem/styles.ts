import styled from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.text};
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Loading = styled.div`
  display: flex;
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

export const Content = styled.form`
  flex-grow: 1;

  input {
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.lightBorder};
    padding-bottom: 0.25rem;
    background-color: transparent;
  }
`;

export const ErrorText = styled.span`
  margin-top: 0.25rem;
  color: red;
  font-size: 13px;
  font-weight: 500;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const Checkbox = styled.div`
  display: flex;
  position: relative;

  .checkbox-flip {
    display: none;
  }

  .checkbox-flip label {
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .checkbox-flip + label span {
    cursor: pointer;
    display: inline-block;
    width: 25px;
    height: 25px;
    margin: 0 0 -9px 0;
  }

  .checkbox-flip + label span:before,
  .checkbox-flip + label span:after {
    transition: all 0.3s ease-in-out;
    content: '';
    position: absolute;
    z-index: 1;
    width: 1.3rem;
    height: 1.3rem;
    background: white;
    border: 1px solid ${({ theme }) => theme.text};
    border-radius: 100px;
    overflow: hidden;
  }
  .checkbox-flip + label span:after {
    z-index: 0;
    border: none;
  }

  .checkbox-flip:checked + label {
    opacity: 10%;
  }
  .checkbox-flip:checked + label span:before {
    transform: rotateY(180deg);
    background: ${({ theme }) => theme.darkBorder};
  }
`;
