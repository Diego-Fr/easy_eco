import { useState } from 'react';
import styles from './Card.module.scss'

const Card = props =>{
    const [showItems, setShowItems] = useState(true)
    const {title,item} = props
    
    const mouseOver = () =>{
        setShowItems(true)
    }

    const mouseOut = () =>{
        setShowItems(false)
    }


    return (
        <div onMouseOver={_=> mouseOver()} onMouseOut={_=>mouseOut()}  className={`${styles.container} ${styles['with-border']}`}>
            <div className={`${styles.wrapper} ${ !showItems ? styles.showWrapper : ''}`}>
                <div className={styles.cardTitle}>
                    {item.title}
                </div>
                <div className={styles.cardIcon}>
                    {item.icon}
                </div>
            </div>
            <div className={`${styles.itemsWrapper} ${showItems ? styles.showWrapper : ''}`}>
                {
                    item.items && item.items.map(x=>(
                        <div className={styles.item}>{x.title}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Card