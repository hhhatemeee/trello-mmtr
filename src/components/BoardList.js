import React from 'react'
import BoardItem from './BoardItem'
import '../styles/BoardsList.css'
const BoardList = ({ items }) => {
    return (
        <div className='board-list'>
            <h3>Список досок</h3>
            {items.map(board => (
                //Идем по массиву отображая новую каждую доску
                <BoardItem boardID={board.id} key={board.id} title={board.title} />
            ))}
        </div>
    )
}

export default BoardList
