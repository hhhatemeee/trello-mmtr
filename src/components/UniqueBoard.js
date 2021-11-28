import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import TitleBoard from './TitleBoard';




const UniqueBoard = () => {

    const [state = { formOpen: false }, setState] = useState();
    const addListBtn = (e) => {
        e.preventDefault()
        state.formOpen ? setState({ formOpen: false }) : setState({ formOpen: true })
        console.log(state.formOpen);
    }

    const ButtonListRender = () => {


        return (
            <div className='add-list' >
                {state.formOpen ? <RenderAddedForm /> : <h3 onClick={addListBtn}>Добавить список</h3>}
            </div>
        )
    }

    const RenderAddedForm = () => {
        return (
            <div className='add-list-render'>
                <input type="text" name="" id="" />
                <h4 onClick={addListBtn}>+</h4>
            </div>
        )
    }

    const location = useLocation();
    const url = location.pathname
    const decodeUrl = decodeURI(url);
    // const title = (url.slice(url.indexOf('/', 2) + 1)).replace(/%20/g, ' ')
    const title = decodeUrl.slice(decodeUrl.indexOf('/', 2) + 1);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', maxWidth: '500px', textAlign: 'center' }}>
                <TitleBoard title={title} />
                <ButtonListRender style={{ display: 'flex' }} />
            </div>

        </div>
    )

}

export default UniqueBoard
