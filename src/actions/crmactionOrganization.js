import axios from "axios";

export const FETCH_APP_ORGANIZATION = "FETCH_APP_ORGANIZATION";
export const FIRST_FETCH_APP_ORGANIZATION = "FIRST_FETCH_APP_ORGANIZATION";
export const GET_FILTER_CONTENT = "GET_FILTER_CONTENT";

const url = "http://localhost:54842/GenericService.svc/DoWork";
const axconfig = {
  responseType: "json",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8"
  }
};
export function fetchAppContent(displayContent, callback) {
  const data = {
    h: displayContent.h,
    classWithNs: displayContent.classWithNs,
    methodName: displayContent.methodName,
    paramStr: JSON.stringify(displayContent.paramStr)
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
  return { type: FETCH_APP_ORGANIZATION, payload: req };
}

export function firstfetchAppContent(displayContent, callback) {
  const data = {
    h: displayContent.h,
    classWithNs: displayContent.classWithNs,
    methodName: displayContent.methodName,
    paramStr: JSON.stringify(displayContent.paramStr)
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
  return { type: FIRST_FETCH_APP_ORGANIZATION, payload: req };
}



