import { useEffect, useRef } from "react"
import styles from './DispHidri.module.scss'
import PageHeader from "../../components/page_header/PageHeader"
import { useLocation } from 'react-router-dom';

const DispHidri = _ =>{
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const title = queryParams.get('search');
    let iframeRef = useRef(null)

    const setIFrameSize = (page_header_height) =>{
        //ajustando tamanho do iframe
        let headerHeight = document.getElementById('topbarGlobal').offsetHeight
        iframeRef.current.height = window.innerHeight - headerHeight - page_header_height
    }

    const getSizeOfHeader = (size) =>{
        setIFrameSize(size)
    }

    return (
        <>
            <PageHeader getComponentSize={getSizeOfHeader} title={title} showIcon={true}></PageHeader>
            <iframe className={styles.iframeContainer} ref={iframeRef} title='frame' width={'100%'} src="https://app.powerbi.com/view?r=eyJrIjoiMzRmNTdmY2ItNjZmYy00OGFiLWJhNjYtNjQ3N2JkMTkyMjVlIiwidCI6Ijc1MjEyZDQyLTVmNjEtNGYyYS04ZDRlLWU3YmM4ZDFmZmIzYiJ9">

            </iframe>
        </>
    )
}

export default DispHidri