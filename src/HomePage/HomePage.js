//import videoHomePage from "../../assets/video-homepage.mp4"
import React from "react";
import './HomePage.scss'
const HomePage = (props) => {



    return (
        <div className="homepage-body container">
            <div className="homepage-content display-space ">
                <div className="content-left">
                    <div className=" title">Name HomePage</div>
                    <div className="content">
                        <span> Position Chart</span>
                    </div>
                    <div className="btn-started">
                        <button className="btn-start">Get's started. It's free</button>
                    </div>
                </div>
                <div className="content-right">
                    {/* <video autoPlay loop muted className="embed-responsive-item"
                            style={{ height: "550px" }}
                        >
                            <source src={videoHomePage} type="video/mp4" />
                        </video> */}
                    <div className=" btn-group1">
                        <button className="btn btn-primary">btn1 name</button>
                        <button className="btn btn-success">btn2 name</button>
                    </div>


                </div >
            </div>

        </div >
    );
}
export default HomePage;