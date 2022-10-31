import { useMemo, useState } from "react";
import Field from "./Field";

function FormBuilder({btnLabel, fields}) {
    if(!fields || !fields.length) {
        return null;
    }
    const initialState = useMemo(() => fields.reduce((prev, current) => {
        const prevObj = prev.id ? {[prev.id]: prev.value} : {...prev};
        return {
            ...prevObj,
            [current.id]: current.value
        }
    }), [fields]);
    const [formValue, setFormValue] = useState(initialState);
    
    const onFieldChange = (e) => {
        const target = e.currentTarget;
        const key = target?.id;
        const value = target?.value?.trim();
        setFormValue({
            ...formValue,
            [key]: value || ''
        });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log('form ', formValue);
    }
    
    return <form onSubmit={onFormSubmit}>
        {fields?.map((field) => {
            return !!field?.id ? <Field key={field.id} onChange={onFieldChange} {...{...field}} value={formValue[field.id]} /> : null;
        })}
        <button type='submit'>{btnLabel || 'Submit'}</button>
    </form>
}

export default FormBuilder;