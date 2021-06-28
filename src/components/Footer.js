import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer() {

    return (
        <>
        <div className="main_div">
            <div style={{display:"flex",justifyContent:"space-around",paddingTop:"50px",color:"white"}}>
                <div>
                    <h4>45+</h4>
                    <hp>TEAM MEMBERs</hp>
                </div>
                <div>
                <h4>25+</h4>
                <p>TOTAL PRODUCTS</p>
                </div>
                <div>
                <h4>800,000+</h4>
                <p>HAPPY USERS</p>
                </div>
                <div>
                <h4>24K</h4>
                <p>HAPPY MOMENTS</p>
                </div>
            </div>
         </div> 


         <div style={{display:"flex",justifyContent:"space-around",marginTop:"30px"}}>
             <div>
                 <h1>TechloSet</h1>
             </div>
             <div>
                 <p>© Copyright 2020.Powered by Techloset</p>
             </div>
             <div>
                 <FacebookIcon style={{color:"blue",fontSize:"35px",borderRadius:"20%"}}/>
                 <GitHubIcon style={{color:"black",fontSize:"35px",borderRadius:"20%"}}/>
                 <LinkedInIcon style={{color:"blue",fontSize:"35px",borderRadius:"20%"}}/>
                 <InstagramIcon style={{color:"red",fontSize:"35px",borderRadius:"20%"}}/>
            </div>
        </div>  
        </>
    )
}
