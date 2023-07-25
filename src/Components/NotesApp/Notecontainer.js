import React from 'react'
import Notes from './Notes'
import Addnote from './Addnote'

const Notecontainer = ({ notes, HandleAddnote, NoteDeletion }) => {
    return (
        <div className="notelist">
            {
                notes.map((note) => (
                    <Notes note={note} NoteDeletion={NoteDeletion} key={note.id} />
                ))
            }
            <Addnote HandleAddnote={HandleAddnote} />
        </div>
    )
}

export default Notecontainer