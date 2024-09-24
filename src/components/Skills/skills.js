import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>I am a skilled and passionate web designer with experience in creating visually appealing and user friendly website. i have a strogn understanding of design and a keen eye for detail. I am proficient in html, css and javascript,as well as design software Adobe photoshp and illustrator.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} className='skillBarImg' alt='UIDesign' />
                <div className='skillBarText'>
                    <h2>UI/UX design</h2>
                    <p>This is a demo text, you can write your own content here</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} className='skillBarImg' alt='WebDesign' />
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>This demo text can be changed while designing a production ready website</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} className='skillBarImg' alt='AppDesign' />
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>you can write text related to mobile app development</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills