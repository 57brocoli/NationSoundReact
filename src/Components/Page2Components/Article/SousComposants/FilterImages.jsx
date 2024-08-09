import React from 'react'
import ImageArticle from './ImageArticle'

function FilterImages({data}) {

    return (
        <>
            {data.map((img, index)=>{
                console.log(img);
                return(
                    <ImageArticle img={img} key={img.id} />
                )
            })}
        </>
    )
}

export default FilterImages