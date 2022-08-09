import React from 'react'
import { useState } from 'react'

function Tour({ id, image, info, price, name, removeTour }) {
    const [readMore, setReadMore] = useState(false)
    return (
        <article>
            <img src={image} alt={name} />
            <footer>
                <div>
                    <h4>{name}</h4>
                    <h4>{price}</h4>
                </div>
                <p>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>{readMore ? 'Show less' : "Read More"}</button>
                </p>
                <button onClick={() => removeTour(id)}>Not Interested</button>
            </footer>
        </article>
    )
}

export default Tour
