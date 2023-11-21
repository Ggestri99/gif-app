import { useState } from "react"
import { AddCategory, GifGrid } from './components'

export const GifApp = () => {

  const [categories, setCategories] = useState(['Rosario Central', 'Newells Old Boy']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <div>GifApp</div>

      <AddCategory
        onNewCategory={onAddCategory}
      />
      {
        categories.map(category =>
          <GifGrid
            key={category}
            category={category} />
        )
      }
    </>
  )
}
