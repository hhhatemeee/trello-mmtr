import React from 'react'
import '../styles/Boards.css'

const BoardItem = ({ title }) => {
    return (
        <div className='board-item'>
            <div>
                <a href="" onClick={(e) => e.preventDefault()}><h2>{title}</h2></a>
            </div>

        </div>
    )
}

export default BoardItem
