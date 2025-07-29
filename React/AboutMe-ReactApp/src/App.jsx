// import { useState } from 'react'
import './App.css'
import DescriptionSection from './DescriptionSection'

function App() {
  return (
    <>
      <header className="learned-bg-banner">
        <nav className="main-navbar">
          <img
            src="/AH Logo.png"
            alt="tech hub logo"
            className="logo" />
          <ul>
            <li><a href="#index-html">Home</a></li>
            <li><a href="#Services-html">Services</a></li>
            <li><a href="#Contact-html">Contact</a></li>
            <li><a href="#Learned-html">Learned</a></li>
          </ul>
        </nav>
        <section className="hero-section">
          <h1>Hi, I'm Aya</h1>
          <p>
            A curious soul — exploring the universe one line of code at a time.
          </p>
          <a href="#about-main">
            <button className="join-button">Read More</button>
          </a>
        </section>
      </header>
      <main id="about-main">
        <DescriptionSection 
          nameOfClass={"about-description"} 
          hContent={"Who Am I?"} 
          textBoxContent={
            <>
              <p>
                I’m a self-driven learner who loves turning ideas into real experiences through code.
                From writing HTML to exploring the depths of JavaScript, I enjoy the process of learning, failing, and growing.
              </p>
              <blockquote>
                "I don't just learn to code — I code to understand."
              </blockquote>
            </>
          }
        />

        <section className="about-description">
          <h2>My Hobbies</h2>
          <div className="text-box">
            <p>🎨 Digital art & illustration</p>
            <p>🌍 Studying languages & cultures</p>
            <p>🪐 Exploring space documentaries and astronomy facts</p>
            <p>📚 Writing thoughts and translating deep topics</p>
          </div>
        </section>

        
        <section className="about-description">
          <h2>My Tech skills</h2>
          <div className="text-box">
            <strong className='strong-title'>Frontend Development:</strong>
            <ol className='unordered-list'>
              <li>HTML5, CSS3 (Flexbox, Grid)</li>
              <li>JavaScript (ES6+)</li>
              <li>React (Basics, Hooks, Props)</li>
            </ol>

            <strong className='strong-title' >Tools:</strong>
            <ol className='unordered-list'>
              <li>Vite, Git, GitHub</li>
              <li>VS Code, DevTools</li>
            </ol>

            <strong className='strong-title'>Problem Solving:</strong>
            <ol className='unordered-list'>
              <li>Working with Arrays and 2D Arrays</li>
              <li>Manipulating Objects and Maps</li>
              <li>Algorithmic thinking & pattern recognition</li>
            </ol>
          </div>
        </section>

        <section className="about-description">
          <h2>What I’ve Learned So Far</h2>
          <div className="text-box">

            <p>Through the Tech Hub sessions, I’ve been able to improve both technically and personally.</p>

            <ol style={{textAlign: 'start'}}>
              <li> DOM manipulation and dynamic content rendering</li>
              <li> Using <code>useState</code> and <code>useEffect</code> in React</li>
              <li> Understanding context and props flow</li>
              <li> Practicing JavaScript with hands-on challenges</li>
            </ol>

            <p>You can check some of my practice solutions on <a className='green-link' href="https://github.com/aya8merai/Tech-Hub-2025-Fullstack-Bootcamp/">my GitHub</a>.</p>

          </div>
        </section>

<section className="about-description">          
            <h2>Why I Love Coding </h2>
          <div className="text-box">
            <p>
              To me, coding is like drawing with logic. It lets me express ideas, build things that live on the web, 
              and solve real problems.
              Whether it’s creating layouts, debugging functions, or exploring new tools — I always find joy in the process.♡
            </p>
          </div>
        </section>
        


        {/* <section className="images-container">
          
          
        </section> */}
      </main>

      <footer>
        <nav className="navbar">
          <img
            src="/AH Logo.png"
            alt="tech hub logo"
            className="logo" />
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="Services.html">Services</a></li>
            <li><a href="Contact.html">Contact</a></li>
            <li><a href="Learned.html">Learned</a></li>
          </ul>
        </nav>
        <p id="copyrights">&copy; 2025 - A.H TECH HUB.</p>
      </footer>
    </>
  )
}

export default App
