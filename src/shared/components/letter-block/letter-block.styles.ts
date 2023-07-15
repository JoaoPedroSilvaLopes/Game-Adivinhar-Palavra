import styled from 'styled-components';

export const LetterBlock = styled.div<{ isVisible: boolean }>`
  width: 4rem;
  height: 4rem;

  background-color: ${(props) => (props.isVisible ? 'transparent' : '#333333')};
  border: 0.2rem solid #333333;
  font-size: '3rem';
  margin: '0.1rem';
  text-align: 'center';
`;
