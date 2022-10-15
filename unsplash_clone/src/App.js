import React, { useState } from 'react'
import "./App.css"

const App = () => {
    const [value, setValue] = useState("");
    const [results, setResults] = useState([]);

    const fetchImages = () => {
        fetch(`https://api.unsplash.com/search/photos?client_id=9j8CNoJcPCs2l67IFwdPXNv3obPMxVedmbOo3bcYXJQ&query=${value}&orientation=squarish`).then(res => res.json()).then(data => {
            console.log(data)
            setResults(data.results)
        })

    }
    return (
        <div className='App'>
            <div className="mydiv">
                <span>Search</span>
                <input
                    style={{ width: "60%" }}
                    type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={fetchImages()}>Send</button>
            </div>
            <div className='gallery'>
                {
                    results.map((item)=>{
                        return <img className='item' key = {item.id} src={item.urls.regular} alt="" />
                    })
                    
                }
            </div>
        </div>
    )
}

export default App