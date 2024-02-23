import {useState} from 'react'

function Searchbar({handleOnButtonClick }){
    const [cityName, setCityName] = useState("")

    return <div className='searchbar'>
                <div className="mb-3 wt-6" style={{width: "400px"}}>
              <input type="text" className="form-control" id="search" style={{borderRadius: "20px", textAlign: "center"}} placeholder="Enter a city" 
                      value={cityName} onChange = {(e)=>(setCityName(e.target.value))}/>
                </div>

              <div>
                  <button type="button" className="btn btn-light" onClick={()=>handleOnButtonClick(cityName)}
                  style={{width: "85px", height: "37px",
                    backgroundColor: "dodgerblue",
                    color: "aliceblue",}}
                  >Enter</button>
              </div>
    </div>

  }

export default Searchbar