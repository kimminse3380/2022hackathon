import React from 'react'
import '../styles/CardNews.css'

function CardNews(props) {
    return (
        <div className='cardNews'>
            <div>
                <a href={props.item.link}><img src={`/images/${props.item.img}`} className='cardNews--img'></img></a>
                <h3 className="cardNews--title">{props.item.name}</h3>
            </div>
        </div>
    )
}

export default CardNews;