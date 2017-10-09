import {getRootMenu,getChild} from '../fakeApi/menu_api';
import {LOAD_ROOT_MENUS} from '../actions/index.js'; 

export default (state=null,action)=>{
   switch(action.type){
        case LOAD_ROOT_MENUS :
          // const rootItems = getRootMenu(action.payload.moduleCode,action.payload.schemaCode);      
          // return rootItems; 
          let menu = JSON.parse(action.payload.data.DoWorkResult).Result;  
          return  menu; 
      //  default:
      //     const ret = getRootMenu('CRM','CRM');      
      //     return ret; 
    }
    return state;

   /* const rootItems = MenuAPI('CRM','CRM');      
    return rootItems;*/
return   
    
}