import ListItem from "./ListItem"
import styles from './List.module.scss'

const List = () =>{
    return (
        <div className={styles.container}>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
        </div>
    )
}

export default List