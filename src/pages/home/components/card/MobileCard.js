import styles from './CardMobile.module.scss'

const MobileCard = props =>{
    const {item} = props
    return (
        <div onClick={_=>props.itemClickHandler(item)} className={`${styles.container} ${styles[item.className]}`}>
            <div className={styles.icon}>
                {item.icon}
            </div>
            <div className={styles.title}>
                {item.title}
            </div>
        </div>
    )
}

export default MobileCard