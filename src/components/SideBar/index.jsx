import { Avatar } from '../Avatar'
import styles from './SideBar.module.css'

import { PencilLine } from 'phosphor-react'

export function SideBar() {

  return(
    <aside className={styles.sidebar}>
      <img 
      className={styles.cover}
      src="https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40" />
      
      
      <div className={styles.porfil}>
        <Avatar src='https://avatars.githubusercontent.com/u/27393649?v=4' />
        <strong>Thiago Morgado</strong>
        <span>Full Stack Web Developers</span>
       
      </div> 
      <footer>

          <a href="#">
            <PencilLine 
              size={20}
            />
            Editar seu perfil
          
          </a>
      </footer>
    </aside>
  )
}