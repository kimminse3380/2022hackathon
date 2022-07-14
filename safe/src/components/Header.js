import React, { useState } from 'react'
import '../styles/Header.css'

function Header() {

  const [search, setSearch] = useState('');
  
  return (
    <header>
      <div className='header--logo'>
        <img src='./images/bread.png' alt='빵' className='header--logo--img' />
        <span className='header--logo--text'>세이프티 브레드</span>
      </div>
      <div className='header--search'>
        <img src='./images/search.png' alt='검색' className='header--search--img' />
        <input type="text" placeholder='우리동네 안전사고 더 알아보기' className='header--search--input' onChange={e => setSearch(e.target.value)}></input>
      </div>
    </header>
  )
}

export default Header