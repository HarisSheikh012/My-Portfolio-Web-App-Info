import React from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';


function Portfolio() {
  return (
    <>
     <section className="section section-portfolio" id="portfolio-section">
        <div className="container">
            <h2 className="common-heading">Latest Works</h2>
            <p> Hard work must be the common factor for
                anyone seeking to be successful, regardless of talent.
                No amount of talent can supersede hard work.
                If you have natural ability, don’t expect it
                to automatically generate success.
            </p>
        </div>
        <div className="p-btns">
            <div className="btn p-btn" data-btn-num="1">Website</div>
            <div className="btn p-btn" data-btn-num="2">YouTube</div>
            <div className="btn p-btn" data-btn-num="3">Design</div>
        </div>
        <div className="container grid grid-three-column portfolio-images">
            <div className="img-overlay p-btn--1">
                <img src="Images/7.jpg" alt="my works" />
                <div className="overlay">
                    <Link to="https://charcounter.com/en/" target="_blank" className="common-heading">Project 1</Link>
                </div>
            </div>
            <div className="img-overlay p-btn--3">
                <img src="Images/8.jpg" alt="my works" />
                <div className="overlay">
                    <Link to="" target="_blank" className="common-heading">Project 2</Link>
                </div>
            </div>
            <div className="img-overlay p-btn--1">
                <img src="Images/1.jpg" alt="my works" />
                <div className="overlay">
                    <Link to="" target="_blank" className="common-heading">Project 3</Link>
                </div>
            </div>
            <div className="img-overlay p-btn--1 p-btn--2">
                <img src="Images/3.jpg" alt="my works" />
                <div className="overlay">
                    <Link to="" target="_blank" className="common-heading">Project 4</Link>
                </div>
            </div>
            <div className="img-overlay p-btn--2">
                <img src="Images/5.jpg" alt="my works" />
                <div className="overlay">
                    <Link to="" target="_blank" className="common-heading">Project 5</Link>
                </div>
            </div>
            <div className="img-overlay p-btn--1">
                <img src="Images/6.jpg" alt="my works" />
                <div className="overlay">
                    <Link to="" target="_blank" className="common-heading">Project 6</Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Portfolio;