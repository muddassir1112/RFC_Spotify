import './Component2.css';
import img1 from './sptfy images/add.png';
import img2 from './sptfy images/music.png';
import img3 from './sptfy images/play.png';
import img4 from './sptfy images/pay.png';
import React from 'react'

export default function Component2() {
  return (
    <div className="Component2"> {/*Main division tag*/}
        <div className="body">
          <h2 style={{ textAlign: "center" }}>The Power Of Premium</h2>
          <div className="row">
            <div className='column1'> {/* Column1 to contain two division in it */}
            <div>
              <img src={img1} alt=""/>
              <h3>Add free music listening</h3>
              <h6 className="heading">Enjoy uniterrupted music</h6>
            </div>
            <div style={{paddingLeft:"10%"}}>
              <img src={img2} alt=""/>
              <h3>Offline playback</h3>
              <h6 className="heading">Save your data by listening offline</h6>
            </div>
            </div>
            <div className='column2'> {/* Column2 to contain two division in it */}
            <div style={{paddingLeft:"10%"}}>
              <img src={img3} alt="" />
              <h3>Play everywhere</h3>
              <h6 className="heading">Listen on your speakers,TV and other favourite devices.</h6>
            </div>
            <div style={{paddingLeft:"10%"}}>
              <img src={img4} alt="" />
              <h3>Pay your way</h3>
              <h6 className="heading">Prepay with Paytm,UPI and more.</h6>
            </div>
            </div>
          </div>
        </div>
      </div>
  )
}
