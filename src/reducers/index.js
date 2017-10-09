import {combineReducers} from 'redux';
import MenuSidebarReducer from './reducer_menu_sidebar';
import CRMAppItem1Reducer from './reducer_crm_appitem1';
import ReducerOrganization from './reducer_organization';
import ReducerStandard from './reducer_crm_standard'; 
 

const rootReducer = combineReducers(
    {
        rootMenus:MenuSidebarReducer,
        crmAppItm1:CRMAppItem1Reducer,
        Orgobjlist:ReducerOrganization,
        TagVisible:ReducerStandard,
        OrgfilterObjList: ReducerStandard, 
    } 
);
export default rootReducer;