import { Button, Stack } from "@mui/material";
import React from "react";
import Layout from "../../components/Layout/Layout";
import "./Contact.css";

const Contact = () => {
  return (
    <Layout>
      <div className="contact">
        <div className="form_container container">
          <div className="left">
            <h1>Contact</h1>
            <form action="" className="form">
              <Stack>

              <div className="input">
                <label htmlFor="">Name</label>
                <input type="text" />
              </div>
              <div className="input">
                <label htmlFor="">Email</label>
                <input type="text" />
              </div>
              <div className="input">
                <label htmlFor="">Subject</label>
                <input type="text" />
              </div>
              <div className="input">
                <label htmlFor="">Message</label>
                <input type="text" />
              </div>
              <Button variant="contained"  >SEND MESSAGE</Button>

              </Stack>
             
            </form>
          </div>
          <div className="right">
            <img src="./images/contact.svg" alt="" />
          </div>
        </div>
        <div className="infos container">
          <div className="info">
            <h3 className="title">Title</h3>
            <p>
              Lorem ipsum dolor sit amet, consecteulla architecto debitis elror.
            </p>
          </div>
          <div className="info">
            <h3 className="title">Title</h3>
            <p>
              Lorem ipsum dolor sit amet, consecteulla architecto debitis elror.
            </p>
          </div>
          <div className="info">
            <h3 className="title">Title</h3>
            <p>
              Lorem ipsum dolor sit amet, consecteulla architecto debitis elror.
            </p>
          </div>
        </div>

        <div className="findUs container">
          <h1>Find us here</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1802417.9962220276!2d30.933753055171067!3d28.074936692615232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2sEgypt!5e0!3m2!1sen!2sbd!4v1653041080848!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
