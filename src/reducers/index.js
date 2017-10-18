import {combineReducers} from 'redux';
import MenuSidebarReducer from './reducer_menu_sidebar';
import CRMAppItem1Reducer from './reducer_crm_appitem1';
import ReducerOrganization from './reducer_organization';
import ReducerOrganizationView from './reducer_organizationview'; 
import ReducerStandard from './reducer_crm_standard'; 
import ReducerOrganizationTab from './reducer_organizationtab'; 


const rootReducer = combineReducers(
    {
        rootMenus:MenuSidebarReducer,
        crmAppItm1:CRMAppItem1Reducer,
        Orgobjlist:ReducerOrganization,
        TagVisible:ReducerStandard,
        filterObjList: ReducerStandard, 
        dataContextObj:ReducerOrganizationView,
        dataTabObjList:ReducerOrganizationTab
    } 
);
export default rootReducer;