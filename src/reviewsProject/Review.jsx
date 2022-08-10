import React from 'react'
import { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function Review() {
    const [index, setIndex] = useState(0)
    const { name, job, image, text } = people[index]
    return (
        <article>
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{job} </p>
            <p>{text}</p>

            <div>
                <button>
                    <FaChevronLeft />
                </button>
                <button>
                    <FaChevronRight />
                </button>
            </div>

            <button>
                Surprise Me
            </button>
        </article>
    )
}

export default Review