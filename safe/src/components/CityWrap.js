import React, { useContext } from 'react'
import { LocalContext } from '../context/localContext'

function CityWrap() {
    const localContext = useContext(LocalContext);

    return (
        <div class="city_wrap" id="city_wrap">
            <div class="city" onClick={(e) => { localContext.setLocal("서울") }}>서울</div>
            <div class="city" onClick={(e) => { localContext.setLocal("인천") }}>인천</div>
            <div class="city" onClick={(e) => { localContext.setLocal("부산") }}>부산</div>
            <div class="city" onClick={(e) => { localContext.setLocal("광주") }}>광주</div>
            <div class="city" onClick={(e) => { localContext.setLocal("대구") }}>대구</div>
            <div class="city" onClick={(e) => { localContext.setLocal("대전") }}>대전</div>
            <div class="city" onClick={(e) => { localContext.setLocal("울산") }}>울산</div>
            <div class="city" onClick={(e) => { localContext.setLocal("세종") }}>세종</div>
            <div class="city" onClick={(e) => { localContext.setLocal("제주") }}>제주</div>
            <div class="city" onClick={(e) => { localContext.setLocal("경기") }}>경기</div>
            <div class="city" onClick={(e) => { localContext.setLocal("강원") }}>강원</div>
            <div class="city" onClick={(e) => { localContext.setLocal("경남") }}>경남</div>
            <div class="city" onClick={(e) => { localContext.setLocal("경북") }}>경북</div>
            <div class="city" onClick={(e) => { localContext.setLocal("전남") }}>전남</div>
            <div class="city" onClick={(e) => { localContext.setLocal("전북") }}>전북</div>
            <div class="city" onClick={(e) => { localContext.setLocal("충남") }}>충남</div>
            <div class="city" onClick={(e) => { localContext.setLocal("충북") }}>충북</div>
        </div>
    )
}

export default CityWrap