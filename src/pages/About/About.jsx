import React from "react";
import Layout from "../../components/Layout/Layout";
import {Fade,Zoom,Bounce} from "react-reveal"
import "./About.css";

const About = () => {
  return (
      <Layout footer={true}>
    <div className="about">
      <div className="story container">
      <Fade top>
      <h1>About US</h1>
        </Fade>

        <h3>Our Story</h3>
        <div className="content">

        <Zoom>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
            eveniet voluptatem iure quam ad voluptatum! Quas illum repellat
            aspernatur temporibus debitis doloribus repudiandae expedita
            quibusdam provident exercitationem unde saepe magni, voluptatibus
            sit blanditiis quasi dicta vitae officiis veritatis quae obcaecati!
            Quis deserunt cupiditate eius quam minima aut quos recusandae!
            Repellendus minima quod et, atque velit eos quibusdam laboriosam a
            expedita nesciunt totam. Doloremque dignissimos debitis nam
            reiciendis eligendi, numquam, odio molestiae tempore assumenda modi
            dolores! Quos, dolorum dicta. Illum, odio.
          </p>
        </Zoom>
     
        </div>
      </div>
      <div className="team container">
        <h1>Team</h1>
        <Bounce bottom cascade>
        <div className="members">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((member, index) => (
            <div className="member">
              <img
                src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F220509194606-elon-musk-file-050222.jpg"
                alt=""
              />
              <h3 className="name">Md Morsalin Alif</h3>
              <h4 className="title" >Developer</h4>
            </div>
          ))}
        </div>
        </Bounce>
      </div>
    </div>
    </Layout>
  );
};

export default About;
