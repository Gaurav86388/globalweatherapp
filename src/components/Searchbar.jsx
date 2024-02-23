import {useState} from 'react'

function Searchbar({handleOnButtonClick }){
    const [cityName, setCityName] = useState("")

    return <div className='searchbar'>
                <div className="mb-3 wt-6" style={{width: "600px"}}>
              <input type="text" className="form-control" id="search" placeholder="Enter a city" 
                      value={cityName} onChange = {(e)=>{
                        const value = e.target.value
                        setCityName(value)

                      }}/>
                </div>

              <div>
                  <button type="button" className="btn btn-light" onClick={()=>handleOnButtonClick(cityName)}
                  style={{width: "100px",
                    backgroundColor: "dodgerblue",
                    color: "aliceblue",}}
                  >Enter</button>
              </div>
    </div>

  }

export default Searchbar