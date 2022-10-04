import './Component3.css';
// import './Component2.css';
import img1 from './sptfy images/bollywood.jpg';
import img2 from './sptfy images/punjabi.jpg';
import img3 from './sptfy images/tollywood.jpg';
import img4 from './sptfy images/hothits.jpg';
import React from 'react'

export default function Component3() {
  return (
    <div className="Component3">
        <div className="body"> {/* Div tag have text elements in it*/}
          <h1 style={{ textAlign: "center" }}>Connect with music culture</h1>
          <div className="row">
            <div className='column1'> {/* Column1 to contain two division in it */}
            <div style={{paddingRight:"15%"}}>
              <img src={img1} alt=""/>
              <h3>Bollywood Butter</h3>
              <p className="heading">The finest quality Bollywood music handpicked for you.</p>
              
            </div>
            <div style={{paddingRight:"10%"}}>
              <img src={img2} alt="" />
              <h3>Punjabi 101</h3>
              <p className="heading">The ultimate Punjabi hits</p>
            </div>
            </div>
            <div className='column2'> {/* Column1 to contain two division in it */}
            <div style={{paddingLeft:"10%"}}>
              <img src={img3} alt=""/>
              <h3>Tollywood Pearls</h3>
              <p className="heading">The finest music from Telegu films.</p>
             
            </div>
            <div style={{paddingLeft:"20%"}}>
              <img src={img4} alt=""/>
              <h3>Hot Hits India</h3>
              <p className="heading">50 hottest hits from across the globe.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
  )
}
