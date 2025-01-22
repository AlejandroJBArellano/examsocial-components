import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import CreateAnswer from './CreateAnswer';

describe('CreateAnswer Component', () => {
    const mockSetFieldValue = vi.fn();
    const mockOnDelete = vi.fn();
    const defaultProps = {
        name: 'answer1',
        answer: { text: 'Sample Answer', correct: false },
        setFieldValue: mockSetFieldValue,
        onDelete: mockOnDelete,
    };

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders correctly', () => {
        render(<CreateAnswer {...defaultProps} />);
        expect(screen.getByPlaceholderText('e.g., Paris')).toBeDefined();
        expect(screen.getByRole('button')).toBeDefined();
    });

    it('calls onDelete when delete button is clicked', () => {
        render(<CreateAnswer {...defaultProps} />);
        fireEvent.click(screen.getByRole('button'));
        expect(mockOnDelete).toHaveBeenCalledTimes(1);
    });

    it('calls setFieldValue when input value changes', () => {
        render(<CreateAnswer {...defaultProps} />);
        const input = screen.getByPlaceholderText('e.g., Paris');
        fireEvent.change(input, { target: { value: 'New Answer' } });
        expect(mockSetFieldValue).toHaveBeenCalledWith('answer1.text', 'New Answer');
    });

    it('calls setFieldValue when AnswerToggle value changes', () => {
        render(<CreateAnswer {...defaultProps} />);
        const toggle = screen.getByRole('checkbox');
        fireEvent.click(toggle);
        expect(mockSetFieldValue).toHaveBeenCalledWith('answer1.correct', true);
    });
});