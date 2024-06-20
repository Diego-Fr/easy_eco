import styles from './Home.module.scss'
import TriangleItem from './components/triangle_item/TriangleItem'

const Home = () =>{
    return (
        <div className={styles.container}>
            <TriangleItem id="triangleTop"></TriangleItem>
            <TriangleItem id="triangleBottom"></TriangleItem>
            <TriangleItem id="triangleLeft"></TriangleItem>
            <TriangleItem id="triangleRight"></TriangleItem>
        </div>
    )
}

export default Home