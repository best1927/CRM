import {FETCH_APP_CONTENT} from '../actions/crmactionPromise.js'; 
//export default (state=[]],action)=>{
export default (state=null,action)=>{
   switch(action.type){
        case FETCH_APP_CONTENT :
      console.log(action.payload);
          return action.payload.data.TestPostResult;
          //return action.payload.data.TestPostResult;
    }
    return state;

   /* const rootItems = MenuAPI('CRM','CRM');      
    return rootItems;*/

    
}