// Core
import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
// Components
import { InputText } from './InputText';

describe('CustomInput', () => {
    it('should render a label and input element', () => {
        const { getByLabelText } = render(
            <InputText value="" onChange={() => {}} label="Name" id="name" />
        );

        expect(getByLabelText('Name')).toBeInTheDocument();
    });

    it('should call the onChange function when the input value changes', () => {
        const onChange = vi.fn();
        const { getByLabelText } = render(
            <InputText value="" onChange={onChange} label="Name" id="name" />
        );
        const input = getByLabelText('Name');

        fireEvent.change(input, { target: { value: 'John' } });

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith('John');
    });

    it('should display an error message when the value is invalid', () => {
        const { getByRole, getByLabelText } = render(
            <InputText value="" onChange={() => {}} label="Name" id="name" />
        );
        const input = getByLabelText('Name');

        fireEvent.blur(input);

        expect(getByRole('alert')).toHaveTextContent('Please enter a value');
    });
});
