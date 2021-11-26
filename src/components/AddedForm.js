import React from 'react'
import '../styles/AddedForm.css'
const AddedForm = () => {
    return (
        <div className='add'>
            <form action="" className="add-form">
                <button className='add-btn' onClick={(e) => e.preventDefault()} >+</button>
                <h3>Новая доска</h3>
            </form>
            <div className='addedForm hide' style={{ width: '300px', height: '150px', background: '#fff', borderRadius: '5px', boxShadow: '0px 4px 8px -1px rgba(34, 60, 80, 0.2)' }}>
                <form action="" style={{ textAlign: 'center' }}>
                    <label for="" style={{ display: 'block', textAlign: 'left', padding: '10px 10%' }}> Название доски</label>
                    <input type="text" placeholder='Моя доска' />
                    <div style={{ marginTop: '10%' }}>
                        <button className="ui secondary basic button">Отмена</button>
                        <button className="ui positive basic button">Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddedForm
