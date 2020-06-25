import React from "react"
import "../styles/scss/components/index.scss";
import Footer from "./footer";
import Image from "./image";
import logo from "../images/logo.svg";
const CommingSoon = () => (
    <>
        <div className="container">
            <h1>Coming Soon ...</h1>
            <span>The Website is cooking with</span>

            <div className="container-img">

                <img src={logo} alt="react logo" />
                <div style={{ width: "100px", height: "100px", marginTop: "20px" }}>
                    <Image />
                </div>
            </div>
            <Footer />
        </div>
    </>
)

export default CommingSoon;