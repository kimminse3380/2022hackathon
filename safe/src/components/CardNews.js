import React from 'react'
import '../styles/CardNews.css'

function CardNews(props) {
    return (
        <div className='cardNews'>
            <div>
                <a href={props.item.link}><img src={`/images/${props.item.img}`} className='cardNews--img'></img></a>
                <h3>{props.item.name}</h3>
                <span className='cardNews--tag'>#교통사고</span>
            </div>
        </div>
    )
}

export default CardNews;