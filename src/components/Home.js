import React from "react";
// import "./home.css";

const Home = () => {
  return (
    <div>
      <h1>ProFolio</h1>
      <p>
        Profolio is a customizable portfolio website template that allows users
        to easily create and host their own portfolio website. In this tutorial,
        we'll walk you through the steps to get started with Profolio.
      </p>
      <h2>Step 1: Fork the Template Repository</h2>
      <p>
        To get started, head over to the{" "}
        <a href="https://github.com/20dcs/Profolio" target="_blank" rel="noreferrer">
          Profolio GitHub repository
        </a>{" "}
        and fork the repository to your own GitHub account.
      </p>
      <img
        src="https://github.com/20dcs/Profolio/assets/36930635/263097b3-7b3e-4353-bd0e-c0187325a593"
        alt="Screenshot 1"
      />
      <img
        src="https://github.com/20dcs/Profolio/assets/36930635/36eb7746-baeb-4633-b821-f88688aae06e"
        alt="Screenshot 2"
      />
      <img
        src="https://github.com/20dcs/Profolio/assets/36930635/97f6cb29-cb49-40f0-ba87-9cdfb1ab413c"
        alt="Screenshot 3"
      />
      <h2>Step 2: Replace the Data</h2>
      <p>
        After forking the repository, you'll need to replace the{" "}
        <code>data.json</code> file with your own personal data. To generate
        this data, visit{" "}
        <a href="https://profoliomaker.netlify.app/" target="_blank" rel="noreferrer">
          https://profoliomaker.netlify.app/
        </a>{" "}
        and fill in your details, just like making a resume.
      </p>
      <img
        src="https://github.com/20dcs/Profolio/assets/36930635/75923e99-234e-4eec-86e1-3763b1e5ad2f"
        alt="Screenshot 4"
      />
      <img
        src="https://github.com/20dcs/Profolio/assets/36930635/0e640d69-834c-4a47-a8eb-1602c8f0fea1"
        alt="Screenshot 7"
      />
      <img
        src="https://github.com/20dcs/Profolio/assets/36930635/6bd9d278-1ae7-4208-8577-0771430d0bf9"
        alt="Screenshot 8"
      />
      <p>
        Once you're finished, just copy the code that is generated and replace
        the existing <code>data.json</code> file in your forked repository.
      </p>
      <img
        src="https://github.com/20dcs/Profolio/assets/36930635/3422dae6-aa5c-44f3-9121-fb11b7a8b7fc"
        alt="Screenshot 9"
      />
      <img
        src="https://github.com/20dcs/Profolio/assets/36930635/06375df6-4916-4f7d-8907-a285cec7d742"
        alt="Screenshot 10"
      />
      <img
        src="https://github.com/20dcs/Profolio/assets/36930635/ea553c8f-e689-4e4e-aacd-9c4245639300"
        alt="Screenshot 12"
      />
      <h2>Step 3: Host the Website</h2>
      <img
        src="https://github.com/20dcs/Profolio/assets/36930635/71adcabf-c33d-41fd-9da2-927f8c0eadbe"
        alt="Screenshot 13"
      />
      <p>
        Finally, you'll just need to host your portfolio website. Profolio is
        built with{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          Next.js
        </a>
        , so you can easily host your website with any free hosting platform
        such as{" "}
        <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
          Netlify
        </a>
        . Just sign up on the platform, give it access to your GitHub account
        and import your forked repository. It will be deployed on the internet.
        Once you've hosted your website on the internet, you can share a simple
        link to your portfolio and showcase your work to the world!
      </p>
      <p>
        <em>
          That's it! With just three simple steps, you can create and host your
          very own professional portfolio website using Profolio✨
        </em>
      </p>
    </div>
  );
};

export default Home;