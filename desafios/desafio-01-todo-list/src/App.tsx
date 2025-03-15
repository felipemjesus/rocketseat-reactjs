import { Header } from "./components/Header";
import styles from './App.module.css'
import { ClipboardText, PlusCircle, Trash } from "phosphor-react";

const todos = [
  {
    title: 'Estudar React.js',
    finished: false
  },
  {
    title: 'Estudar Node.js',
    finished: false
  },
  {
    title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    finished: false
  }
]

function App() {
  return (
    <>
      <Header />

      <main>
        
        <form className={styles.todoForm}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            Criar
            <PlusCircle />
          </button>
        </form>

        <div className={styles.todo}>
          <header>
            <div className={styles.createdTasks}>
              Tarefas criadas
              <span>0</span>
            </div>
            <div className={styles.finishedTasks}>
              Concluídas
              <span>0</span>
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
                <li key={todo.title} className={`${styles.todoItem} ${todo.finished ? styles.finished : ''}`}>
                  <input type="checkbox" />
                  <span>{todo.title}</span>
                  <button>
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
