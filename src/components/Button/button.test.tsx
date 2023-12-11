import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Button from './button';

describe('Button Tests', () => {
  it('should render correctly', () => {
    const screen = render(<Button>Teste</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render with props', () => {
    const handleClick = vi.fn();

    const screen = render(
      <Button
        className='classeTeste'
        data-testid='idTest'
        onClick={handleClick}
      >
        Teste
      </Button>
    );
    const btn = screen.getByTestId('idTest');

    fireEvent.click(btn);
    expect(btn).toHaveClass('classeTeste');
    expect(btn).toHaveTextContent('Teste');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
