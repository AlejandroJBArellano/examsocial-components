import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import IndexButton from './IndexButton';

describe('IndexButton', () => {
    it('renders with primary background color', () => {
        render(<IndexButton bgColor="primary" />);
        const button = screen.getByRole('button');
        expect(button.className).toContain('bg-primary');
    });

    it('renders with extra background color', () => {
        render(<IndexButton bgColor="extra" />);
        const button = screen.getByRole('button');
        expect(button.className).toContain('bg-extra');
    });

    it('renders with neutral background color', () => {
        render(<IndexButton bgColor="neutral" />);
        const button = screen.getByRole('button');
        expect(button.className).toContain('bg-neutral');
    });

    it('renders with additional props', () => {
        render(<IndexButton bgColor="primary" data-testid="index-button" />);
        const button = screen.getByTestId('index-button');
        expect(button).toBeDefined();
    });

    it('renders CheckMark component', () => {
        render(<IndexButton.CheckMark />);
        const svg = screen.getByRole('img', { hidden: true });
        expect(svg).toBeDefined();
    });
});