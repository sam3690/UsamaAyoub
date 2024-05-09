// import '@styles/globals.css';
import { Children } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import "../styles/hamburger.css";
import  './globals.css';


export const metadata = {
    title: "Usama Ayoub",
    description: "My portfolio",
}

const layout = ({children}) => {
  return (
    <html lang="en">
        <head>
            <link rel="icon" href="assets/me.svg" />
        </head>
        <body>
            <div className="main">
                <div className='gradient'/>
            </div>

            <main className="app no-scrollbar">
                <Nav />
                <Hero />
                <Services />
                <Projects/>
                <Contact />
            {children}
            </main  >
        </body>
    </html>
  )
}

export default layout