import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Textarea from './Textarea';

describe('Textarea component', () => {
    it('renders without crashing', () => {
        render(<Textarea />);
        const textareaElement = screen.getByRole('textbox');
        expect(textareaElement).toBeDefined();
    });

    it('applies error styles when error prop is true', () => {
        render(<Textarea error={true} />);
        const textareaElement = screen.getByRole('textbox');
        expect(textareaElement.className).toContain('border-feedback-error');
        expect(textareaElement.className).toContain('bg-feedback-error-tint');
        expect(textareaElement.className).toContain('text-feedback-error');
        expect(textareaElement.className).toContain('shadow-feedback-error');
    });

    it('does not apply error styles when error prop is false', () => {
        render(<Textarea error={false} />);
        const textareaElement = screen.getByRole('textbox');
        expect(textareaElement.className).not.toContain('border-feedback-error');
        expect(textareaElement.className).not.toContain('bg-feedback-error-tint');
        expect(textareaElement.className).not.toContain('text-feedback-error');
        expect(textareaElement.className).not.toContain('shadow-feedback-error');
    });
});