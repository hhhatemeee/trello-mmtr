import React from 'react'
import '../styles/Boards.css'

const BoardItem = ({ title }) => {
    return (
        <div className='board-item'>
            <div>
                <h2>{title}</h2>
            </div>

        </div>
    )
}

export default BoardItem
