import {
  FETCH_APP_ORGANIZATION,
  FIRST_FETCH_APP_ORGANIZATION
} from "../actions/crmactionOrganization.js";
import _ from "lodash";
//export default (state=[],action)=>{
export default (state = null, action) => {
  switch (action.type) {
    case FETCH_APP_ORGANIZATION:
      let ret = JSON.parse(action.payload.data.DoWorkResult).Result;
      console.log(action.payload);
      console.log(ret.result);
      let mResult = [];
      if (state != null) {
        mResult = _.unionBy(state, ret.result, "OrganizeId");
      } else {
        mResult = ret.result;
      }
      return mResult;
    case FIRST_FETCH_APP_ORGANIZATION:
      let ret2 = JSON.parse(action.payload.data.DoWorkResult).Result;
      //   console.log(action.payload);
      //   console.log(ret.result);

      return ret2.result;
  }
  return state;

  /* const rootItems = MenuAPI('CRM','CRM');      
    return rootItems;*/
};
