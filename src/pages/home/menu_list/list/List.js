import ListItem from "./ListItem"
import styles from './List.module.scss'

const List = props =>{
    const {item} = props
    
    const onPress = item =>{
        props.onPress(item)
    }

    return (
        <div className={styles.container}>
            {
                item.items.map((item,index)=>
                    <ListItem key={index} listItem={item} onPress={onPress}></ListItem>
                )
            }
            
            
        </div>
    )
}

export default List