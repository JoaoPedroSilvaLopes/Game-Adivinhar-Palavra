import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './button';

describe('<Button>', () => {
  it('Botão sendo renderizado', () => {
    const title = 'INICIAR';
    const { getByRole } = render(<Button title={title} />);

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(title);
    expect(buttonElement).toHaveStyle({
      backgroundColor: '',
      border: '0.2rem solid #333333',
      color: '#333333',
    });
  });

  it("Botão sendo renderizado sem titulo", () => {
    const title = '';
    const { getByRole } = render(<Button title={title} />);

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('');
    expect(buttonElement).toHaveStyle({
      backgroundColor: '',
      border: '0.2rem solid #333333',
      color: '#333333',
    });
  })

  it('Botão sendo clicado', () => {
    const title = 'INICIAR';
    const { getByRole } = render(<Button title={title} />);

    const buttonElement = getByRole('button');
    fireEvent.mouseEnter(buttonElement);

    expect(buttonElement).toHaveStyle({
      backgroundColor: '#333333',
      border: '0.2rem solid #333333',
      color: '#f3f3f3',
    });
  });

});
