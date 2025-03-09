import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./Post"
import styles from  './App.module.css'

export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Fulano da Silva"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, beatae error dolorem vel quam deleniti voluptatem laboriosam sed atque dignissimos, rerum tempore! Eum illum vero nemo dolore obcaecati nihil minus!"
          />
          <Post
            author="Ciclano da Silva"
            content="Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, beatae error dolorem vel quam deleniti voluptatem laboriosam sed atque dignissimos, rerum tempore! Eum illum vero nemo dolore obcaecati nihil minus!"
          />
        </main>
      </div>
    </>
  )
}
