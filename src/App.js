import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
function App () {
  return (
    <div className='App'>
      <h1 className="updown"> My Redux App <br /> "TODO_APP" </h1>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
