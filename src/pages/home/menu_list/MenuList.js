import { useEffect, useState } from "react"
import List from "./list/List"
import menuItems from "../../../data/menuItems"
import styles from './MenuList.module.scss'
import CloseButton from "./list/CloseButton"

const MenuList = props =>{
    const {item} = props
    const [list, setList] = useState([])
    useEffect(_=>{
        setList(menuItems[props.listName])
    },[])

    const onPress = item =>{
        props.onItemPress(item)
    }

    return (
        <div className={styles.container}>
            <div className={styles.listTitle}>
                {item.title}
            </div>
            <List item={item} onPress={onPress} ></List>
            <CloseButton onPress={_=>props.onClosePress()} />
        </div>
    )
}

export default MenuList