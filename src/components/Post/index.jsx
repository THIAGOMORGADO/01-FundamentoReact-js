import { Comments } from '../Comments'
import styles from './Post.module.css'


export function Post() {
  const avatar = 'https://avatars.githubusercontent.com/u/27393649?v=4"'



  return(
    <article className={styles.post}>
      <header>
          <div className={styles.author}>
            <img className={styles.avatar} src={avatar} />
              <div className={styles.authorInfo}>
                <strong>Thiago morgado</strong>
                <span>Web Developer</span>
              </div>
            </div>

            <time title='22 de julho as 19:00' dateTime="2023-06- 18:00:00h">Publicado a 1h</time>
          </header>
          
        
        <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          <p>{' '}👉<a href="http://"> jane.design/doctorcare</a></p>
          <p>
            <a href="">#novoprojeto</a>{' '}
            <a href="">#nlw</a>{' '}
            <a href="">#rocketseat</a>
        </p>
        </div>
      
        <form className={styles.comentForm}>
          <strong>Deixe seu Feedback</strong>
          <textarea 
            placeholder='deiixe um comentario'
          />

          <footer>
            <button type="submit">Publicar</button>
          </footer>  

          
        </form>

        <div className={styles.commentList}>
          <Comments />
          <Comments />
          <Comments />
        </div>

    </article>
  )
}