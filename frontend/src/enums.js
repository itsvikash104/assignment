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

export const PageConfigs = {
  USER_DETAILS_FORM: 'USER_DETAILS_FORM'
};

export const PageConfigUrls = {
    USER_DETAILS_FORM: '/api/v1/page_config/user_details_form.json'
}