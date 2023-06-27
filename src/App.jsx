import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";


import './global.css'
import styles from './App.module.css';


import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/C4D03AQGfnBqeYQc1xQ/profile-displayphoto-shrink_800_800/0/1662223654418?e=1692835200&v=beta&t=OKzCkdSZkrbiW_cP-TXBuxpIYrtxLzuRXESCM5n8o4M',
      name: 'Thiago morgado',
      role: 'Web DEveloper'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

export function App() {
  return (
    <>
    <Header />
     
     <div className={styles.wrapper}>
        <SideBar />
        <main>
        {posts.map(post => {
            return (
              <Post
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


