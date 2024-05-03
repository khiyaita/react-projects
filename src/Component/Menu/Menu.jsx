import { useState } from "react";
import Article from "./Article";
import "./Menu.css";
import data from "./data";
function OurMenue() {
  const [filter,setFilter]=useState(data)
  const handleAll =()=>{
setFilter(data)
  }
  const handleBreakfast=()=>{
    setFilter(data.filter(e=>{if(e.type==="breakfast"){return e}}))
  }
  const handleShakes=()=>{
    setFilter(data.filter(e=>{if(e.type==="shakes"){return e}}))
  }
  const handleLunch=()=>{
    setFilter(data.filter(e=>{if(e.type==="lunch"){return e}}))
  }
  return (
    <>
      <main>
        <div className="menu">
          <div className="title">
            <h2>our menu</h2>
            <div className="title-underline"></div>
          </div>
          <div className="btn-container">
            <button type="button" className="btn" onClick={handleAll}>
              all
            </button>
            <button type="button" className="btn" onClick={handleBreakfast}>
              breakfast
            </button>
            <button type="button" className="btn"onClick={handleLunch}>
              lunch
            </button>
            <button type="button" className="btn" onClick={handleShakes}>
              shakes
            </button>
          </div>
          <div className="section-center">
            {filter.map((dt,i)=>(
              <Article
              key={i}
              name={dt.name}
              price={dt.price}
              info={dt.info}
              img={dt.img}
              />
              ))}
          </div>
        </div>
      </main>
    </>
  );
}
export default OurMenue;
