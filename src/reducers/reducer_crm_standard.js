import {
  GET_FILTER_CONTENT  
  } from "../actions/crmstandardaction.js";
  import _ from "lodash";
  //export default (state=[],action)=>{
  export default (state = null, action) => {
    switch (action.type) {
      case GET_FILTER_CONTENT: 
      let ret = JSON.parse(action.payload.data.DoWorkResult).Result;
      
      return ret.result
      break;
    
    }
     return state;
  
    /* const rootItems = MenuAPI('CRM','CRM');      
      return rootItems;*/
  };
  