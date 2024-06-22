import styles from './Home.module.scss'

import menuItems from '../../data/menuItems';
import { useEffect, useRef, useState } from 'react';
import MenuList from './menu_list/MenuList';
import Card from './components/card/Card';
import spImage from '../../assets/SP-GOV-BR-vertical-RGB.png'
import daeeLogo from '../../assets/daee70.png'
import Modal from '../../components/modal/Modal';
import { useMediaQuery } from 'react-responsive';
import MobileCard from './components/card/MobileCard';



const Home = () =>{

    const sectionRef = useRef(null)
    const [showList, setShowList] = useState()
    const [selectedItem, setSelectedItem] = useState(null)
    const modalRef = useRef()
    const isMobile = useMediaQuery({ maxWidth: 480 });
    
    const clickHandler = item =>{
        setSelectedItem(item)
        setShowList(true)
    }

    const itemClickHandler = item =>{
        modalRef.current.openMethod(item)
    }
    const closeMenu = () =>{
        setShowList(false)
    }

    useEffect(_=>{
        let header = document.getElementById('topbarGlobal')
        header.classList.add(styles.header)
        setTimeout(_=>{
            if(sectionRef.current){
                let headerHeight = header.offsetHeight
                sectionRef.current.style.height = window.innerHeight - headerHeight + 'px'
            }
            
        },100)
        
    })

    return (
        <>
            <section ref={sectionRef} className={styles.sectionContainer}>
                <Modal ref={modalRef}></Modal>
                    {!showList ?
                        <>       
                                
                            <div className={`${!isMobile && styles.container}`}>
                                <div className={styles.pageTitleContainer}>
                                    Indicadores Segurança Hídrica
                                </div>
                                <div className={`${styles.cardsWrapper} ${isMobile && styles.vertical}`}>
                                    {
                                        menuItems.map((item,index)=>{
                                            return !isMobile ? <Card key={index} itemClickHandler={itemClickHandler} item={item}></Card> : <MobileCard key={index} itemClickHandler={clickHandler} item={item}/>
                                        })
                                    }
                                </div>
                                <div className={styles.entitiesContainer}>
                                    <img src={spImage} width={100}></img>
                                    <img src={daeeLogo} width={100}></img>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <MenuList onItemPress={itemClickHandler} onClosePress={closeMenu} item={selectedItem}/>
                        </>
                        
                    }
                
            </section>
        </>
    )
}

export default Home