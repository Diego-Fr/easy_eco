
import { FaHouseCrack,FaDroplet } from "react-icons/fa6";
import { WiDaySleetStorm } from "react-icons/wi";
import { FaLayerGroup } from "react-icons/fa";
let menuItems =  [
    {
        title:'Disponibilidade Hídrica',
        desc: 'Informações sobre a quantidade de água disponível por pessoa e a demanda de água em relação à sua disponibilidade.',
        className: 'disp-hidri',
        icon: <FaDroplet />,
        items:[
            {title: 'Indicador de Falkenmark', url: 'https://app.powerbi.com/view?r=eyJrIjoiNjAxN2I2ZTktOTA1MC00MzQwLTk2YjYtYTJlZDc2YjIxZWRhIiwidCI6Ijc1MjEyZDQyLTVmNjEtNGYyYS04ZDRlLWU3YmM4ZDFmZmIzYiJ9', route: '/disp_hidrica'},
            {title: 'Nível de Estresse Hídrico', url: 'https://app.powerbi.com/view?r=eyJrIjoiOWEyYzliZjItNDZkMS00ODk4LTgwNjItNWQzMDlmMjk2NDZmIiwidCI6Ijc1MjEyZDQyLTVmNjEtNGYyYS04ZDRlLWU3YmM4ZDFmZmIzYiJ9', route: ''}
        ]
    },
    {
        title:'Condições Climáticas',
        desc: 'Engloba os fatores meteorológicos que influenciam a disponibilidade de água.',
        className: 'cond-clim',
        items:[
            {title: 'Precipitação Mensal', url: 'https://app.powerbi.com/view?r=eyJrIjoiYjRkMGE5OTktZmIzYS00ODA4LWE3NDYtMmI2NjVjM2NjMGVhIiwidCI6Ijc1MjEyZDQyLTVmNjEtNGYyYS04ZDRlLWU3YmM4ZDFmZmIzYiJ9', route: '/disp_hidrica'},
            {title: 'Índice de Precipitação Padronizado', url: 'https://app.powerbi.com/view?r=eyJrIjoiZjllNzUxZTctOTNmYy00MjkyLTk5YTQtMDg1MmE5MmRiOGJiIiwidCI6Ijc1MjEyZDQyLTVmNjEtNGYyYS04ZDRlLWU3YmM4ZDFmZmIzYiJ9', route: ''},
            {title: 'Índice de Precipitação Padronizado (6 meses)', url: 'https://app.powerbi.com/view?r=eyJrIjoiMmRiZDgyNmMtOGJlMy00ZjUyLTg3MzMtMTY4NjU2NDg0ZjMyIiwidCI6Ijc1MjEyZDQyLTVmNjEtNGYyYS04ZDRlLWU3YmM4ZDFmZmIzYiJ9', route: ''},
            {title: 'Magnitude da Seca', url: 'https://app.powerbi.com/view?r=eyJrIjoiNzQyNGViODItZGQwMy00YmU0LWJhZTItYWUwNzI2ZTEwNjU3IiwidCI6Ijc1MjEyZDQyLTVmNjEtNGYyYS04ZDRlLWU3YmM4ZDFmZmIzYiJ9', route: '/disp_hidrica'},
            {title: 'Magnitude da Seca (6 meses)', url: 'https://app.powerbi.com/view?r=eyJrIjoiMzExZDY5OTItOTc4Yi00NDRiLTgxZWQtMjk2ZTczYWQ2M2FkIiwidCI6Ijc1MjEyZDQyLTVmNjEtNGYyYS04ZDRlLWU3YmM4ZDFmZmIzYiJ9', route: '/disp_hidrica'},
            {title: 'Monitor de Secas', url: 'https://app.powerbi.com/view?r=eyJrIjoiOWEyYzliZjItNDZkMS00ODk4LTgwNjItNWQzMDlmMjk2NDZmIiwidCI6Ijc1MjEyZDQyLTVmNjEtNGYyYS04ZDRlLWU3YmM4ZDFmZmIzYiJ9', route: ''}
        ],
        icon: <WiDaySleetStorm />
    },
    {
        title:'Vulnerabilidade',
        desc: 'Identifica áreas suscetíveis a eventos climáticos adversos e o monitoramento hidrológico em tempo real.',
        className: 'vulnera',
        items:[
            {title: 'Chuva Agora', url: 'https://cth.daee.sp.gov.br/sibh/chuva_agora', route: '/disp_hidrica'},
            {title: 'Pontos Críticos de Alagamento', url: 'https://www.google.com/maps/d/embed?mid=1Y6MoNNlNW72fzt8d-KuL7FcWIkKkAp4&hl=en&ehbc=2E312F', route: ''},
            {title: 'Pontos Críticos de Erosão', url: 'https://www.google.com/maps/d/embed?mid=1U-oqBgu-kcKwKNqdmtPWbiNFbKvzo50&hl=en&ehbc=2E312F', route: '/disp_hidrica'}
        ],
        icon: <FaHouseCrack />
    },
    {
        title:'Infraestrutura Resiliente',
        desc: 'Avalia a segurança hídrica no abastecimento das cidades paulistas.',
        className: 'infra-resi',
        items:[
            {title: 'Índice de Segurança Hídrica Urbano', url: 'https://app.powerbi.com/view?r=eyJrIjoiMmYwMjY4YzAtNTg4Ny00NTE2LTlmNTYtZmQyMTRkNmM0NDllIiwidCI6Ijc1MjEyZDQyLTVmNjEtNGYyYS04ZDRlLWU3YmM4ZDFmZmIzYiJ9', route: '/disp_hidrica'},
            {title: 'Mananciais por Município', url: '', route: ''}
        ],
        icon: <FaLayerGroup />
    },
]

export default menuItems