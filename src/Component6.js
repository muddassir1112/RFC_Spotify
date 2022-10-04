import './Component6.css'
import img1 from "./sptfy images/spt.jpg";
import img2 from "./sptfy images/fb-twitter-instagram.jpg";
import img3 from "./sptfy images/download.png";
import React from 'react'

export default function Component6() {
  return (
    <div className="container2">
        <div className="row2">
          <div className="col--1">
            <div>
              <img src={img1} style={{ width: "120px" }} alt=""/>
            </div>
          </div>
          <div className="col--2">
            <h5>Company</h5>
            <p className="para2">About</p>
            <p className="para2">Jobs</p>
            <p className="para2">For the Records</p>
          </div>
          <div className="col--3">
            <h5>Communities</h5>
            <p className="para2">For Artists</p>
            <p className="para2">Developers</p>
            <p className="para2">Advertising</p>
            <p className="para2">Investors</p>
            <p className="para2">Vendors</p>
          </div>
          <div className="col--4">
            <h5>Useful Links</h5>
            <a href="#" className="anchor1">
              Support
            </a>
            <br></br>
            <br></br>
            <a href="#" className="anchor1">
              Web PLayer
            </a>
            <br></br>
            <br></br>
            <a href="#" className="anchor1">
              Free Mobile App
            </a>
          </div>
          <div className="col--5">
            <a href="#">
              <img src={img2} style={{ width: "80px", backgroundColor: "black" }} alt=""/>
            </a>
          </div>
        </div>
        <div className="row3">
          <div className="footer2">
            <a href="#" className="anchor">
              Legal{" "}
            </a>{" "}
            &nbsp; &nbsp;
            <a href="#" className="anchor">
              Privacy Center{" "}
            </a>{" "}
            &nbsp; &nbsp;
            <a href="#" className="anchor">
              Privacy Policy{" "}
            </a>{" "}
            &nbsp; &nbsp;
            <a href="#" className="anchor">
              Cookies{" "}
            </a>{" "}
            &nbsp; &nbsp;
            <a href="#" className="anchor">
              About Ads{" "}
            </a>
          </div>
          <div className="footer3"> {/*Footer of main division*/}
            <span style={{ fontSize: "13px" }}>
              <img src={img3} style={{ width: "20px", fontWeight: "normal" }} alt="" />
              India(English)Ⓒ2022 Spotify AB
            </span>
          </div>
        </div>
      </div>
  )
}
