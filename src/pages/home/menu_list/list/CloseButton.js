
import { FaTimesCircle } from "react-icons/fa";
import styles from './List.module.scss'

const CloseButton = props =>{

    const onPress = () =>{
        props.onPress()
    }

    return (
        <div className={styles.closeButtonContainer}>
            <FaTimesCircle className={styles.closeButtonIcon} onClick={_=>onPress()}/>
        </div>
    )
}

export default CloseButton