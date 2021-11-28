import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import TitleBoard from './TitleBoard';
import List from './List';
import { addList } from '../actions/boardActions';
import { connect } from 'react-redux';
import Main from './Main';
import AddBtnList from './AddBtnList';


const UniqueBoard = ({ items }) => {
    const location = useLocation();
    const url = location.pathname
    const decodeUrl = decodeURI(url);
    // const title = (url.slice(url.indexOf('/', 2) + 1)).replace(/%20/g, ' ')
    const title = decodeUrl.slice(decodeUrl.indexOf('/', 2) + 1);
    const id = title.slice(title.indexOf('_', 1) + 1)


    console.log(items);

    const [state = { formOpen: false }, setState] = useState();
    const addListBtn = (e) => {
        e.preventDefault()
        state.formOpen ? setState({ formOpen: false }) : setState({ formOpen: true })
        console.log(state.formOpen);
    }
    const handleAddList = () => {
        const { dispatch } = this.props;
        const { title } = this.props
        if (title) {
            dispatch(addList(id, title))
        }

    }
    const ButtonListRender = () => {


        return (
            <div className='add-list' >
                {state.formOpen ? <AddBtnList id={title} /> : <h3 onClick={addListBtn}>Добавить список</h3>}
            </div>
        )
    }

    const RenderAddedForm = () => {
        return (
            <div className='add-list-render'>
                <input type="text" name="" id="" />
                <h4 onClick={addListBtn}>+</h4>
                <AddBtnList />
            </div>
        )
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TitleBoard title={title} />
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <List boards={items} boardId={id} />
                        <ButtonListRender style={{ display: 'flex' }} />

                    </div>
                    {/* <h4 onClick={addListBtn}>+</h4> */}
                </div>

            </div>

        </div>
    )

}


export default connect()(UniqueBoard)
