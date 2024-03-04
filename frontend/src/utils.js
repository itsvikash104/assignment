export const SaveState = {
    SAVE_UNTOUCHED: 'SAVE_UNTOUCHED',
    SAVE_IN_PROGRESS: 'SAVE_IN_PROGRESS',
    SAVE_SUCCEEDED: 'SAVE_SUCCEEDED',
    SAVE_FAILED: 'SAVE_FAILED'
};

export const PageState = {
    LOADING: 'LOADING',
    LOADED: 'LOADED',
    FAILED: 'FAILED'
};

export const FormInputTypes = {
    TEXT: 'text',
    SELECT: 'select',
    NUMBER: 'number',
    CUSTOM_SELECT: 'custom_select',
    TEXT_AREA: 'text_area'
};

export const FormInputId = {
    NAME: 'name',
    GENDER: 'gender',
    AGE: 'age',
    PROFESSION: 'profession',
    SERVICES: 'services',
    FOUND_THROUGH: 'found_through'
};

export const PageConfigs = {
  USER_DETAILS_FORM: 'USER_DETAILS_FORM'
};

export const PageConfigUrls = {
    USER_DETAILS_FORM: '/api/v1/page_config/user_details_form.json'
}

export function valid(inputElement) {
    const value = inputElement.input_value;
    if (inputElement.input_id === FormInputId.NAME) {
        if (!value || value.length === 0) {
            inputElement.validation = "Name required!";
            return false;
        }
        inputElement.validation = undefined;
    }
    else if (inputElement.input_id === FormInputId.GENDER) {
        if (!value || value.length === 0) {
            inputElement.validation = "Gender required!";
            return false;
        }
        inputElement.validation = undefined;
    }
    else if (inputElement.input_id === FormInputId.AGE) {
        if (!value || value === "") {
            inputElement.validation = "Age required!";
            return false;
        }
        else if (!value || value <= 0 || value >= 200) {
            inputElement.validation = "Invalid age!";
            return false;
        }
        inputElement.validation = undefined;
    }
    else if (inputElement.input_id === FormInputId.PROFESSION) {
        if (!value || value.length === 0) {
            inputElement.validation = "Profession required!";
            return false;
        }
        inputElement.validation = undefined;
    }
    else if (inputElement.input_id === FormInputId.SERVICES) {
        if (!value || value.length === 0) {
            inputElement.validation = "Services required!";
            return false;
        }
        inputElement.validation = undefined;
    }
    return true;
}