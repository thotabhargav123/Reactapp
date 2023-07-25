import React, { useEffect, useState } from 'react'
import Header from './Header'
import SearchNote from './SearchNote'
import Notecontainer from './Notecontainer'
import { nanoid } from 'nanoid';
import './NotesApp.css'
const NotesApp = () => {
    let [notes, setNotes] = useState([])
    let [searchText, setSearchText] = useState("");
    let [darkmode, setDarkMode] = useState(false);
    useEffect(() => {
        loadnotes();
    }, [])
    
    useEffect(() => {
        saveNote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[notes])
    

    function HandleAddnote(newnote) {
        // console.log("HIII")
        setNotes([...notes, { id: nanoid(), text: newnote, date: new Date().toLocaleDateString('en-GB'), time: new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }) }])
    }

    function NoteDeletion(note) {
        setNotes(notes.filter((el) => 
            el.id !== note.id
        ))
    }

    function loadnotes(notes) {
        if (localStorage.getItem('notes' === null)) {
            localStorage.setItem('notes', JSON.stringify([]));
        }
        else {
            setNotes(JSON.parse(localStorage.getItem('notes')));
        }
    }

    function saveNote(note) {
        if (notes.length >= 0) {
            localStorage.setItem('notes', JSON.stringify(notes));
        }
    }
    function togglemode() {
        setDarkMode(!darkmode)
    }
    return (
        <>
            <div className={darkmode?"darkmode":""}>
                <div className="container">
                    <Header togglemode={togglemode}/>
                    <SearchNote searchText={searchText} setSearchText={setSearchText} />
                    <Notecontainer notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} HandleAddnote={HandleAddnote} NoteDeletion={NoteDeletion} />
                </div>
            </div>
        </>
    )
}

export default NotesApp