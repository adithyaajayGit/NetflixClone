import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="social-media-icons">
                <a href="/#" ><i class="fab fa-facebook-square"></i></a>
                <a href="/#" ><i class="fab fa-instagram-square"></i></a>
                <a href="/#" ><i class="fab fa-twitter-square"></i></a>
                <a href="/#" ><i class="fab fa-youtube-square"></i></a>
            </div>
            <div className="list-items">
                <div className="column">
                    <a href="/#" >Audio and Subtitles</a>
                    <a href="/#" >Media Centre</a>
                    <a href="/#" >Privacy</a>
                    <a href="/#" >Contact Us</a>
                </div>
                <div className="column">
                    <a href="/#" >Audio Description</a>
                    <a href="/#" >Investor Relations</a>
                    <a href="/#" >Legal Notices</a>
                </div>
                <div className="column">
                    <a href="/#" >Help Centre</a>
                    <a href="/#" >Jobs</a>
                    <a href="/#" >Cookie Preferences</a>
                </div>
                <div className="column">
                    <a href="/#" >Gift Cards</a>
                    <a href="/#" >Terms of Use</a>
                    <a href="/#" >Corporate Information</a>
                </div>
            </div>
            <div className="service-button">
                <button>Service Code</button>
            </div>
            <div className="copyright">
                <p>Copyright@Fuad2021</p>
            </div>
        </div>
    )
}

export default Footer;