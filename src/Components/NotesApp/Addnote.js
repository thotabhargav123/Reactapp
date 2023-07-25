import React from 'react'
import { useState } from 'react'

const Addnote = ({ HandleAddnote }) => {
    let [newnote, setNewnote] = useState("");
    const characterLimit = 200;

    function HandleNote(event) {
        if (characterLimit - event.target.value.length >= 0) {
            setNewnote(event.target.value);
        }

    }
    function HandleSave() {
        if (newnote.trim().length > 0) {
            HandleAddnote(newnote);
        }
        setNewnote("");
    }
    return (
        <>
            <div className="newnote">
                <textarea rows='8' cols='10' placeholder='Type to add a note...' onChange={HandleNote} value={newnote}></textarea>
                <div className='note-footer'>
                    <small>
                        {characterLimit - newnote.length} Remaining
                    </small>
                    <button className='save' onClick={HandleSave}>
                        Save
                    </button>
                </div>
            </div>
        </>
    )
}

export default Addnote