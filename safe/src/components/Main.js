import React, { useContext, useState } from 'react'
import Header from './Header';
import Map from './Map';
import CardNews from './CardNews';
import { LocalContext } from '../context/localContext';
import cardNewsData from '../data/cardNews.json';
import '../styles/Main.css'
import Graph from './Graph';
import CityWrap from './CityWrap';
import Sliders from './Sliders';

function Main() {
    const localContext = useContext(LocalContext);
    const [isSelect, setIsSelect] = useState(false);


    console.log(isSelect);
    return (
        <>
            <Header />
            <Sliders/>
            <h1 className=''>{localContext.local}<img src="./images/arrow_drop_down.svg" alt="dropdown" onClick={(e) => setIsSelect(prev => !prev)} className="dropdown" /> 안전사고 Top 5</h1>
            {
                isSelect && <CityWrap />
            }
            <Graph />
            <h1 className=''>부산 안전사고 지도</h1>
            <Map />
            <h1 className=''>안전 카드뉴스</h1>
            <p className='cardNews--div'>
                {
                    cardNewsData.map((item) => {
                        return (
                            <CardNews item={item} />
                        )
                    })
                }
            </p>
            <div>
                <h1 className='accident--div'>사고 시 행동요령</h1>
                <a id='fir' href='https://www.daegu.go.kr/119mobile/index.do?menu_id=00002123'><img src='./images/교통사고.svg' alt='교통사고' className='card'></img></a>
                <a id='sec' href='https://www.daejeon.go.kr/dj119/CmmContentsHtmlView.do?menuSeq=4369'><img src='./images/화재.svg' alt='화재' className='card'></img></a>
                <a id='thi' href='https://www.safekorea.go.kr/idsiSFK/neo/sfk/cs/contents/prevent/SDIJKM5118.html?menuSeq=127'><img src='./images/등산.svg' alt='등산' className='card'></img></a>
                <a id='fou' href='https://www.safekorea.go.kr/idsiSFK/neo/sfk/cs/contents/prevent/SDIJK13928.html?cd1=28&cd2=999&pagecd=SDIJK139.28&menuSeq=128'><img src='./images/수난.svg' alt='수난' className='card'></img></a>
                <a id='fif' href='https://www.safekorea.go.kr/idsiSFK/neo/sfk/cs/contents/prevent/SDIJK14029.html?cd1=29&cd2=999&pagecd=SDIJK140.29&menuSeq=128'><img src='./images/붕괴.svg' alt='붕괴' className='card'></img></a>
            </div>
        </>
    )
}

export default Main