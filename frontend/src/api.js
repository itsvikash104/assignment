import { PageConfigUrls } from "./utils";

export async function getPageConfig(configId) {
    const response = await fetch(PageConfigUrls[configId]);
    const pageConfig = await response.json();
    return pageConfig;
}

export async function saveUserDetails(userDetails) {
    const options = {
        method: 'post', 
        body: JSON.stringify(userDetails), 
        headers: {'content-type': 'application/json'}
    };
    const response = await fetch("/api/v1/user_details", options);
    if (!response.ok) {
        throw Error()
    }
    const data = await response.json();
    return data.link;
}