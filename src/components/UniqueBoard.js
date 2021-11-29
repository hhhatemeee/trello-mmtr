import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

import TitleBoard from './TitleBoard';
import List from './List';

import { connect } from 'react-redux';

import AddBtnList from './AddBtnList';


const UniqueBoard = ({ items }) => {
    const location = useLocation();
    const url = location.pathname
    const decodeUrl = decodeURI(url);
    // const title = (url.slice(url.indexOf('/', 2) + 1)).replace(/%20/g, ' ')
    const title = decodeUrl.slice(decodeUrl.indexOf('/', 2) + 1);
    const titleClear = decodeUrl.slice(decodeUrl.indexOf('/', 2) + 1, decodeUrl.indexOf('_', 1));
    const id = title.slice(title.indexOf('_', 1) + 1)



    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
                <TitleBoard title={titleClear} />

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>

                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <List boards={items} boardId={id} />
                    </div>
                    <AddBtnList id={title} style={{ display: 'block' }} />


                    {/* <h4 onClick={addListBtn}>+</h4> */}
                </div>

            </div>

        </div>
    )

}


export default connect()(UniqueBoard)
