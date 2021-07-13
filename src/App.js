import NewNote from './components/newNotes'
import Notes from './components/Notes';
import { useEffect } from 'react';
import { initNotes } from './reducers/noteREducer';
import { useDispatch } from 'react-redux'

const App = () => {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(initNotes()) 
  }, [dispatch])
  
  const filterSelected = value => {
    console.log(value)
  }

  return (
      <div>
         <NewNote></NewNote>
         <div>
           all
           <input type='radio' name='filter' onChange={()=> filterSelected('ALL')}></input>

           important
           <input type='radio' name='filter' onChange={()=> filterSelected('IMPORTANT')}></input>

           noimportant
           <input type='radio' name='filter' onChange={()=> filterSelected('NO_IMPORTANT')}></input>
           
         </div>
        <Notes></Notes>
      </div>
  )
}
export default App;
