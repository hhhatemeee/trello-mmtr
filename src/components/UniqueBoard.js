import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

import TitleBoard from './TitleBoard';
import List from './List';

import { connect } from 'react-redux';
import { sort } from '../actions';
import AddBtnList from './AddBtnList';
import { DragDropContext } from 'react-beautiful-dnd'

class UniqueBoard extends React.Component {

    onDragEnd = (result) => {
        const { destination, source, draggableId } = result

        if (!destination) {
            return;
        }
        const location = window.location.href
        const url = location.slice(location.lastIndexOf('/') + 1)
        const title = decodeURI((url.slice(url.indexOf('/', 2) + 1)).replace(/%20/g, ' '))
        const id = title.slice(title.indexOf('_', 1) + 1)
        this.props.dispatch(sort(
            id,
            source.droppableId,
            destination.droppableId,
            source.index,
            destination.index,
            draggableId
        ))
    }
    render() {
        // const location = useLocation();
        // const url = location.pathname
        // const decodeUrl = decodeURI(url);
        // // const title = (url.slice(url.indexOf('/', 2) + 1)).replace(/%20/g, ' ')
        // const title = decodeUrl.slice(decodeUrl.indexOf('/', 2) + 1);
        // const titleClear = decodeUrl.slice(decodeUrl.indexOf('/', 2) + 1, decodeUrl.indexOf('_', 1));
        // const id = title.slice(title.indexOf('_', 1) + 1)

        const location = window.location.href
        const url = location.slice(location.lastIndexOf('/') + 1)
        console.log(url);
        const title = decodeURI((url.slice(url.indexOf('/', 2) + 1)).replace(/%20/g, ' '))
        console.log(title);
        const titleClear = title.slice(0, title.lastIndexOf('_'))
        console.log(titleClear);
        const id = title.slice(title.indexOf('_', 1) + 1)
        console.log(id);
        const boards = this.props.items

        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
                        <TitleBoard title={titleClear} />

                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>

                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <List boards={boards} boardId={id} />
                            </div>
                            <AddBtnList id={title} style={{ display: 'block' }} />


                            {/* <h4 onClick={addListBtn}>+</h4> */}
                        </div>

                    </div>

                </div>
            </DragDropContext>

        )

    }
}


export default connect()(UniqueBoard)
