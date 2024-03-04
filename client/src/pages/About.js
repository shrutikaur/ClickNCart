import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Clickncart"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to ClicknCart. We are more than just an online
            marketplace; we are a destination for quality products, exceptional
            service, and a seamless shopping experience. Our mission is to make
            shopping convenient and enjoyable for you. With a commitment to
            excellence and a vast selection of products across various
            categories, we aim to be your go-to destination for all your
            shopping needs. We take pride in our partnerships with trusted
            sellers and our dedication to ensuring secure transactions. Thank
            you for choosing ClicknCart, where your satisfaction is our
            priority.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
