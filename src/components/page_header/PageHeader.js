import { useEffect, useRef, useState } from 'react';
import styles from './PageHeader.module.scss'
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Navigate } from 'react-router-dom';

const PageHeader = props =>{
    const ref = useRef(null)
    const [navigate, setNavigate] = useState()

    useEffect(_=>{
        setTimeout(_=>{//work around. Esperando o css caregar
            if(props.getComponentSize){
                props.getComponentSize(ref.current.offsetHeight)
            }
        },300)
        
    },[])

    const clickHandler = () =>{
        setNavigate(true)
    }

    if (navigate) {
        return <Navigate to={'/'} />;
    }

    

    return(
        <div ref={ref} className={styles.pageHeaderContainer}>
            <div className={styles.title}>{props.title}</div>
            {props.showIcon &&  <div className={styles.arrowContainer}><FaCircleArrowLeft onClick={_=>clickHandler()} /></div>}
            
        </div>
    )
}

export default PageHeader