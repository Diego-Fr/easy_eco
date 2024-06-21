import styles from './Home.module.scss'
import TriangleItem from './components/triangle_item/TriangleItem'
import { WiDaySleetStorm } from 'react-icons/wi';
import { GiWaterRecycling } from 'react-icons/gi';
import menuItems from '../../data/menuItems';
import { useEffect, useRef, useState } from 'react';
import MenuList from '../menu_list/MenuList';
import CloseButton from './components/list/CloseButton';
import PageHeader from '../../components/page_header/PageHeader';



const Home = () =>{

    const containerRef = useRef(null)
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
        setTimeout(_=>{
            if(containerRef.current){
                let headerHeight = document.getElementById('topbarGlobal').offsetHeight
                containerRef.current.style.height = window.innerWidth + 'px'
            }
            
        },100)
        
    })

    return (
        <>
            {!showList ?
                <>
                    <PageHeader showIcon={false} title={'Indicadores Segurança Hídrica'}></PageHeader>
                    <div ref={containerRef} className={styles.container}>
                        <TriangleItem clickHandler={clickHandler} id="triangleTop" listName={'dispHidro'} title={'Disponibilidade Hídrica'} icon={<GiWaterRecycling />} listItems={menuItems.dispHidro}></TriangleItem>
                        <TriangleItem clickHandler={clickHandler} id="triangleBottom" listName={'condClima'} title={'Condições Climáticas'} icon={<WiDaySleetStorm />} listItems={menuItems.condClima}></TriangleItem>
                        <TriangleItem clickHandler={clickHandler} id="triangleLeft" listName={'vulnera'} title={'Vulnerabilidade'} icon={<WiDaySleetStorm />} listItems={menuItems.vulnera}></TriangleItem>
                        <TriangleItem clickHandler={clickHandler} id="triangleRight" listName={'infraRes'} title={'Infraestrutura Resiliente'} icon={<WiDaySleetStorm />} listItems={menuItems.infraRes}></TriangleItem>
                    </div>
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

export default Home