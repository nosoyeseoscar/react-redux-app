import NewNote from './components/newNotes'
import Notes from './components/Notes';

const App = () => {
  
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
