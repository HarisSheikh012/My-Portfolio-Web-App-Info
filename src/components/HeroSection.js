import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';


function HeroSection(props) {
  return (
    <>
    {/* Main Hero Section */}
         <div className="section-hero section">
            <div className="container grid grid-two-column">
                <div className="section-hero-data">
                    <p className="hero-top-data">This is me</p>
                    <h1 className="hero-heading">{props.name}</h1>
                    <p className="hero-para">{props.para}</p>
                    <div><Link to="/contact" className="btn hireme-btn">Hi there</Link></div>
                </div>
                <div className="section-hero-image">
                    <img src={props.image} width="340px" alt="pic" className="hero-img" />
                </div>
            </div>
        </div>
         {/* Bio Data Section */}
        <section className="section-biodata section">
        <div className="container grid grid-two-column">
            <div className="bio-image">
                <img src="Images/ee.jpg" alt="mybiodata" />
            </div>
            <div className="bio-data">
                <h2 className="common-heading">my bio data</h2>
                <p className="bio-para">This subject interests me because I am always using computers and have
                    been using them from such a young age and I own many different computer
                    interfaces from desktop computers to tablets and I enjoy using them.<br />
                    I think I’m suitable for this course because I have a passion for computer programming.
                </p>
                <div className="bio-data-stats">
                    <div className="bio-stats">
                        <h3>Design</h3>
                        <div className="bio-progress-bar">
                            <span>60%</span>
                        </div>
                    </div>
                    <div className="bio-stats">
                        <h3>HTML</h3>
                        <div className="bio-progress-bar bio-progress-2">
                            <span>90%</span>
                        </div>
                    </div>
                    <div className="bio-stats">
                        <h3>CSS</h3>
                        <div className="bio-progress-bar bio-progress-3">
                            <span>75%</span>
                        </div>
                    </div>
                    <div className="bio-stats">
                        <h3>JavaScript</h3>
                        <div className="bio-progress-bar bio-progress-4">
                            <span>70%</span>
                        </div>
                    </div>
                    <div className="bio-stats">
                        <h3>Bootstrap</h3>
                        <div className="bio-progress-bar bio-progress-5">
                            <span>75%</span>
                        </div>
                    </div>
                    <div className="bio-stats">
                        <h3>C#</h3>
                        <div className="bio-progress-bar bio-progress-6">
                            <span>65%</span>
                        </div>
                    </div>
                    <div className="bio-stats">
                        <h3>JQuery</h3>
                        <div className="bio-progress-bar bio-progress-7">
                            <span>60%</span>
                        </div>
                    </div>
                    <div className="bio-stats">
                        <h3>SQL</h3>
                        <div className="bio-progress-bar bio-progress-8">
                            <span>75%</span>
                        </div>
                    </div>
                    <div className="bio-stats">
                        <h3>React js</h3>
                        <div className="bio-progress-bar bio-progress-9">
                            <span>60%</span>
                        </div>
                    </div>
                    <div className="bio-stats">
                        <h3>Node js</h3>
                        <div className="bio-progress-bar bio-progress-10">
                            <span>50%</span>
                        </div>
                    </div>
                    <div className="bio-stats">
                        <h3>Express js</h3>
                        <div className="bio-progress-bar bio-progress-11">
                            <span>55%</span>
                        </div>
                    </div>
                    <div className="bio-stats">
                        <h3>Nest js</h3>
                        <div className="bio-progress-bar bio-progress-12">
                            <span>65%</span>
                        </div>
                    </div>
                    <div className="bio-stats">
                        <h3>Type Script</h3>
                        <div className="bio-progress-bar bio-progress-13">
                            <span>45%</span>
                        </div>
                    </div>
                </div>
                <div className="bio-data-btn">
                    <Link to="" className="btn">Download</Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HeroSection;