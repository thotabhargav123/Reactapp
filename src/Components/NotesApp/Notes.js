import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
const Notes = ({ note, NoteDeletion }) => {
    function HandleDelete() {
        NoteDeletion(note);
    }
  return (
      <div className="note">
          <span>{note.text}</span>
			<div className='note-footer'>
              <small>{note.date}</small>
              <small>{note.time}</small>
				<MdDeleteForever className='delete-icon' size='1.3em' onClick={HandleDelete}/>
			</div>
    </div>
  )
}

export default Notes