import './FormFieldComponent.css';

export const FormFieldComponent = ({name, type='text', value, onchange}) => (
    <div className='form-input'>
        <label htmlFor={name}>{name}</label>
        <input
            name={name}
            type={type}
            value={value}
            onChange={onchange}
        />
    </div>
);