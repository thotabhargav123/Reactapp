/* eslint-disable array-callback-return */
// import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
function Items({ HandleIncrement, item, HandleDecrement,Handleselection }) {
    return (
        <div className="item-container">
            <div className="itemName" onClick={()=>{Handleselection(item)}}>
                <>
                    <FontAwesomeIcon icon={item.isSelected ? faCheckCircle : faCircle} />
                    <span className={item.isSelected ? "completed" : ""}>{item.itemName}</span>
                </>
            </div>
            <div className='quantity'>
                <button onClick={() => { HandleDecrement(item) }}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => HandleIncrement(item)}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    )
}

export default Items