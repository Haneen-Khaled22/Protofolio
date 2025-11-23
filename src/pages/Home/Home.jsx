import React from 'react'
import ToggleTheme from '../../components/Theme/ToggleTheme'
import { StarBackground } from '../../components/StarBackground/StarBackground'
import { Navbar } from '../NavBar/NavBar'
import { HeroSection } from '../../components/HeroSection/HeroSection'
import { AboutSection } from '../../components/AboutMe/AboutMe'
import Skills from '../../components/Skills/Skills'
import { Projects } from '../../components/Projects/Projects'
import { ContactSection } from '../../components/Contact/Contact'
import { Footer } from '../../components/Footer/Footer'


function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ToggleTheme/>
            <StarBackground/>
            <Navbar/>
            <HeroSection/>
            <AboutSection/>
            <Skills/>
            <Projects/>
            <ContactSection/>
            <Footer/>

        </div>
    )
}

export default Home
