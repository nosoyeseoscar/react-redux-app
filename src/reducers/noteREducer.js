import { getAll, createNewNote } from '../services/notes';

export const noteReducer = (state = [], action) => {
    console.log('ACTION', action)

    if (action.type==='@notes/init'){
        return action.payload
    }

    if (action.type==='@notes/created'){      
        return [...state, action.payload]
    }

    if (action.type==='@notes/toggle_important'){
        const {id}= action.payload
        return state.map( note => {
            if (note.id === id){
                return {
                    ...note,
                    important: !note.important
                }
            }
            return note
        })
    }

    return state
}


export const createNote = content => {

    return async (dispatch) => {
        const newNote = await createNewNote(content)
        dispatch( 
            {
                type:'@notes/created',
                payload: newNote
            }
        )   
    }
}

export const toggleImportanceOf = id => {
    return{
        type: '@notes/toggle_important',
        payload: {
            id
        }
    }
}

export const initNotes = () => {
    return async (dispatch) => {

        const notes = await getAll()

        dispatch ({
            type: '@notes/init',
            payload: notes
        })
    }
    
}