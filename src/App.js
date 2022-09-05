import "./App.css";
import { useState, useEffect } from "react";
import Form from "./component/form";
import Show from "./component/show";
import Tab from "./component/Tab";

function App() {
  const [list, setList] = useState([]); // list to set form submissions
  const [formFields, setFormFields] = useState({}); // formdata
  const [langList, setLangList] = useState([]);
  const [tabValue, setTabValue] = useState("");
  const [filterList, setFilterList] = useState([]);
  
  if (Object.keys(formFields).length !== 0) {
    // const listItem=[...list]
    setList((olddata) => [...olddata, formFields]);
    setLangList([...langList.filter(item => item!=formFields.Language),formFields.Language]);
    console.log(filterList);
    setFormFields({});
  }

  useEffect(() => {
    (tabValue==="")?setFilterList(list):setFilterList(list.filter((item) => item.Language===tabValue))

  }, [tabValue,langList])
  
  console.log(filterList +" filter")
    console.log(list)
    console.log(tabValue+" valuetab")
  const deleteitem = (ite) => {
    const listitems = [...list];
    console.log(ite);
    setList(listitems.filter((obj) => obj.title != ite.title));
    setLangList(langList.filter((obj) => obj != ite.Language));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <div className="title">Movie Form</div>
          <Form formFields={formFields} setFormFields={setFormFields} />
        </div>
        <div className="right">
          {list.length>0?<p>My Movies</p>:""}
          <div className="tab">
          <Tab Language={langList} setTabValue={setTabValue} tabValue={tabValue}/>
          </div>
          <div>
            {filterList &&
              filterList.map((t,i) => {
                return  (
                  <div key={i}>
                    <Show data={t} deleteitem={deleteitem}  tablanguage={tabValue} />
                  </div>
                ) 
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
