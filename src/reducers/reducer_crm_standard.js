import {
  GET_FILTER_CONTENT,
  GET_USER_TEAM_CONTENT,
  GET_SUB_GD_CONTENT
} from "../actions/crmstandardaction.js";
import _ from "lodash";
//export default (state=[],action)=>{
export default (state = null, action) => {
  switch (action.type) {
    case GET_FILTER_CONTENT:
      let ret = JSON.parse(action.payload.data.DoWorkResult).Result;

      return { ...state, GdFilter: ret.result };
      //return ret.result;

      case GET_SUB_GD_CONTENT:
      let ret2 = JSON.parse(action.payload.data.DoWorkResult).Result;
      return { ...state, SubGdFilter: ret2.result };
      break;
      
    case GET_USER_TEAM_CONTENT:
      let ret3 = JSON.parse(action.payload.data.DoWorkResult).Result;
      return { ...state, UserTeamFilter: ret3.result };
      break;
  }
  return state;

  /* const rootItems = MenuAPI('CRM','CRM');      
      return rootItems;*/
};
