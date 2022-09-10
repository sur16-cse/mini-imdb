import React from 'react'
import './show.css'
import Rating from '@mui/material/Rating';

const Show = ({data,deleteitem}) => {
  return (
    <>
      <div className='show-container'>
      <div className='show-container-left'>
                <div >
                    <img
                    alt="not found"
                    width={"160px"}
                    src={
                        typeof data.Image === "string"
                        ? String(data.Image)
                        : URL.createObjectURL(data.Image)
                    }
                    />
                </div>
                <div className='details'>
                    <div style={{fontWeight:500}}>{data.title}</div>
                    <div>{data.description}</div>
                    <button className="remove-button" onClick={() => deleteitem(data)}>
                        Remove
                    </button>
                </div>
            </div>
              <div className='show-container-right'>
              <Rating
              required
                name="rating"
                value={data.Rating}
              />
              </div>
      </div>  
    </>
  )
}

export default Show