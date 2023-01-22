import React from 'react'
import Button from './Button' 
import {FcExpand} from 'react-icons/fc'
import './Item.css'

const Item = ({title, desc, first,backgroundImg,leftBtn,rightBtn,twoButtons}) => {
  return (
    <div className='item' style={{
        backgroundImage: `url(${backgroundImg})`

    }}>
    <div className="item_container">
        <div className="item_text">
            <p>{title}</p>
            <div className="item_textDesc">
                <p>{desc}</p>
            </div>
        </div>
        <div className="tem_lowerThird">
            <div className="item_buttons">
                <Button imp = 'primary' text = {leftBtn}/>
                {twoButtons && (
                    <Button imp = 'secondary' text = {rightBtn}/>
                )}
            </div>
            {first && (
                <div className="item_expand">
                    <FcExpand/>
                </div>
            )}
        </div>
    </div>
         
    </div>
  )
}

export default Item