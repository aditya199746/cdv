import React from 'react'
import Logo from '../logo'
import NavBar from '../NavBar'
import Card from '../UI/Card'

export default function Hero(props) {
    return (
        <div>
           <Card >
           <div style={{padding:'50px 0'}}> 
           <Logo />
           <NavBar />
           </div>
           
           </Card>
        </div>
    )
}
