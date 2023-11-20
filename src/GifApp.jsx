import { useState } from "react"
import { AddCategory } from './components/AddCategory'
import { GifGrid } from "./components/GifGrid";

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

      {
        categories.map(category => 
          <GifGrid
            key={category}
            category={category} />
        )
      }
      {/*Gif Item*/}
    </>
  )
}
