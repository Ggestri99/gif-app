import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"
import {GifGridItems} from "./GifGridItems"

export const GifGrid = ({ category }) => {

    const [images, setimage] = useState([])

    const getImages = async () => {
        const newImages = await getGifs(category)
        setimage(newImages)
    }

    useEffect(() => {
        getImages(category)
    }, [])

    return (
        <>
            <h3>{category}</h3>

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifGridItems
                            key={image.id}
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}
