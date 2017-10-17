import {
  FETCH_APP_ORGANIZATIONVIEW 
} from "../actions/crmactionOrganizationView.js";
import _ from "lodash";
//export default (state=[],action)=>{
export default (state = null, action) => {
  switch (action.type) {
    case FETCH_APP_ORGANIZATIONVIEW:
      let ret = JSON.parse(action.payload.data.DoWorkResult).Result;
      // console.log(action.payload);
      // console.log(ret.result); 
      return ret.result;
     
  }
  return state;

  /* const rootItems = MenuAPI('CRM','CRM');      
    return rootItems;*/
};
