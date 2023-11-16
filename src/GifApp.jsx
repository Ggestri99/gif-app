import { useState } from "react"
import { AddCategory } from './components/AddCategory'

export const GifApp = () => {

  const [categories, setCategories] = useState(['Rosario Central','Newells Old Boy']);

  const onAddCategory = () => {
    setCategories([...categories, 'River Plate'])
  }

  return (
    <>
      {/*Titulo*/}
      <div>GifApp</div>

      {/*Input*/}
      <AddCategory />

      {/*Listado de Gif*/}
      <button onClick={onAddCategory}>Agregar Giff</button>
      <ol>
          {categories.map(category => {
            return <li key={category}>{category}</li>
          })}
      </ol>
      {/*Gif Item*/}
    </>
  )
}
