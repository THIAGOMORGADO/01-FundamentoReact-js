/* eslint-disable react/prop-types */
import { Avatar } from '../Avatar'
import { Comments } from '../Comments'
import styles from './Post.module.css'

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function Post({author, publishedAt}) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });
 
  return(
    <article className={styles.post}>
      <header>
          <div className={styles.author}>
            <Avatar  
              src={author.avatarUrl}
            />
              <div className={styles.authorInfo}>
                <strong>{author.name}</strong>
                <span>{author.role}</span>
              </div>
            </div>

            <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Publicado há 1h</time>
            <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
              {publishedDateRelativeToNow}
            </time>
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