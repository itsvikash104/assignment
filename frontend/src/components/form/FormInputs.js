export function TextInput({inputId, labelText, placeholder, value, required, validation, onChange}) {
    const handleChange = (event) => onChange(inputId, event.target.value);
    return <div className="form-text-element m-3">
        <label className="form-label" htmlFor={inputId}>{labelText}{required ? "*" : ""}</label>
        <input className={`form-control ${validation ? "is-invalid" : ""}`} type='text' id={inputId} value={value} placeholder={placeholder} onChange={handleChange}></input>
        {validation && <div className="invalid-feedback">{validation}</div>}
    </div>
}

export function SelectInput({inputId, labelText, placeholder, value, options, required, validation, onChange}) {
    const handleChange = (event) => onChange(inputId, event.target.value);
    return <div className="form-select-element m-3">
        <label className="form-label" htmlFor={inputId}>{labelText}{required ? "*" : ""}</label>
        <select className={`form-control ${validation ? "is-invalid" : ""}`} id={inputId} onChange={handleChange} value={value}>
            <option value="">{placeholder}</option>
            {options?.length > 0 && options.map((option_details, i) => 
                <option key={i + 1} value={option_details.value}>
                    {option_details.name || option_details.value}
                </option>
            )}
        </select>
        {validation && <div className="invalid-feedback">{validation}</div>}
    </div>
}

export function NumberInput({inputId, labelText, placeholder, value, required, validation, onChange}) {
    const handleChange = (event) => onChange(inputId, event.target.valueAsNumber);
    return <div className="form-number-element m-3">
        <label className="form-label" htmlFor={inputId}>{labelText}{required ? "*" : ""}</label>
        <input className={`form-control ${validation ? "is-invalid" : ""}`} type="number" placeholder={placeholder} value={value} onChange={handleChange} />
        {validation && <div className="invalid-feedback">{validation}</div>}
    </div>
}

export function CustomSelectInput({inputId, labelText, placeholder, value, options, required, validation, onChange}) {
    const handleChange = (event) => onChange(inputId, event.target.value);
    return <div className="form-custom-select-element m-3">
        <label className="form-label" htmlFor={inputId}>{labelText}{required ? "*" : ""}</label>
        <input className={`form-control ${validation ? "is-invalid" : ""}`} type="text" list="professions-options" placeholder={placeholder} value={value} onChange={handleChange} />
        <datalist id="professions-options">
            {options?.length > 0 && options.map((profession, i) => <option key={i}>{profession.value}</option>)}
        </datalist>
        {validation && <div className="invalid-feedback">{validation}</div>}
    </div>
}

export function TextAreaInput({inputId, labelText, placeholder, value, required, validation, onChange}) {
    const handleChange = (event) => onChange(inputId, event.target.value);
    return <div className="form-text-area-element m-3">
        <label className="form-label" htmlFor={inputId}>{labelText}{required ? "*" : ""}</label>
        <textarea className={`form-control ${validation ? "is-invalid" : ""}`} placeholder={placeholder} onChange={handleChange} value={value} ></textarea>
        {validation && <div className="invalid-feedback">{validation}</div>}
    </div>
}