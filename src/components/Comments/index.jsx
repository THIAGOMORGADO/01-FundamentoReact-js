
import styles from './Coments.module.css'
import {ThumbsUp, Trash} from 'phosphor-react'


export function Comments() {
  const avatar = 'https://avatars.githubusercontent.com/u/27393649?v=4'
  return(
    <div className={styles.comments}>
      <img src={avatar} />

      <div className={styles.commentsBox}>
        <div className={styles.commentsContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>THIAGO MORGADO DEV</strong>
              <time title='22 de julho as 19:00' dateTime="2023-06- 18:00:00h">CERCA DE 1h ATRAS</time>
            </div>
            <button title='deletar comentario'>
              <Trash size={20}/>
            </button>
          </header>
          <p>muito bom dev parabens</p>
        </div>
        <footer>
         <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
         </button>
        </footer>
      </div>
    </div>
  )
}