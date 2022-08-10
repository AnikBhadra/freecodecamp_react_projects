import React from 'react'
import { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function Review() {
    const [index, setIndex] = useState(0)
    const { name, job, image, text } = people[index]

    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0
        }
        if (number < 0) {
            return people.length - 1
        }
        return number
    }

    const nextPerson = () => {
        setIndex((index) => {
            const newIndex = index + 1
            return checkNumber(newIndex)
        })
    }
    const prevPerson = () => {
        setIndex((index) => {
            const newIndex = index - 1
            return checkNumber(newIndex)
        })
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length)
        if (randomNumber === index) {
            randomNumber = index + 1
        }
        setIndex(checkNumber(randomNumber))
        console.log(randomNumber)
    }
    return (
        <article>
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{job} </p>
            <p>{text}</p>

            <div>
                <button onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>

            <button onClick={randomPerson}>
                Surprise Me
            </button>
        </article>
    )
}

export default Review