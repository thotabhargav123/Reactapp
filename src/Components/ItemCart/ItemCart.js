import React, { useEffect, useState } from 'react'
import InputItems from './InputItems'
import ItemList from './ItemList'
import './ItemcartStyling.css'
import Totalcoutn from './Totalcoutn'
function ItemCart() {
    let [newitem, setNewitem] = useState("");
    let [itemarray, setItemarray] = useState([]);
    let [totalcount, setTotalcount] = useState(0);
    let [reqcount, setReqcount] = useState(0);

    useEffect(() => {
        overallcount();
        requiredcount();
    }, [newitem, itemarray])



    function HandleIncrement(item) {
        const newarray = itemarray.map((el) => {
            if (el.id === item.id) {
                return {
                    ...el,
                    quantity: el.quantity + 1,
                };
            }
            return el;
        })
        setItemarray(newarray);
    }

    function HandleDecrement(item) {
        const newarray = itemarray.map((el) => {
            if (el.id === item.id) {
                if (el.quantity <= 0) {
                    return {
                        ...el,
                        quantity: 0,
                    }
                }
                else {
                    return {
                        ...el,
                        quantity: el.quantity - 1,
                    }
                }
            }

            return el;
        })
        setItemarray(newarray);
    }

    function Handleselection(item) {
        setItemarray(itemarray.map((el) => {
            if (el.id === item.id) {
                return {
                    ...el,
                    isSelected: !el.isSelected,
                };
            }
            return el;
        }))
    }
    function overallcount() {
        let setcounting = 0;
        for (let i = 0; i < itemarray.length; i++) {
            setcounting = setcounting + itemarray[i].quantity;
            // console.log(setcounting);
        }
        setTotalcount(setcounting);
    }

    function requiredcount() {
        let setcounting = 0;
        for (let i = 0; i < itemarray.length; i++) {
            if (itemarray[i].isSelected === false) {
                setcounting = setcounting + itemarray[i].quantity;
            }
        }
        setReqcount(setcounting);
    }
    // console.log(itemarray);
    return (
        <div className="app-back">
            <div className="main">
                <InputItems newitem={newitem} setItemarray={setItemarray} setNewitem={setNewitem} itemarray={itemarray} />
                <ItemList itemarrays={itemarray} HandleIncrement={HandleIncrement} HandleDecrement={HandleDecrement} Handleselection={Handleselection} />
                <Totalcoutn totalcount={totalcount} reqcount={reqcount}/>
            </div>
        </div>
    )
}

export default ItemCart