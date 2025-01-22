import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Option from './Option';

describe('Option Component', () => {
    const mockOption = { _id: '1', text: 'Option 1' };
    const mockSelectAnswer = vi.fn();

    it('renders the option text', () => {
        render(<Option option={mockOption} selectAnswer={mockSelectAnswer} />);
        expect(screen.getByText('Option 1')).toBeDefined();
    });

    it('calls selectAnswer with the correct id when clicked', () => {
        render(<Option option={mockOption} selectAnswer={mockSelectAnswer} />);
        const label = screen.getByLabelText('Option 1');
        fireEvent.click(label);
        expect(mockSelectAnswer).toHaveBeenCalledWith('1');
    });

    it('renders the input with the correct id', () => {
        render(<Option option={mockOption} selectAnswer={mockSelectAnswer} />);
        const input = screen.getByTestId('option');
        expect(input.getAttribute("id")).toBe('1');
    });
});