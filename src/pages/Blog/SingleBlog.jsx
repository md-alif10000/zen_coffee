import React from "react";
import Layout from "../../components/Layout/Layout";
import "./SingleBlog.css";

const SingleBlog = () => {
  return (
    <Layout>
      <div className="blog_container">
        <div className="single_blog">
          <div className="img">
            <img
              src="https://assets.lybrate.com/q_auto:eco,f_auto,w_1200,h_720,c_fill,g_auto/imgs/product/health-wiki/bpages/Benefits-Of-Coffee.jpg"
              alt=""
            />
          </div>
          <h1 className="title">Blog Title</h1>
          <div className="blogContent">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              nulla, cum voluptatum unde neque illo quas similique quia,
              incidunt quibusdam labore natus! Aspernatur quae nesciunt aliquid
              odio dolores delectus, amet quod earum, nulla expedita soluta
              assumenda saepe fugit reiciendis aliquam harum in nam voluptatibus
              ab molestiae minus? Unde, cum ipsam?
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleBlog;
