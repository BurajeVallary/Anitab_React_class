import Reat from "react";
import './style.css'
import { FaAmazonPay } from "react-icons/fa";


const Introduction = () => {
    return(
        <div>
            <h1 className="heading">What I have learnt in react</h1>
            <p>React is JavaScript library </p>
            <img src="https://res.cloudinary.com/doticq4hf/image/upload/v1688057469/samples/balloons.jpg" className="baloon"></img>
            <FaAmazonPay/>
        </div>


    )
}

export default Introduction;
