import axios from "axios";

export const FETCH_APP_ORGANIZATIONVIEW = "FETCH_APP_ORGANIZATIONVIEW";
export const FETCH_APP_ORGANIZATIONTAB = "FETCH_APP_ORGANIZATIONTAB";
// export const FIRST_FETCH_APP_ORGANIZATION = "FIRST_FETCH_APP_ORGANIZATION";
// export const GET_FILTER_CONTENT = "GET_FILTER_CONTENT";

const url = "http://localhost:54842/GenericService.svc/DoWork";
const axconfig = {
  responseType: "json",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8"
  }
};
export function fetchAppOrganizationview(displayContent, callback) {
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
  return { type: FETCH_APP_ORGANIZATIONVIEW, payload: req };
}

export function fetchAppOrganizationtab(displayContent, callback) {
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
  return { type: FETCH_APP_ORGANIZATIONTAB, payload: req };
}
