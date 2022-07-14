import React, { useContext } from 'react'
import Header from './Header';
import Map from './Map';
import CardNews from './CardNews';
import { LocalContext } from '../context/localContext';
import cardNewsData from '../data/cardNews.json';
import '../styles/Main.css'

function Main() {
    const localContext = useContext(LocalContext);

    return (
        <>
            <Header />
            <h1 className=''>{localContext.local} 안전사고 지도</h1>
            <Map />
            <h1 className=''>{localContext.local} 안전 카드뉴스</h1>
            <div className='cardNews--div'>
            {
                cardNewsData.map((item)=>{
                    return (
                            <CardNews item={item}/>
                    )
                })
            }
            </div>
        </>
    )
}

export default Main