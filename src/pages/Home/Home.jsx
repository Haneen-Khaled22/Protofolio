import React from 'react'
import ToggleTheme from '../../components/Theme/ToggleTheme'
import { StarBackground } from '../../components/StarBackground/StarBackground'
import { Navbar } from '../NavBar/NavBar'
import { HeroSection } from '../../components/HeroSection/HeroSection'
import { AboutSection } from '../../components/AboutMe/AboutMe'
import Skills from '../../components/Skills/Skills'

function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ToggleTheme/>
            <StarBackground/>
            <Navbar/>
            <HeroSection/>
            <AboutSection/>
            <Skills/>

        </div>
    )
}

export default Home
