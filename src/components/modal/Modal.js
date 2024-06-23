import { useState,useImperativeHandle,forwardRef, useRef } from 'react'
import { FaTimes } from "react-icons/fa";
import styles from './Modal.module.scss'

const Modal = forwardRef((props, ref)=>{
    const [show, setShow] = useState()
    const [url, setUrl] = useState()
    const [title, setTitle] = useState()
    const modalContainerRef = useRef()

    const open = (item) =>{
        setShow(true)
        if(item){
            setUrl(item.url)
            setTitle(item.title)
        }
    }

    const outsideClickHandler = (e) =>{
        if(e.target === modalContainerRef.current){
            setShow(false)
        }

    }

    useImperativeHandle(ref, () => ({
        openMethod: open
    }));

    return (
        <div ref={modalContainerRef} onClick={e=>outsideClickHandler(e)} className={`${styles.container} ${show && styles.show }`}>
            <div className={`${styles.modal} ${show && styles.show }`}>
                
                <div className={styles.modalHeader}>
                    
                </div>
                <div className={styles.content}>
                    <div className={styles.modalTitleContainer}>
                        <div className={styles.modalTitle}>{title}</div>
                        <FaTimes onClick={_=>setShow(false)} className={styles.closeButton} />
                    </div>
                    <iframe className={styles.iframeContainer} src={url}></iframe>
                </div>
            </div>
        </div>
    )
})

export default Modal