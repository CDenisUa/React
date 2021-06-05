import {FormFieldComponent} from "./FormFieldComponent/FormFieldComponent";
import {useCustomHookUseState} from "./CustomHookUseState";
import {useState} from "react";

export const UseStateComponent = () => {
    const [nameValue, setNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [ageValue, setAgeValue] = useState(21);
    const [elem, inc, dec, clear] = useCustomHookUseState(200,10)

    const clearForm = (event) => {
        event.preventDefault();
        setNameValue('');
        setLastNameValue('');
        setAgeValue(0);
    }

    return (
        <>
            <h2 className='title'>Use state hook</h2>
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
                    onchange={event => setAgeValue(+event.target.value)}
                />
                <button
                    className="button"
                    onClick={clearForm}
                >
                    Clear
                </button>
            </form>
            <div>
                <ul>
                    <li>Name: {nameValue}</li>
                    <li>Last Name: {lastNameValue}</li>
                    <li>Age: {ageValue}</li>
                </ul>
            </div>
            <h2 className='title'>Custom hook useState</h2>
            <button className='button' onClick={clear}>My counter from my hook {elem}</button>
            <button className='button' onClick={inc}>plus</button>
            <button className='button' onClick={dec}>minus</button>
        </>
    )
}

