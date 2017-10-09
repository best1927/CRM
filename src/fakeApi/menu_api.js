import mDataList from './menudata';

const res = mDataList;

export  const getRootMenu = (modulCode,schemaCode) => {
  const ret = res.filter((m)=> {
   return m.NODE_LEVEL ==='P'

    });
    return ret;
}

export const getChild=(modulCode, programCode,schemaCode) =>{
   const ret =  res.filter((m)=>{
return m.PARENT_PROGRAM_CODE === programCode
});
return ret;
}







