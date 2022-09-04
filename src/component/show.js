import React from 'react'
import { useState } from 'react';
import './show.css'
const Show = ({data,deleteitem}) => {
  return (
    <>
      <span>My Movies</span>
      <span>Title</span>
                <div>
                    <img
                    alt="not found"
                    width={"150px"}
                    src={
                        typeof data.Image == "string"
                        ? String(data.Image)
                        : URL.createObjectURL(data.Image)
                    }
                    />
                    <br />
                    <button onClick={() => deleteitem(data)}>
                    Remove
                    </button>
                </div>
                <div>
                    <div>{data.title}</div>
                    <div>{data.description}</div>
                </div>
    </>
  )
}

export default Show