import React from 'react'
import BoardItem from './BoardItem'
import '../styles/BoardsList.css'
const BoardList = ({ items }) => {
    return (
        <div className='board-list'>
            <h3>Список досок</h3>
            {items.map(item => (
                <BoardItem boardID={item.id} key={item.id} title={item.title} />
            ))}
        </div>
    )
}

export default BoardList
