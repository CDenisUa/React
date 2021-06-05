import {FormFieldComponent} from "./FormFieldComponent/FormFieldComponent";
import {useState} from "react";

export const UseStateComponent = () => {
    const [nameValue, setNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [ageValue, setAgeValue] = useState(21);

    return (
        <>
            <form>
                <FormFieldComponent
                    name='userName'
                    value={nameValue}
                    onchange={event => setNameValue(event.target.value)}
                />
                <FormFieldComponent
                    name='userLastName'
                    value={lastNameValue}
                    onchange={event => setLastNameValue(event.target.value)}
                />
                <FormFieldComponent
                    name='userAge'
                    type={'number'}
                    value={ageValue}
                    onchange={event => setAgeValue(event.target.value)}
                />
            </form>
            <div>
                <ul>
                    <li>Name: {nameValue}</li>
                    <li>Last Name: {lastNameValue}</li>
                    <li>Age: {ageValue}</li>
                </ul>
            </div>
        </>
    )
}

