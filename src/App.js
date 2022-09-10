import "./App.css";
import { useState, useEffect } from "react";
import Form from "./component/form/form";
import Show from "./component/show/show";
import Tab from "./component/tab/Tab";

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

  const sortingAsc=(col)=>{

      const sorted =[...filterList]
      if(col=="Title"){
      sorted.sort((a,b)=>{
        console.log(a.title>b.title)
        return a.title>b.title?1:-1
      })
      setFilterList(sorted)
    }
    else if(col=="Rating"){
      sorted.sort((a,b)=>{
        return a.Rating>b.Rating?1:-1
      })
      setFilterList(sorted)
    }
  }

  const sortingDesc=(col)=>{
    const sorted =[...filterList]
    if(col=="Title"){
      sorted.sort((a,b)=>{
        console.log(a.title>b.title)
        return b.title>a.title?1:-1
      })
      setFilterList(sorted)
    }
    else if(col=="Rating"){
      sorted.sort((a,b)=>{
        return b.Rating>a.Rating?1:-1
      })
      setFilterList(sorted)
    }
}



  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <div className="title">Movie Form</div>
          <Form formFields={formFields} setFormFields={setFormFields} />
        </div>
        <div className="right">
          {list.length>0?<p className="movie-title">My Movies</p>:""}
          <div className="tab">
          <Tab Language={langList} setTabValue={setTabValue} tabValue={tabValue}/>
          </div>
          <div>
          {list.length?
          <div className="sort">

            <div className="sort-title">
            <span  >Title</span>
              <div className="sort-button">
              <span onClick={()=>sortingAsc("Title")} className="up">▲</span>
                <span onClick={()=>sortingDesc("Title")} className="down">▼</span>
              </div>
            </div>

            <div className="sort-rating">
            <span >Rating</span>
              <div className="sort-button">
              <span onClick={()=>sortingAsc("Rating")} className="up">▲</span>
                <span onClick={()=>sortingDesc("Rating")} className="down">▼</span>
                
              </div>
            </div> 

          </div>
          :""
          }
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
