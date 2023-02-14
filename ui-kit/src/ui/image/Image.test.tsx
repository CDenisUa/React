// Core
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
// Components
import { Image } from '@/ui';

describe('Testing Image component', () => {
    it('Check attributes in Image component', () => {
        render(<Image src="/vite.svg" alt="vite" />);
        expect(screen.getByRole('img'));
        expect(screen.getByAltText('vite'));
    });
});
