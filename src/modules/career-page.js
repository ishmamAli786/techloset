import React from "react";
import Navbar from ".././components/Navbar";
import "./career-page.css";
import tech from ".././assets/tech.png";
import OrientationSection from ".././components/OrientationSection";
import TestingGrid from "../components/materialUiGrid";
import BootGrid from ".././components/BootStrapGrid";
import ImageGallerySection from ".././components/ImageGallerySection";
import JobApply from ".././components/JobApplySection";
import Footer from ".././components/Footer";
import Button from '@material-ui/core/Button';

export default function CareerPage() {
  return (
    <>
      <div className="try">
        <div>
          <Navbar />
          <div style={{ display: "flex" }}>
            <div className="leftSide">
              <h4>Join Us</h4>
              <h1 style={{fontWeight:"bold",fontSize:"80px"}}>TechloSet</h1>
              <p>
                Work at the most dynamic agency & unlock your true <br></br>potential
              </p>
              <Button variant="outlined" color="primary" style={{borderRadius:"35px",fontWeight:"bold",fontSize:"20px",color:"white",border:"3px solid white",paddingLeft:"35px"}}>
                View Openings
              </Button><br></br>
            </div>
            <div className="rightSide">
              <img src={tech}></img>
            </div>
          </div>
        </div>
      </div>

      {/*  orientation section */}
      <TestingGrid/>
      <ImageGallerySection />
      <JobApply />
      <Footer />
    </>
  );
}
