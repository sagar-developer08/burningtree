import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const imaget =
  "https://marketplace.canva.com/EAFUdYqHyx0/1/0/1280w/canva-green-modern-customer-testimonials-instagram-post-p8RrhQOeAmc.jpg";
const image =
  "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.webp";

const companies = [
  {
    name: "Company A",
    image:
      "https://res.cloudinary.com/dsj9t6adh/image/upload/v1687106120/buringTree/HDFC_logo_cjlf2d.svg",
  },
  {
    name: "Company B",
    image:
      "https://www.pngkit.com/png/full/967-9673227_cute-ideas-to-make-your-home-mehendi-function.png",
  },
  {
    name: "Company C",
    image:
      "https://res.cloudinary.com/dsj9t6adh/image/upload/v1687106188/buringTree/logo_trrsgh.png",
  },
  {
    name: "Company D",
    image:
      "https://bookmyinteriorlead.com/wp-content/uploads/2020/08/300-X-110-LOGO-FOR-WHITE-BACKGROUND.png",
  },
  {
    name: "Company E",
    image:
      "https://images.squarespace-cdn.com/content/v1/5d49e8c18ba68c00018ad207/1596589507890-LOJSBWNTQZY0IH779E97/Care+Connect+-+Logo+w+Tag+CMYK.png",
  },
  {
    name: "Company F",
    image:
      "https://res.cloudinary.com/dsj9t6adh/image/upload/v1687107071/buringTree/logo-ukraine-5e86fcda835fb7fe833446766436041f_s7pbt1.svg",
  },
  {
    name: "Company G",
    image: "https://img1.digitallocker.gov.in/assets/img/digiLocker-Large.png",
  },
  {
    name: "Company H",
    image:
      "https://res.cloudinary.com/dsj9t6adh/image/upload/v1687106841/buringTree/primary_gaide4.svg",
  },
];

function P1() {
  // reload on mediaQuery
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize() {
    const width = window.innerWidth;
    if (width <= 300 || width <= 600 || width <= 900) {
      window.location.reload(); // Reload the page
    }
  }
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:200,400,700&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
              body {
                background: linear-gradient(90deg, #18181b, #27272a);
                color: #fff;
                font-family: "Poppins", sans-serif;
                font-weight: bold;
                text-align:center;
              }

              .card{
            margin:auto;
            text-align: justify;
            place-items: center;
            
              }

              .company-list {

          }

              .company-name {
                font-size: 36px;
                display: inline-block;
                font-weight: 450%;
                margin-top: 30px;
                text-align:center;
              }

              .logo {
            width: 80%;
            
          }

          
          .parent {
            width:60%;
            margin:auto;
            margin-top: 30px;
            margin-bottom: 30px;
            padding: 3%;
            background: #27272a;
            border: 1px solid #3f3f46;
            border-radius: 8%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-row-gap: 60px;
            grid-column-gap: 40px;
          } 
          @media screen and (max-width: 900px) {
            .logo {
              width: 100%;
              
            }
          }
          @media screen and (max-width: 600px) {
            .parent {
                width:90%;
                grid-row-gap: 30px;
                grid-column-gap: 25px;
                // margin-right:20%;
            }
              .logo {
                width: 90%;
                
              }
           
          }
          @media screen and (max-width: 300px) {
              .parent {
                width:90%;
                grid-row-gap: 20px;
                grid-column-gap: 15px;
              }
              .logo {
                margin:auto;
                width: 100%;
                
              }
           
          }
            `}
        </style>
      </Helmet>
      <div className="company-list">
        <h1 className="company-name">Our Clients</h1>
        <div className="parent">
          {companies.map((company, index) => (
            <div className="card" key={index}>
              <img className="logo" src={company.image} alt={company.name} />
              {/* <p className="company-name">{company.name}</p> */}
            </div>
          ))}
        </div>
        <hr id="hor_line"></hr>
      </div>
    </>
  );
}

export default P1;