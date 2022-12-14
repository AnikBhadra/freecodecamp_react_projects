import React from 'react'
import Tour from './Tour'

function Tours({ tours, removeTour }) {
    return (
        <section>
            <h2 >our tours</h2>
            <div>
                {tours.map((tour) => {
                    return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
                })}
            </div>
        </section>

    )
}

export default Tours