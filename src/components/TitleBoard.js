import React from 'react'
import '../styles/TitleBoard.css'
const TitleBoard = ({ title }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '0 5%' }}>
            <div className='board-title' style={{ textAlign: 'center' }} >
                <h3>{title}</h3>
            </div>
        </div>

    )
}

export default TitleBoard
