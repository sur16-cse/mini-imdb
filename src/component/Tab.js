import React, {useState} from "react";

const Tab = ({Language,setTabValue}) => {

console.log(Language)
  return (
    <div >
      {
        Language && Language.map(
          (item)=>{
            return (
              <div onClick={() => setTabValue(item)}>{item}</div>
            )
          }
        )
      }
    </div>
  );
};

export default Tab