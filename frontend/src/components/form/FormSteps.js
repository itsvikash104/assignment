import React from 'react';
import FormInputElement from './FormInputElement';
import Timer from '../timer/Timer';
import { SaveState } from '../../enums';
import { saveUserDetails } from '../../api';

function FormStep({step, onChange}) {
    const { page_title, inputs } = step;
    return (
        <div className="form-step-container">
            <div className="form-step-name">{page_title}</div>
            {
                inputs?.length > 0 && inputs.map((input_element, i) => (
                    <FormInputElement key={i} element={input_element} onChange={onChange} />
                ))
            }
        </div>
    );
}

export default function FormSteps({formConfig}) {
    const [formJson, setFormJson] = React.useState(formConfig);
    const [stepIndex, setStepIndex] = React.useState(0);
    const [timeover, setTimeover] = React.useState(false);
    const [saveState, setSaveState] = React.useState(SaveState.SAVE_UNTOUCHED);
    const [userLink, setUserLink] = React.useState("");

    const handleChange = (inputId, newValue) => {
        const formJsonCopy = JSON.parse(JSON.stringify(formJson));
        for (const step of formJsonCopy.form_steps) {
            for (const input_element of step.inputs) {
                if (input_element.input_id === inputId) {
                    input_element.input_value = newValue;
                }
            }
        }
        setFormJson(formJsonCopy);
    }

    const handleFormTimeout = () => {
        setTimeover(true);
    }

    const handleSubmit = async () => {
        const userDetails = {};

        for (const step of formJson.form_steps) {
            for (const input_element of step.inputs) {
                userDetails[input_element.input_id] = input_element.input_value;
            }
        }
        
        setSaveState(SaveState.SAVE_IN_PROGRESS);

        try {
            const userDetailLink = await saveUserDetails(userDetails);
            setSaveState(SaveState.SAVE_SUCCEEDED);
            setUserLink(userDetailLink);
        } catch {
            setSaveState(SaveState.SAVE_FAILED);
        }
    }

    return (
        <div className="form-steps-container">
            <h3 className="form-name">{formJson?.form_title}</h3>
            
            {saveState === SaveState.SAVE_IN_PROGRESS && <div>Save in progress...</div>}
            
            {saveState === SaveState.SAVE_FAILED && <div>Failed to save!</div>}
            
            {saveState === SaveState.SAVE_SUCCEEDED && <>
                <div>Your response has been saved successfully. <a href={userLink}>Go to saved data</a></div>
            </>}
            
            {saveState === SaveState.SAVE_UNTOUCHED && <>
                <Timer timeoutSec={formJson.form_timeout_seconds} onTimeout={handleFormTimeout} />
                
                {timeover ? (<>Time Over</>) : (
                    <>
                        <div>Step {stepIndex + 1}/{formJson?.form_steps.length}</div>
                        
                        <FormStep step={formJson?.form_steps[stepIndex]} onChange={handleChange} />
                        
                        {stepIndex + 1 !== 1 && <button onClick={() => setStepIndex(stepIndex - 1)}>Back</button>}
                        {stepIndex + 1 !== formJson?.form_steps.length && <button onClick={() => setStepIndex(stepIndex + 1)}>Next</button>}
                        {stepIndex + 1 === formJson?.form_steps.length && <button onClick={handleSubmit}>Submit</button>}
                    </>
                )}
            </>}
        </div>
    )
}