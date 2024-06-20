import { useState } from 'react';
import styles from './List.module.scss'
import { Navigate } from 'react-router-dom';

const ListItem = props =>{
    let {listItem} = props
    const [navigate, setNavigate] = useState(false);
    
    const onPress = () =>{
        console.log(listItem);
        setNavigate(true)
    }

    if (navigate) {
        return <Navigate to={listItem.route} />;
    }

    return (
        <div onClick={_=>onPress()} className={styles.listItem}>
            {listItem.title}
        </div>
    )
}

export default ListItem