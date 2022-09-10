import React, { useState} from "react";
import './tab.css'

const Tab = ({Language,setTabValue}) => {
const [active,setActive]=useState(-1);

console.log(Language)
  return (
    <div className="tabcontainer">
      {
        Language && Language.map(
          (item,i)=>{
            return (
               <button key={i}  className={(i===active)?'buttonClass activetab':'buttonClass'} onClick={(e) => {
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