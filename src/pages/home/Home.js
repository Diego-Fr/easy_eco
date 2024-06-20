import styles from './Home.module.scss'
import TriangleItem from './components/triangle_item/TriangleItem'
import { WiDaySleetStorm } from 'react-icons/wi';
import { GiWaterRecycling } from 'react-icons/gi';
import menuItems from '../../data/menuItems';




const Home = () =>{
    return (
        <div className={styles.container}>
            <TriangleItem id="triangleTop" title={'Disponibilidade Hídrica'} icon={<GiWaterRecycling />} listItems={menuItems.dispHidro}></TriangleItem>
            <TriangleItem id="triangleBottom" title={'Condições Climáticas'} icon={<WiDaySleetStorm />} listItems={menuItems.condClima}></TriangleItem>
            <TriangleItem id="triangleLeft" title={'Vulnerabilidade'} icon={<WiDaySleetStorm />} listItems={menuItems.vulnera}></TriangleItem>
            <TriangleItem id="triangleRight" title={'Infraestrutura Resiliente'} icon={<WiDaySleetStorm />} listItems={menuItems.infraRes}></TriangleItem>
        </div>
    )
}

export default Home