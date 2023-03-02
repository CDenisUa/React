import { useMemo, useCallback, ChangeEvent } from 'react';

type Props = {
    value: string;
    onChange: (value: string) => void;
    label: string;
    id: string;
};

export const InputText = ({ value, onChange, label, id }: Props) => {
    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            onChange(event.target.value);
        },
        [onChange]
    );

    const memoizedValue = useMemo(() => value, [value]);

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                type="text"
                value={memoizedValue}
                onChange={handleChange}
                id={id}
                aria-label={label}
                aria-invalid={!value}
                aria-required
                autoComplete="off"
            />
            {!value && <span role="alert">Please enter a value</span>}
        </div>
    );
};
