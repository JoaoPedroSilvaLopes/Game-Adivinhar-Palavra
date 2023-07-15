import * as S from './letter-block.styles';

type LetterBlockProps = {
  letter: string;
  isVisible: boolean;
};

const LetterBlock: React.FC<LetterBlockProps> = ({ letter, isVisible }) => {
  const visibleLetter = isVisible && letter !== ' '
  const text = visibleLetter ? letter : '';

  return (
    <S.LetterBlock data-testid="LetterBlock" isVisible={visibleLetter}>
      {text}
    </S.LetterBlock>
  );
};

export default LetterBlock;
