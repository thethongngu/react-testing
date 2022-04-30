import * as ErrorCode from './constant';

const NEWS_API = 'https://saurav.tech/NewsAPI/everything/cnn.json';

export async function fetchAllNews() {
    const response = await fetch(NEWS_API);
    
    if (!response.ok) {
        return [null, ErrorCode.ERROR_RESPONSE_DATA];
    }

    return [await response.json(), null];
}