import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Boards.css'

const BoardItem = ({ title, boardID }) => {
    return (
        <div className='board-item'>
            <div>
                {/* Передаю в адресную строку название и id доски, чтобы последствии выловить id */}
                <Link to={`/boards/${title}_${boardID}`} ><h2>{title}</h2></Link>
            </div>
        </div >
    )
}

export default BoardItem
