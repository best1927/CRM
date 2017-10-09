import axios from "axios";

export const FETCH_APP_CONTENT = "FETCH_APP_CONTENT";

const url = "http://localhost:1664/GenericService.svc/TestPost";
const axconfig = {
  responseType: "json",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
};
export function fetchAppContent(displayContent, callback) {
  const data = {
    param: displayContent
  };
  const req = axios.post(url, JSON.stringify(data), axconfig).then(
    response => {
      if (callback !== undefined && callback !== null) {
        callback();
      } else {
        return response;
      }
    },
    error => {
      console.log(error);
      return error;
    }
  );
  return { type: FETCH_APP_CONTENT, payload: req };
}
