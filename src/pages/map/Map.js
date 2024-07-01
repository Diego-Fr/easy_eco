import { useRef, useEffect } from 'react'
import styles from './map.module.scss'

const Map = () =>{
    const sectionRef = useRef(null)

    useEffect(_=>{
        let header = document.getElementById('topbarGlobal')
        // header.classList.add(styles.header)
        setTimeout(_=>{
            if(sectionRef.current){
                let headerHeight = header.offsetHeight
                sectionRef.current.style.height = window.innerHeight - headerHeight + 'px'
            }
            
        },100)
        
    })

    return (
        <section ref={sectionRef} className={styles.sectionContainer}>
            <iframe className={styles.iframe} src='https://cth.daee.sp.gov.br/sibh/new_map'></iframe>
        </section>
    )
}

export default Map