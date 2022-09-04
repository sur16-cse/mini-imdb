import React,{useRef} from 'react'
import "react-languages-select/css/react-languages-select.css";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';

const Form = ({formFields,setFormFields}) => {
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [Image,setSelectedImage]=useState("")
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [rating, setRating] = useState(0);
  const urlInput = useRef(null);
  

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      title : title,
      description : description,
      Image : Image,
      Language : selectedLanguage,
      Rating : rating
    }
    setFormFields(data)
       console.log(formFields)
       setTitle("");
       setDescription("")
       setRating(0)
       setSelectedLanguage("")
       setSelectedImage("")
       urlInput.current.value="";
  };

  const setClear=()=>{
    setTitle("");
    setDescription("")
    setRating(0)
    setSelectedLanguage("")
    setSelectedImage("")
    urlInput.current.value="";
  }

  return (
    <form id="userform" onSubmit={handleSubmit}>

    <label htmlFor="title">Title</label>
    <input type="text" name="title" required value={title}
    onChange={e => setTitle(e.target.value)}/>

    <label htmlFor="description">Description</label>
    <textarea rows="4" cols="50" form="usrform" name="description" required 
    value={description} onChange={e => setDescription(e.target.value)}/>

    <label htmlFor="inputTag">Image url</label>
    <input type="url" name="image-input"  ref={urlInput}
        // value={Image}
      
        onChange={(event) => {
        setSelectedImage(event.target.value)
    }}  />

    <p>OR</p>

      <input className='select-image' type="file" accept="image/png, image/jpg, image/gif, image/jpeg"
        name="image-input"
        onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
          // value={Image}
      />
      <div className="flexa">
      <Typography component="legend">Rating</Typography>
      <Rating
      required
        name="rating"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
  </div>
  <div className="flexa">
      <span>Language</span>
      <select
          className="selectBox"
          onChange={(e)=>
          {
            console.log(e.target.value)
            setSelectedLanguage(e.target.value);
          }}
          name="lang"
          value={selectedLanguage}
        >
         <option className="optionsMenu" value="" selected disabled hidden>
            Select
          </option>
          <option className="optionsMenu" value="English">
            English
          </option>
          <option className="optionsMenu" value="Tamil">
            Tamil(தமிழ்)
          </option>
          <option className="optionsMenu" value="Telugu">
            Telugu(తెలుగు)
          </option>
          <option className="optionsMenu" value="Spanish">
            Spanish(española)
          </option>

        </select>
  </div>
  <div className="flexa">
    <Button variant="contained" type="submit">Save</Button>
    <Button variant="contained" onClick={setClear}>Clear</Button>
  </div>
</form>
  )
}

export default Form