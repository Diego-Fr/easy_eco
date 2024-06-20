import { useState } from 'react'
import styles from './Triangle.module.scss'
import List from '../list/List'

const TriangleItem = props =>{
    const [open, setOpen] = useState(false)

    const onClick = () =>{
        if(!open){
            setOpen(true)
        }
        
    }

    return (
        <div onClick={onClick} className={`${styles.triangle} ${styles[props.id]} ${open ? `${styles.triangleOpen}` : `${styles.triangleClickable}`} `}>
            {open 
                ? 
                <div className={`${styles.menuContainer}`}>
                    <div className={`${styles.triangleTitle}`}>
                        TITULO MENU
                    </div>
                    <List></List>
                </div>
                :
                <div>Nada</div>
            }
        </div>
    )
}

export default TriangleItem