import { FormInputTypes } from "../../enums";
import { TextInput, SelectInput, NumberInput, CustomSelectInput, TextAreaInput } from "./FormInputs";

export default function FormInputElement({element: input_element, onChange}) {
    if (input_element.input_type === FormInputTypes.TEXT) {
        return (
            <TextInput
                inputId={input_element.input_id}
                labelText={input_element.input_label}
                placeholder={input_element.input_placeholder}
                value={input_element.input_value}
                required={input_element.input_required}
                onChange={onChange} />
        )
    }
    else if (input_element.input_type === FormInputTypes.SELECT) {
        return (
            <SelectInput
                inputId={input_element.input_id}
                labelText={input_element.input_label}
                placeholder={input_element.input_placeholder}
                value={input_element.input_value}
                options={input_element.input_options}
                required={input_element.input_required}
                onChange={onChange} />
        )
    }
    else if (input_element.input_type === FormInputTypes.NUMBER) {
        return (
            <NumberInput
                inputId={input_element.input_id}
                labelText={input_element.input_label}
                placeholder={input_element.input_placeholder}
                value={input_element.input_value}
                required={input_element.input_required}
                onChange={onChange} />
        )
    }
    else if (input_element.input_type === FormInputTypes.CUSTOM_SELECT) {
        return (
            <CustomSelectInput
                inputId={input_element.input_id}
                labelText={input_element.input_label}
                placeholder={input_element.input_placeholder}
                value={input_element.input_value}
                options={input_element.input_options}
                required={input_element.input_required}
                onChange={onChange} />
        )
    }
    else if (input_element.input_type === FormInputTypes.TEXT_AREA) {
        return (
            <TextAreaInput
                inputId={input_element.input_id}
                labelText={input_element.input_label}
                placeholder={input_element.input_placeholder}
                value={input_element.input_value}
                required={input_element.input_required}
                onChange={onChange} />
        )
    }
    return <div>
        {input_element.input_id}
    </div>
}
