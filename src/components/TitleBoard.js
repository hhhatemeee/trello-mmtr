import React from 'react'
import '../styles/TitleBoard.css'
const TitleBoard = ({ title }) => {
    return (
        <div>
            <div className='board-title'>
                <h3>{title}</h3>
            </div>
        </div>

    )
}

export default TitleBoard
