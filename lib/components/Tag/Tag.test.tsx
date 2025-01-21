import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Tag from './Tag';

describe('Tag component', () => {
    it('renders children correctly', () => {
        const { getByText } = render(<Tag>Test Tag</Tag>);
        expect(getByText('Test Tag')).toBeDefined();
    });

    it('has the correct classes applied', () => {
        render(<Tag>Test Tag</Tag>);
        const divElement = screen.getByText('Test Tag');
        expect(divElement.className).toContain('rounded-full');
        expect(divElement.className).toContain('border-sm');
        expect(divElement.className).toContain('border-feedback-success');
        expect(divElement.className).toContain('bg-feedback-success-tint');
        expect(divElement.className).toContain('px-2');
        expect(divElement.className).toContain('py-1');
        expect(divElement.className).toContain('text-xs');
        expect(divElement.className).toContain('xl:text-sm');
    });
});