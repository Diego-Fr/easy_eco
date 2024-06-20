import { useState } from 'react'
import styles from './Triangle.module.scss'
import List from '../list/List'
import CloseButton from '../list/CloseButton'

const TriangleItem = props =>{
    const {listItems} = props
    const [open, setOpen] = useState(false)

    const onClick = () =>{
        if(!open){
            setOpen(true)
        }
    }

    const closeMenu = () =>{
        setOpen(false)
    }

    return (
        <div onClick={onClick} className={`${styles.triangle} ${styles[props.id]} ${open ? `${styles.triangleOpen}` : `${styles.triangleClickable}`} `}>
            {open 
                ? 
                <div className={`${styles.menuContainer}`}>
                    <div className={`${styles.triangleTitle}`}>
                        {props.title}
                    </div>
                    <List listItems={listItems}></List>
                    <CloseButton onPress={closeMenu} />
                </div>
                :
                <div>
                    <div className={styles.mainTitle}>{props.title}</div>
                    <div className={styles.iconContainer}>{props.icon}</div>
                </div>
            }
        </div>
    )
}

export default TriangleItem