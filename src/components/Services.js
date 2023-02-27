import React from 'react';
import './Services.css';

function Services() {
  return (
    <>
    <section className="section section-services">
        <div className="container">
            <h2 className="common-heading">Services Offers</h2>
            <p>
                We provide high-quality IT services for clients globally,
                offering custom software development,
                thorough quality assurance, as well as long-term support
                and maintenance.
            </p>
        </div>
        <div className="container grid grid-three-column">
            <div className="service-box">
                <ion-icon name="desktop-sharp" className="service-icon"></ion-icon>
                <h3>Web Design</h3>
                <p>
                    "It is not because things are difficult that we do not dare;
                    it is because we do not dare that they are difficult."
                </p>
            </div>
            <div className="service-box">
                <ion-icon name="logo-react" className="service-icon"></ion-icon>
                <h3>Web development</h3>
                <p>
                    "It is not because things are difficult that we do not dare;
                    it is because we do not dare that they are difficult."
                </p>
            </div>
            <div className="service-box">
                <ion-icon name="camera-outline" className="service-icon"></ion-icon>
                <h3>photography</h3>
                <p>
                    "It is not because things are difficult that we do not dare;
                    it is because we do not dare that they are difficult."
                </p>
            </div>
            <div className="service-box">
                <ion-icon name="phone-portrait-sharp" className="service-icon"></ion-icon>
                <h3>mobile apps</h3>
                <p>
                    "It is not because things are difficult that we do not dare;
                    it is because we do not dare that they are difficult."
                </p>
            </div>
            <div className="service-box">
                <ion-icon name="globe-sharp" className="service-icon"></ion-icon>
                <h3>apps interface</h3>
                <p>
                    "It is not because things are difficult that we do not dare;
                    it is because we do not dare that they are difficult."
                </p>
            </div>
            <div className="service-box">
                <ion-icon name="images-sharp" className="service-icon"></ion-icon>
                <h3>graphic Design</h3>
                <p>
                    "It is not because things are difficult that we do not dare;
                    it is because we do not dare that they are difficult."
                </p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Services;