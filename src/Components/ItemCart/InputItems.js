import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
function InputItems({ newitem, setNewitem, itemarray, setItemarray }) {
    let [numbering, setNumbering] = useState(0);
    let Handlechange = (event) => {
        setNewitem(event.target.value);
    }
    // console.log(newitem);
    let HandleClick = (event) => {
        event.preventDefault();
        setItemarray([...itemarray, { itemName: newitem, quantity: 1, isSelected: false, id: numbering }])
        setNumbering(numbering + 1);
        setNewitem("");
    }
    // console.log(itemarray);
    return (
        <form action="">
            <div className='add-item-box'>
                <input className='add-item-input' placeholder='Add an item...' onChange={Handlechange} value={newitem} />
                <button type="submit" onClick={HandleClick}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </form>
    )
}

export default InputItems