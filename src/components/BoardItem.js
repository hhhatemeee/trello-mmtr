import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Boards.css'

const BoardItem = ({ title, boardID }) => {
    return (
        <div className='board-item'>
            <div>
                <Link to={`/boards/${title}_${boardID}`} ><h2>{title}</h2></Link>
            </div>

        </div >
    )
}

export default BoardItem
