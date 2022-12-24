import React, { useState } from 'react';
import TODO from '../images/todo.png'
import '../App.css'

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([])

    const addItem = () => {
        //if use enter
        if (!inputData) {

        }
        else {
            //to append the data items inserted
            setItems([...items, inputData])
            //to clear the data entered from screeen after being inserted
            setInputData('')
        }
    }

    //to delete items

    const deleteItem = (id) => {
    const updatedItems = items.filter((elem, ind)=>{
        return ind !== id;
    })
    setItems(updatedItems)
    }


    // to remove all

    const removeAll = () =>{
        setItems([])
    }

    return (
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src={TODO} alt="todo logo" />
                    <figcaption>Add your list here</figcaption>
                </figure>

                <div className="addItems">
                    <input type="text" placeholder='Add Items...'
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                    />
                    <i className="fa fa-plus add-btn" title='Add Item'
                        onClick={addItem}
                    ></i>
                </div>

                <div className="showItems">

                    {
                        items.map((ele, ind) => {
                            return (
                                <div className="eachItem" key={ind}>
                                    <h3>{ele}</h3>
                                    <i className='far fa-trash-alt add-btn' title='Delete Item' onClick={() => {deleteItem(ind)}} ></i>
                                </div>
                            )
                        })
                    }


                </div>
                <div className="showItems">
                    <button onClick={removeAll} className='btn' > <span>Remove All</span> </button>
                </div>
            </div>
        </div>
    )
}

export default Todo