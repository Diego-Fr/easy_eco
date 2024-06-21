import styles from './Home2.module.scss'

import TriangleItem from './components/triangle_item/TriangleItem'
import { WiDaySleetStorm } from 'react-icons/wi';
import { GiWaterRecycling } from 'react-icons/gi';
import menuItems from '../../data/menuItems';
import { useEffect, useRef, useState } from 'react';
import MenuList from '../menu_list/MenuList';
import CloseButton from './components/list/CloseButton';
import PageHeader from '../../components/page_header/PageHeader';
import Card from './components/card/Card';



const Home2 = () =>{

    const containerRef = useRef(null)
    const sectionRef = useRef(null)
    const [showList, setShowList] = useState()
    const [listName, setListName] = useState('dispHidro')
    const [listTitle, setListTitle] = useState('')

    const clickHandler = item =>{
        setListName(item.listName)
        setListTitle(item.listTitle)
        setShowList(true)
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
                sectionRef.current.style.height = window.innerHeight + 'px'
            }
            
        },100)
        
    })

    return (
        <>
            {!showList ?
                <>
                    {/* <PageHeader showIcon={false} title={'Indicadores Segurança Hídrica'}></PageHeader> */}
                    <section ref={sectionRef} className={styles.sectionContainer}>
                        
                        <div className={styles.container}>
                            <div className={styles.pageTitleContainer}>
                                Indicadores Segurança Hídrica
                            </div>
                            <div className={`${styles.cardsWrapper}`}>
                                {
                                    menuItems.map(item=>
                                        <Card item={item}></Card>
                                    )
                                }
                            </div>
                        </div>
                    </section>
                </>
                :
                <>
                    <MenuList listName={listName} listTitle={listTitle}/>
                    <CloseButton onPress={closeMenu} />
                </>
                
            }
        </>
    )
}

export default Home2