import React from 'react'
import Header from './components/Header'
import Item from './components/Item'
import Footer from './components/Footer'

import Accessories from './images/Accessories.jpg'
import ModelS from './images/ModelS.jpeg'
import Model3 from './images/Model3.jpeg'
import ModelX from './images/ModelX.jpeg'
import ModelY from './images/ModelY.jpeg'
import SolarPanels from './images/SolarPanels.jpeg'
import SolarRoof from './images/SolarRoof.jpeg'

 

const App = () => {
  return (
    <div className='app'>
    <Header/>
    <div className="app_itemsContainer">
    <Item
        title='Model 3'
        desc = 'Order Online for Touchless Delivery'
        backgroundImg = {Model3}
        leftBtn = 'CUSTOM ORDER'
        rightBtn = 'LEARN MORE'
        twoButtons = 'true'
      />
      <Item
        title='Model Y'
        desc = 'Order Online for Touchless Delivery'
        backgroundImg = {ModelY}
        leftBtn = 'CUSTOM ORDER'
        rightBtn = 'LEARN MORE'
        twoButtons = 'true'
      />
      <Item
        title='Model S'
        desc = 'Order Online for Touchless Delivery'
        backgroundImg = {ModelS}
        leftBtn = 'CUSTOM ORDER'
        rightBtn = 'LEARN MORE'
        twoButtons = 'true'
      />
      <Item
        title='Model X'
        desc = 'Order Online for Touchless Delivery'
        backgroundImg = {ModelX}
        leftBtn = 'CUSTOM ORDER'
        rightBtn = 'LEARN MORE'
        twoButtons = 'true'
      />
      <Item
        title='Solar Panels'
        desc = 'Lowest Cost Solar Panels in America'
        backgroundImg = {SolarPanels}
        leftBtn = 'ORDER NOW'
        rightBtn = 'LEARN MORE'
        twoButtons = 'true'
      />
       <Item
        title='Solar Roof'
        desc = 'Produce Clean Energy From Your Roof'
        backgroundImg = {SolarRoof}
        leftBtn = 'CUSTOM ORDER'
        rightBtn = 'LEARN MORE'
        twoButtons = 'true'
      />
      <Item
        title='Accessories'
        desc = ''
        backgroundImg = {Accessories}
        leftBtn = 'SHOP NOW'
        //twoButtons = 'false'
      />
    </div>
    <Footer/>
    </div>
    // header
   //iTEMS
   //FOOTER
  )
}

export default App