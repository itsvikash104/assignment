export function TextInput({inputId, labelText, placeholder, value, required, onChange}) {
    const handleChange = (event) => onChange(inputId, event.target.value);
    return <div className="form-text-element">
        <label htmlFor={inputId}>{labelText}{required ? "*" : ""} : </label>
        <input type='text' id={inputId} value={value} placeholder={placeholder} onChange={handleChange}></input>
    </div>
}

export function SelectInput({inputId, labelText, placeholder, value, options, required, onChange}) {
    const handleChange = (event) => onChange(inputId, event.target.value);
    return <div className="form-select-element">
        <label htmlFor={inputId}>{labelText}{required ? "*" : ""} : </label>
        <select id={inputId} onChange={handleChange} value={value}>
            <option value="">{placeholder}</option>
            {options?.length > 0 && options.map((option_details, i) => 
                <option key={i + 1} value={option_details.value}>
                    {option_details.name || option_details.value}
                </option>
            )}
        </select>
    </div>
}

export function NumberInput({inputId, labelText, placeholder, value, required, onChange}) {
    const handleChange = (event) => onChange(inputId, event.target.valueAsNumber);
    return <div className="form-number-element">
        <label htmlFor={inputId}>{labelText}{required ? "*" : ""} : </label>
        <input type="number" placeholder={placeholder} value={value} onChange={handleChange} />
    </div>
}

export function CustomSelectInput({inputId, labelText, placeholder, value, options, required, onChange}) {
    const handleChange = (event) => onChange(inputId, event.target.value);
    return <div className="form-custom-select-element">
        <label htmlFor={inputId}>{labelText}{required ? "*" : ""} : </label>
        <input type="text" list="professions-options" placeholder={placeholder} value={value} onChange={handleChange} />
        <datalist id="professions-options">
            {options?.length > 0 && options.map((profession, i) => <option key={i}>{profession.value}</option>)}
        </datalist>
    </div>
}

export function TextAreaInput({inputId, labelText, placeholder, value, required, onChange}) {
    const handleChange = (event) => onChange(inputId, event.target.value);
    return <div className="form-text-area-element">
        <label htmlFor={inputId}>{labelText}{required ? "*" : ""} : </label>
        <textarea placeholder={placeholder} onChange={handleChange} value={value} ></textarea>
    </div>
}