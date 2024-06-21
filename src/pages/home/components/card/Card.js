import { useState } from 'react';
import styles from './Card.module.scss'

const Card = props =>{
    const [showItems, setShowItems] = useState(false)
    const {title,item} = props
    
    const mouseOver = () =>{
        setShowItems(true)
    }

    const mouseOut = () =>{
        setShowItems(false)
    }

    const itemClickHandler = (item) =>{
        props.itemClickHandler(item)
    }

    return (
        <div onMouseOver={_=> mouseOver()} onMouseOut={_=>mouseOut()}  className={`${styles.container} ${styles[item.className]} ${styles['with-border']}`}>
            <div className={`${styles.path} ${styles[item.className]}`}></div>
            <div className={`${styles.wrapper} ${ !showItems ? styles.showWrapper : ''}`}>
                <div>
                <div className={styles.cardIcon}>
                    {item.icon}
                </div>
                <div className={styles.cardTitle}>
                    {item.title}
                </div>
                </div>
                <div className=''>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum accumsan eros quis varius. Duis faucibus dapibus mi et convallis. Etiam vehicula egestas velit sed dignissim. 
                </div>
                <div className={styles.cardButtonContainer}>
                    <div className={styles.cardButton}>{'Ver Mais'}</div>
                </div>
            </div>
            <div className={`${styles.itemsWrapper} ${showItems ? styles.showWrapper : ''}`}>
                {
                    item.items && item.items.map((x,index)=>(
                        <div key={index} onClick={_=>itemClickHandler(x)} className={styles.item}>{x.title}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Card