import React, { useEffect } from "react";
import FormSteps from "../form/FormSteps";
import { PageState } from "../../utils";
import { getPageConfig } from "../../api";

export default function Page({configId}) {
    const [pageState, setPageState] = React.useState(PageState.LOADING)
    const [pageConfig, setPageConfig] = React.useState({});

    const loadPageConfig = async (configId) => {
        try {
            const pageConfig = await getPageConfig(configId);
            setPageConfig(pageConfig);
            setPageState(PageState.LOADED);
        } catch (error) {
            console.error(error);
            setPageState(PageState.FAILED);
        }
    }

    useEffect(() => {loadPageConfig(configId);}, [configId]);

    if (pageState === PageState.LOADING) {
        return <div>Loading....</div>
    }
    else if (pageState === PageState.FAILED) {
        return <div>Failed to load the page. Contact at support@landeed.com</div>
    }
    
    if (pageConfig.page_type === 'form_steps') {
        return <FormSteps formConfig={pageConfig} />
    }

    return <div>Invalid Page Config. Contact at support@landeed.com</div>
}