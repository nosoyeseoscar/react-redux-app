import { useDispatch } from "react-redux"
import { createNote } from "../reducers/noteREducer"

export default function NewNote (){

    const dispatch = useDispatch()

    const addNote= async (event)=>{
        event.preventDefault()
        const {target}= event
        const content = target.note.value
        target.note.value = ''
        dispatch(createNote(content)) 
    }
    
    return <form onSubmit={addNote}>
        <input name='note'></input>
        <button>Add</button>
    </form>
}