import ListItem from "./ListItem"
import styles from './List.module.scss'

const List = props =>{
    const {listItems} = props
    return (
        <div className={styles.container}>
            {
                listItems.map((item,index)=>
                    <ListItem key={index} listItem={item}></ListItem>
                )
            }
            
            
        </div>
    )
}

export default List