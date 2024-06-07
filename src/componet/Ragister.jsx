import React, { Component } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

export default class Ragister extends Component {
  render() {
    return (
      <div>
        <div className="login-container imgage" >
    <div className="overlay" >
        <div className="left-section">
            <h1>Welcome Back</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
            <div className="social-icons">
                <a href="https://www.facebook.com/"><FaFacebook/></a>
                <a href="https://x.com/?lang=en-in&mx=2"><FaTwitter/></a>
                <a href="https://www.instagram.com/?hl=en"><FaInstagramSquare/></a>
                <a href="https://www.youtube.com/?gl=IN"><IoLogoYoutube/></a>
            </div>
        </div>


        <div className="right-section">
            <h2>Ragister</h2>
            <form>
                <input type="Name" placeholder="Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="password" placeholder="Password" required />
                <input type="Cpassword" placeholder="CPassword" required />
                <input type="Phone No." placeholder="Phone No." required />
                <div className="remember-me">
                    <input type="checkbox" id="rememberMe" />
                    <label htmlFor="rememberMe">Remember Me</label>
                </div>
                <button type="submit">Ragister now</button>
            </form>
            <a href="#" className="forgot-password">Lost your password?</a>
            <p className="terms">
                By clicking on "Sign in now" you agree to <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
            </p>
        </div>
        
    </div>
</div>
      </div>
    )
  }
}
