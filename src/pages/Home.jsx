import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import AppsIcon from "@mui/icons-material/Apps"
import {Avatar} from '@mui/material'
import Search from '../components/Search'

function Home() {
  return (
    <div className='home'>
        {/* <h1>This is the Home page</h1> */}
        <div className="home__header">
          <div className="home__headerLeft">
            <Link to='/about'>about</Link>
            <Link to='/store'>store</Link>
          </div>
          <div className="home__headerRight">
            <Link to='/gmail'>gmail</Link>
            <Link to="/images">images</Link>
            <AppsIcon/>
            <Avatar/>
          </div>
        </div>
        <div className="home__body">
          <img src="http://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif" alt="none" />
          <div className="home__inputContainer">
            <Search buttons/>
          </div>
        </div>
    </div>
  )
}

export default Home
