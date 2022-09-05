import React, {useEffect, useState} from "react";
import './tab.css'
const BUTTON_TYPE_CLASSES={
  active:"activetab",
}
const Tab = ({Language,setTabValue,tabValue}) => {
const [active,setActive]=useState(-1);

console.log(Language)
  return (
    <div >
      {
        Language && Language.map(
          (item,i)=>{
            return (
               <button key={i}  className={(i==active)?'buttonClass activetab':'buttonClass'} onClick={(e) => {
                  setActive(i);
                  setTabValue(item);
               }}>{item}</button>
            )
          }
        )
      }
    </div>
  );
};

export default Tab