
import { FaHouseCrack,FaDroplet } from "react-icons/fa6";
import { WiDaySleetStorm } from "react-icons/wi";
import { FaLayerGroup } from "react-icons/fa";
export default [
    {
        title:'Disponibilidade Hídrica',
        className: 'disp-hidri',
        icon: <FaDroplet />,
        items:[
            {title: 'Indicador de Falkenmark', url: 'https://app.powerbi.com/view?r=eyJrIjoiNjAxN2I2ZTktOTA1MC00MzQwLTk2YjYtYTJlZDc2YjIxZWRhIiwidCI6Ijc1MjEyZDQyLTVmNjEtNGYyYS04ZDRlLWU3YmM4ZDFmZmIzYiJ9', route: '/disp_hidrica'},
            {title: 'Nível de Estresse Hídrico', url: 'https://app.powerbi.com/view?r=eyJrIjoiOWEyYzliZjItNDZkMS00ODk4LTgwNjItNWQzMDlmMjk2NDZmIiwidCI6Ijc1MjEyZDQyLTVmNjEtNGYyYS04ZDRlLWU3YmM4ZDFmZmIzYiJ9', route: ''}
        ]
    },
    {
        title:'Condições Climáticas',
        className: 'cond-clim',
        items:[
            {title: 'Precipitação Mensal', url: 'https://app.powerbi.com/view?r=eyJrIjoiNjAxN2I2ZTktOTA1MC00MzQwLTk2YjYtYTJlZDc2YjIxZWRhIiwidCI6Ijc1MjEyZDQyLTVmNjEtNGYyYS04ZDRlLWU3YmM4ZDFmZmIzYiJ9', route: '/disp_hidrica'},
            {title: 'Índice de Precipitação Padronizado', url: 'https://app.powerbi.com/view?r=eyJrIjoiOWEyYzliZjItNDZkMS00ODk4LTgwNjItNWQzMDlmMjk2NDZmIiwidCI6Ijc1MjEyZDQyLTVmNjEtNGYyYS04ZDRlLWU3YmM4ZDFmZmIzYiJ9', route: ''},
            {title: 'Magnitude da Seca', url: 'https://app.powerbi.com/view?r=eyJrIjoiNjAxN2I2ZTktOTA1MC00MzQwLTk2YjYtYTJlZDc2YjIxZWRhIiwidCI6Ijc1MjEyZDQyLTVmNjEtNGYyYS04ZDRlLWU3YmM4ZDFmZmIzYiJ9', route: '/disp_hidrica'},
            {title: 'Monitor de Secas', url: 'https://app.powerbi.com/view?r=eyJrIjoiOWEyYzliZjItNDZkMS00ODk4LTgwNjItNWQzMDlmMjk2NDZmIiwidCI6Ijc1MjEyZDQyLTVmNjEtNGYyYS04ZDRlLWU3YmM4ZDFmZmIzYiJ9', route: ''}
        ],
        icon: <WiDaySleetStorm />
    },
    {
        title:'Vulnerabilidade',
        className: 'vulnera',
        items:[
            {title: 'Chuva Agora', url: 'https://cth.daee.sp.gov.br/sibh/chuva_agora', route: '/disp_hidrica'},
            {title: 'Pontos Críticos de Alagamento', url: 'https://app.powerbi.com/view?r=eyJrIjoiOWEyYzliZjItNDZkMS00ODk4LTgwNjItNWQzMDlmMjk2NDZmIiwidCI6Ijc1MjEyZDQyLTVmNjEtNGYyYS04ZDRlLWU3YmM4ZDFmZmIzYiJ9', route: ''},
            {title: 'Pontos Críticos de Erosão', url: 'https://app.powerbi.com/view?r=eyJrIjoiNjAxN2I2ZTktOTA1MC00MzQwLTk2YjYtYTJlZDc2YjIxZWRhIiwidCI6Ijc1MjEyZDQyLTVmNjEtNGYyYS04ZDRlLWU3YmM4ZDFmZmIzYiJ9', route: '/disp_hidrica'}
        ],
        icon: <FaHouseCrack />
    },
    {
        title:'Infraestrutura Resiliente',
        className: 'infra-resi',
        items:[
            {title: 'Índice de Segurança Hídrica Urbano', url: 'https://app.powerbi.com/view?r=eyJrIjoiNjAxN2I2ZTktOTA1MC00MzQwLTk2YjYtYTJlZDc2YjIxZWRhIiwidCI6Ijc1MjEyZDQyLTVmNjEtNGYyYS04ZDRlLWU3YmM4ZDFmZmIzYiJ9', route: '/disp_hidrica'},
            {title: 'Mananciais por Município', url: 'https://app.powerbi.com/view?r=eyJrIjoiOWEyYzliZjItNDZkMS00ODk4LTgwNjItNWQzMDlmMjk2NDZmIiwidCI6Ijc1MjEyZDQyLTVmNjEtNGYyYS04ZDRlLWU3YmM4ZDFmZmIzYiJ9', route: ''}
        ],
        icon: <FaLayerGroup />
    },
]