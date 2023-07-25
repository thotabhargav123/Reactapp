import React from 'react'
import Items from './Items'
function ItemList  ({itemarrays, HandleIncrement,HandleDecrement,Handleselection }){
    return (
        <>
            <div className="item-list">
                {
                    itemarrays.map((item) => {
                        return (<Items HandleIncrement={HandleIncrement} item={item} HandleDecrement={HandleDecrement} key={item.id} Handleselection={Handleselection} />);
                    })
                }
            </div>
        </>
    )
}

export default ItemList