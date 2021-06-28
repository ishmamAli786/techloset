import React from 'react';
import './ImageGallerySection.css';
import tech from '.././assets/tech.png';
import tech1 from '.././assets/tech1.jpg';
import tech2 from '.././assets/tech2.jpg';
import tech3 from '.././assets/tech3.jpg';
import tech4 from '.././assets/tech4.jpg';
import tech5 from '.././assets/tech5.jpg';



export default function ImageGallerySection() {
    return (
        <>
        <div className="main">
            <div style={{float:"right"}}>
                <img src={tech1} width="200px" height="200" style={{marginRight:"60px"}}></img>
            </div>
            <div style={{float:"right"}}>
                <img src={tech2} width="300px" height="500px" style={{marginTop:"300px",marginRight:"-100px"}}></img>
            </div>


            <div>
                <img src={tech3} width="200px" height="200px" style={{marginLeft:"450px",marginTop:"150px"}}></img>
            </div>

            <div>
                <img src={tech5} width="400px" height="500px" style={{marginLeft:"400px",marginBottom:"-300px",marginTop:"50px"}}></img>
            </div>
            </div>
        </>
    )
}
