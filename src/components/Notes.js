import { useSelector, useDispatch } from "react-redux"
import {toggleImportanceOf } from '../reducers/noteREducer'

function Note ({note, toggleImportant}){
    return <li key={note.id} onClick={()=>toggleImportant(note.id)}>
        {note.content}
        <strong> 
            {
                note.important 
                    ? 'important' 
                    : 'not important'
            }  
        </strong>
</li>
}

function Notes ({notes, toggleImportant}) {  
    return <ul>{
        notes.map(note =>  <Note note={note} toggleImportant={toggleImportant}></Note>)
    }</ul>
}

export default function NotesContainer(){
    const notes =useSelector(state => state.notes)

    const dispatch = useDispatch()

    const toggleImportant = ( id ) => {
        dispatch( toggleImportanceOf( id ))
    }

    return <Notes notes={notes} toggleImportant={toggleImportant}></Notes>
}

