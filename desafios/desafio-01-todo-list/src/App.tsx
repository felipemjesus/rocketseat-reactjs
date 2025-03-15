import { Header } from "./components/Header";
import styles from './App.module.css'
import { ClipboardText, PlusCircle } from "phosphor-react";

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

        <div className={styles.todoList}>
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

          <div className={styles.emptyState}>
            <p><ClipboardText size={32} /></p>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>

      </main>
    </>
  )
}

export default App
