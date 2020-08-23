import React, { useState, useEffect } from "react"

const GalleryOrganizer: React.FC = () => {
  const [imageOrder, setImageOrder] = useState([])
  if (!imageOrder) return <div>Loading...</div>

  useEffect(() => {
    fetch("http://localhost:3000", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return <div>Insert images here</div>
}

export default GalleryOrganizer
