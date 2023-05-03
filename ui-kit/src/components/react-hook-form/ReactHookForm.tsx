// Core
import { FC } from 'react';
// Components
import ControlledForm from './components/controlled-form/ControlledForm';
import UncontrolledForm from './components/uncontrolled-form/UncontrolledForm';

const ReactHookForm: FC = () => {
    return (
        <div>
            <ControlledForm />
            <UncontrolledForm />
        </div>
    );
};

export default ReactHookForm;
