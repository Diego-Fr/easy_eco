import { useEffect, useState } from "react"
import List from "./list/List"
import menuItems from "../../data/menuItems"
import styles from './MenuList.module.scss'

const MenuList = props =>{
    const [list, setList] = useState([])
    useEffect(_=>{
        setList(menuItems[props.listName])
    },[])

    // const [show, setShow] = useState()
    // console.log(menuItems,props.listName);
    return (
        <div className={styles.container}>
            <div className={styles.listTitle}>
                {props.listTitle}
            </div>
            <List listItems={list} ></List>
        </div>
    )
}

export default MenuList