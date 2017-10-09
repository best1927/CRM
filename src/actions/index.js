import axios from "axios";

export const LOAD_ROOT_MENUS = "LOAD_ROOT_MENUS";
export const GET_MENU_CONTENT = "GET_MENU_CONTENT";  

const url = "http://localhost:54842/GenericService.svc/DoWork";
const axconfig = {
  responseType: "json",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8"
  }
}; 

export function loadRootMenus(moduleCode, schemaCode) {
    let pData = {};
    pData.MODULE_CODE = "CRM0001";
    pData.USER_ACCESS = "SSCRM";

    const data = {
      h: {},
      classWithNs: "Authen_Lib.AuthenController,Authen_Lib",
      methodName: "GetRootMenu",
      paramStr: JSON.stringify(pData)
    };
  
    const req = axios.post(url, JSON.stringify(data), axconfig).then(
      response => { 
          return response; 
      },
      error => {
        console.log(error);
        return error;
      }
    );
    return { type: LOAD_ROOT_MENUS, payload: req };




    // return {
    //     type: LOAD_ROOT_MENUS,
    //     payload: {
    //         moduleCode: moduleCode,
    //         schemaCode: schemaCode
    //     }
    // };
}

// export function GetMenuContent(displayContent, callback) {
//     let pData = {};
//     pData.MODULE_CODE = "CRM0001";
//     pData.USER_ACCESS = "SSCRM";

//     const data = {
//       h: {},
//       classWithNs: "Authen_Lib.AuthenController,Authen_Lib",
//       methodName: "GetMenu",
//       paramStr: JSON.stringify(pData)
//     };
  
//     const req = axios.post(url, JSON.stringify(data), axconfig).then(
//       response => {
//         if (callback !== undefined && callback !== null) {
//           callback();
//         } else {
//           return response;
//         }
//       },
//       error => {
//         console.log(error);
//         return error;
//       }
//     );
//     return { type: GET_MENU_CONTENT, payload: req };
//   }
  