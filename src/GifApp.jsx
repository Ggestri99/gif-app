import { useState } from "react"
import { AddCategory } from './components/AddCategory'

export const GifApp = () => {

  const [categories, setCategories] = useState(['Rosario Central','Newells Old Boy']);

  const onAddCategory = (newCategory) => {
    // setCategories([...categories, 'River Plate'])
    if(categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      {/*Titulo*/}
      <div>GifApp</div>

      {/*Input*/}
      <AddCategory 
          // setCategories={setCategories} 
          onNewCategory={onAddCategory}
      />

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
