import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"
import styles from  './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/fulanodasilva.png',
      name: 'Fulano da Silva',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2025-03-11 20:41:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/xpto.png',
      name: 'Cicrano da Silva',
      role: 'Mobile Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋' },
      { type: 'paragraph', content: 'Acabei de alterar mais um projeto no meu portifólio. É um projeto que fiz no NLW Connect, evento da Rocketseat. O nome do projeto é FullCare 🚀' },
      { type: 'link', content: 'xpto.mobile/fullcare' },
    ],
    publishedAt: new Date('2025-03-01 18:30:00')
  }
]

export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
