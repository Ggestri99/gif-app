import { useState } from "react"

export const GifApp = () => {

  const [categories, setCategories] = useState(['Rosario Central','Newells Old Boy']);



  return (
    <>
      {/*Titulo*/}
      <div>GifApp</div>

      {/*Input*/}

      {/*Listado de Gif*/}
      <ol>
          {categories.map(category => {
            return <li key={category}>{category}</li>
          })}
      </ol>
      {/*Gif Item*/}
    </>
  )
}

