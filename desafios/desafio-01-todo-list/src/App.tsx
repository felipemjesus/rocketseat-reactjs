import { Header } from "./components/Header";
import styles from './App.module.css'
import { ClipboardText, PlusCircle, Trash } from "phosphor-react";
import { ChangeEvent, InvalidEvent, useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: 'Estudar React.js',
      finished: false
    },
    {
      title: 'Estudar Node.js',
      finished: true
    },
  ])

  const [newTodoTitle, setNewTodoTitle] = useState('')

  function handleNewTodo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const newTodo = {
      title: newTodoTitle,
      finished: false
    }

    setTodos([...todos, newTodo])
    setNewTodoTitle('')
  }

  function handleNewTodoTitleChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTodoTitle(event.target.value)
  }

  function handleNewTodoTitleInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.currentTarget.setCustomValidity('Digite o título da tarefa')
  }

  function handleDeleteTodo(todoToDelete: string) {
    const todosWithoutDeletedOne = todos.filter(todo => todo.title !== todoToDelete)

    setTodos(todosWithoutDeletedOne)
  }

  function handleFinishTodo(todoTitle: string) {
    const updatedTodos = todos.map(todo => {
      if (todo.title === todoTitle) {
        return {
          ...todo,
          finished: !todo.finished
        }
      }

      return todo
    })

    setTodos(updatedTodos)
  }

  const createdTodos = todos.length

  const finishedTodos = todos.filter(todo => todo.finished).length

  return (
    <>
      <Header />

      <main>
        
        <form className={styles.todoForm} onSubmit={handleNewTodo}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            name="newTodo"
            value={newTodoTitle}
            onChange={handleNewTodoTitleChange}
                    onInvalid={handleNewTodoTitleInvalid}
            required
          />
          <button type="submit">
            Criar
            <PlusCircle />
          </button>
        </form>

        <div className={styles.todo}>
          <header>
            <div className={styles.createdTasks}>
              Tarefas criadas
              <span>{createdTodos}</span>
            </div>
            <div className={styles.finishedTasks}>
              Concluídas
              <span>{finishedTodos} de {createdTodos}</span>
            </div>
          </header>

          {todos.length === 0 ? (
            <div className={styles.emptyState}>
              <p><ClipboardText size={32} /></p>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          ) : (
            <ul className={styles.todoList}>
              {todos.map(todo => (
                <li key={todo.title} className={styles.todoItem}>
                  <input
                    type="checkbox"
                    onChange={() => handleFinishTodo(todo.title)}
                    checked={todo.finished}
                  />
                  
                  <span className={todo.finished ? styles.finished : ''}>{todo.title}</span>

                  <button
                    type="button"
                     title="Deletar tarefa"
                    onClick={() => handleDeleteTodo(todo.title)}
                  >
                    <Trash size={24} />
                  </button>
                </li>
              ))}
            </ul>
          )}

        </div>

      </main>
    </>
  )
}

export default App
