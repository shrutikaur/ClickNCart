import React from 'react'
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Your privacy is important to us.</p>
          <p>
            We only ask for personal information when we truly need it to
            provide a service to you.{" "}
          </p>
          <p>
            We collect it by fair and lawful means, with your knowledge and
            consent. We also let you know why we're collecting it and how it
            will be used.
          </p>
          <p>We don't share any personal information with third parties,except when required by law.</p>
          <p>You're free to refuse our request to your personal information.y</p>
          <p>This policy is effective as of August 26 2023</p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Policy;