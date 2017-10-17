import {
  FETCH_APP_ORGANIZATIONTAB ,
} from "../actions/crmactionOrganizationView.js";
import _ from "lodash";
//export default (state=[],action)=>{
export default (state = null, action) => {
  switch (action.type) {
     
      case FETCH_APP_ORGANIZATIONTAB:
      let ret = JSON.parse(action.payload.data.DoWorkResult).Result;
      return ret.result;
  }
  return state;

  /* const rootItems = MenuAPI('CRM','CRM');      
    return rootItems;*/
};
