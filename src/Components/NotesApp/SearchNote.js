import React from 'react'
import { MdSearch } from 'react-icons/md';
const SearchNote = ({ searchText, setSearchText }) => {
    function handlesearchchange(event) {
        setSearchText(event.target.value);
    }
    function Handleclick(event) {
        event.preventDefault();
        setSearchText("");
    }
    function handlekeyup(event) {
        if (event.key === "Enter") {
            setSearchText("");
        }
    }
    return (
        <>
            {/* <form action=""> */}
                <div className="search">
                    <MdSearch className='search-icons' size='1.3em' />
                    <input type='text' placeholder='type to search...' onChange={handlesearchchange} value={searchText} onClick={Handleclick} onKeyUp={handlekeyup}/>
                </div>
            {/* </form > */}
        </>
    )
}

export default SearchNote