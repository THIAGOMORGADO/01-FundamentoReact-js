import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";

import './global.css'
import styles from './App.module.css';


export function App() {
  return (
    <>
    <Header />
     
     <div className={styles.wrapper}>
        <SideBar />
        <main>
        <Post 
        author="Thiago morgado Dev"
        content="Desemvolvedor FullStack Front and Mobile "
      />
        </main>
     </div>

    </>
  )
}


