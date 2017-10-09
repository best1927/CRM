import axios from 'axios';

export const FETCH_APP_CONTENT = "FETCH_APP_CONTENT";

const url = 'http://localhost:1664/GenericService.svc/TestPost';
const axconfig = {
    responseType: 'json',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}
export function fetchAppContent(displayContent) {
    const data = {
        param: displayContent
    };
    return (dispatch) => {
         axios
            .post(url, JSON.stringify(data), axconfig)
            .then((respose) => {
                dispatch({type: FETCH_APP_CONTENT, payload: respose.data})
                .error((respose) => dispatch({type: FETCH_APP_CONTENT, payload: respose.error}))
            })
    };
}
