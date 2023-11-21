import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const GifGrid = ({ category }) => {

    const [images, setimage] = useState([]) 

    const getImages= async () => {
        const newImages = await getGifs(category)
        setimage(newImages)
    }

    useEffect(() => {
        getImages(category)
    }, [])

    return (
        <>
            <h3>{category}</h3>

            <ol>
                {
                    images.map(({id, title})  => (
                        <li key={id}>{ title }</li>
                    ))
                }
            </ol>
        </>
    )
}
