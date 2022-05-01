import {ERROR_RESPONSE_DATA, NEWS_API} from './constant';

export async function fetchAllNews() {
    const response = await fetch(NEWS_API);
    
    if (!response.ok) {
        return [null, ERROR_RESPONSE_DATA];
    }

    return [await response.json(), null];
}