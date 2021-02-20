import React from "react";
import "./Contact.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Contact() {
  return (
    <div className="contact" id="contactscreen">
      <div className="container">
        <div className="row py-5">
          <div className="col">
            <h3 className="text-center text-uppercase">contact me</h3>
          </div>
        </div>
        <form action="backend">
          <div className="row">
            <div className="col-md">
              <input type="text" className="form-control inner-form" placeholder="Your Name"/>
            </div>
            <div className="col-md">
            <input type="text" className="form-control inner-form" placeholder="Your Email"/>
            </div>
          </div>
          <div className="row my-3">
            <div className="col">
              <textarea name="" className="form-control inner-form" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-1 mb-3">
            <button type="button" className="btn btn-outline-success btn-lg ">Submit</button>
            </div>
          </div>
        </form>
          <div className="icons">
          <a href="https://www.facebook.com/bishal.roy.779642/" target="_blank"><FacebookIcon className="iconfb"/> </a>
          <a href="https://www.instagram.com/bishal.r97/" target="_blank"><InstagramIcon className="iconin"/> </a>
          <a href="https://twitter.com/BishalR02437665" target="_blank"><TwitterIcon className="icontw"/> </a>
          <a href="https://www.linkedin.com/in/bishal-roy-8aaa0613b/" target="_blank"><LinkedInIcon className="iconli"/></a>
          </div>

        </div>
    </div>
  );
}

export default Contact;
