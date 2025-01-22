import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Field from './Field';

describe('Field Component', () => {
    it('renders the label', () => {
        render(<Field label="Test Label" />);
        const labelElement = screen.getByText(/Test Label/i);
        expect(labelElement).toBeDefined();
    });

    it('renders the helper text', () => {
        render(<Field label="Test Label" helperText="Helper Text" />);
        const helperTextElement = screen.getByText(/Helper Text/i);
        expect(helperTextElement).toBeDefined();
    });

    it('renders the error message', () => {
        render(<Field label="Test Label" error="Error Message" />);
        const errorElement = screen.getByText(/Error Message/i);
        expect(errorElement).toBeDefined();
    });

    it('passes inputProps to the Input component', () => {
        render(<Field label="Test Label" inputProps={{ id: 'test-input', placeholder: 'Enter text' }} />);
        const inputElement = screen.getByPlaceholderText(/Enter text/i);
        expect(inputElement.getAttribute("id")).toBe('test-input');
    });
});