import {useState} from 'react'

function Searchbar({handleOnButtonClick }){
    const [cityName, setCityName] = useState("")

    return <div className='searchbar'>
                <div className="mb-3 wt-6" style={{width: "400px"}}>
              <input type="text" className="form-control" id="search" style={{borderRadius: "20px", textAlign: "center", height: "37px"}} placeholder="Enter a city" 
                      value={cityName} onChange = {(e)=>(setCityName(e.target.value))}/>
                </div>

              <div style={{position: "relative"}}>
                  <button type="button" className="btn btn-light" onClick={()=>handleOnButtonClick(cityName)}
                  style={{width: "35px", height: "32px",
                    backgroundColor: "transparent",
                   border: "0px", cursor: 'pointer',
                  borderRadius: "50%", position: "absolute", bottom: "20px", left: "153px",
                  }}
                  ><img src="/search.png" alt="search image" style={{width: "26px", height:"25px"}}/></button>
              </div>
    </div>

  }

export default Searchbar