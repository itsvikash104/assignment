import React from 'react';
import FormInputElement from './FormInputElement';
import Timer from '../timer/Timer';
import { SaveState, valid } from '../../utils';
import { saveUserDetails } from '../../api';

function FormStep({step, onChange}) {
    const { inputs } = step;
    return (
        <div className="form-step-container">
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
            for (const inputElement of step.inputs) {
                if (inputElement.input_id === inputId) {
                    inputElement.input_value = newValue;
                    valid(inputElement);
                }
            }
        }
        setFormJson(formJsonCopy);
    }

    const forceRender = () => {
        setFormJson({...formJson});
    }

    const allValid = () => {
        let allValid = true;
        for (const step of formJson.form_steps) {
            if(step !== formJson.form_steps[stepIndex]) {
                continue
            }
            for (const inputElement of step.inputs) {
                if(!valid(inputElement)) {
                    allValid = false;
                }
            }
        }
        return allValid;
    }

    const handleNextClick = () => {
        if(!allValid()) {
            forceRender();
            return
        }
        setStepIndex(prev => prev + 1);
    }

    const handleBackClick = () => {
        if(!allValid()) {
            forceRender();
            return
        }
        setStepIndex(prev => prev - 1);
    }

    const handleFormTimeout = () => {
        setTimeover(true);
        setTimeout(() => {window.location.href = "/"}, 5000)
    }

    const handleSubmitClick = async () => {
        if (!allValid) {
            forceRender()
            return
        }

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
        <div className="form-steps-container card text-bg-light border-secondary mt-5">
            <h3 className="form-name text-center card-header p-3">{formJson?.form_title}</h3>
            
            {saveState === SaveState.SAVE_IN_PROGRESS && <p className="h5 p-3">Save in progress...</p>}
            
            {saveState === SaveState.SAVE_FAILED && <p className="h5 p-3">Failed to save! <a href="/">Retry</a> </p>}
            
            {saveState === SaveState.SAVE_SUCCEEDED && <>
                <p className="h5 p-3">Thanks for the input. <a href={userLink}>Go to saved data</a></p>
            </>}
            
            {saveState === SaveState.SAVE_UNTOUCHED && <>
                {timeover ? (<p className="h5 p-3">Time Over. Reloading...</p>) : (
                    <>
                        <div className="progress" role="progressbar" aria-label="Step 1px high" style={{height: "2px"}} aria-valuenow={stepIndex + 1} aria-valuemin={0} aria-valuemax={formJson?.form_steps.length}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: `${(stepIndex + 1) * 100 / formJson?.form_steps.length}%`}}></div>
                        </div>
                        
                        <FormStep step={formJson?.form_steps[stepIndex]} onChange={handleChange} />
                        
                        <div className="form-action-group d-flex justify-content-between">
                            {stepIndex + 1 !== 1 ? <button className="btn btn-secondary m-3" onClick={handleBackClick}>Back</button> : <div></div>}
                            {stepIndex + 1 !== formJson?.form_steps.length && <button className="btn btn-primary justify-content-end m-3" onClick={handleNextClick}>Next</button>}
                            {stepIndex + 1 === formJson?.form_steps.length && <button className="btn btn-primary justify-content-end m-3" onClick={handleSubmitClick}>Submit</button>}
                        </div>
                    </>
                )}
            </>}
            <div className="card-footer text-center"><Timer timeoutSec={formJson.form_timeout_seconds} onTimeout={handleFormTimeout} /></div>
        </div>
    )
}