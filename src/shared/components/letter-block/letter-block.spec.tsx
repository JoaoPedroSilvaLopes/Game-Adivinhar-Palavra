import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import LetterBlock from './letter-block';

describe('<LetterBlock>', () => {
  it('Renderização com letra visivel', () => {
    const letter = 'A';
    const isVisible = true;
    const { getByTestId } = render(
      <LetterBlock letter={letter} isVisible={isVisible} />
    );
    const letterBlockElement = getByTestId('LetterBlock');

    expect(letterBlockElement).toBeInTheDocument();
    expect(letterBlockElement).toHaveStyle({
      backgroundColor: '',
    });
    expect(letterBlockElement).toHaveTextContent(letter);
  });

  it('Renderização com letra não visivel', () => {
    const letter = 'A';
    const isVisible = false;
    const { getByTestId } = render(
      <LetterBlock letter={letter} isVisible={isVisible} />
    );

    const letterBlockElement = getByTestId('LetterBlock');

    expect(letterBlockElement).toBeInTheDocument();
    expect(letterBlockElement).toHaveStyle({
      backgroundColor: '',
    });
    expect(letterBlockElement).toBeEmptyDOMElement();
  });

  it('Renderização com espaço vazio visivel ou não vísivel', () => {
    const letter = ' ';
    const isVisible = true //false;
    const { getByTestId } = render(
      <LetterBlock letter={letter} isVisible={isVisible} />
    );

    const letterBlockElement = getByTestId('LetterBlock');

    expect(letterBlockElement).toBeInTheDocument();
    expect(letterBlockElement).toHaveStyle({
      backgroundColor: '#333333',
    });
    expect(letterBlockElement).toBeEmptyDOMElement();
  });
});
