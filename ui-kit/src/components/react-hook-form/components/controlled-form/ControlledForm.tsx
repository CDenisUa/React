// Core
import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
// Types
import { FormPropTypes, FormSubmitTypes } from '../../ReactHookForm.types';
// Styles
import styles from '../../ReactHookForm.module.css';

const ControlledForm: FC = () => {
    const { register, handleSubmit, watch } = useForm<FormPropTypes>();
    const [data, setData] = useState<string>('');

    const onSubmit: SubmitHandler<FormSubmitTypes> = (submitData) => {
        setData(JSON.stringify(submitData, null, 2));
    };

    return (
        <div className={styles['form-container']}>
            <div>
                <h2 className="title">Uncontrolled form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className={styles['form-label']} htmlFor="name">
                        Name:
                        <input {...register('name')} />
                    </label>
                    <label className={styles['form-label']} htmlFor="password">
                        Password:
                        <input type="password" {...register('password')} />
                    </label>
                    <label htmlFor="agreement">
                        Agreement:
                        <input type="checkbox" {...register('agreement')} />
                    </label>
                    <div>
                        <button type="submit"> Send </button>
                    </div>
                </form>
            </div>
            <div className={styles.result}>
                <pre>{data}</pre>
            </div>
        </div>
    );
};

export default ControlledForm;
