import { ThemeProvider, createTheme } from '@mui/material/styles';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import ContactMe from '@/components/ContactMe';
import Footer from '@/components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Custom primary color
    },
    secondary: {
      main: '#f50057', // Custom secondary color
    },
    background: {
      default: '#31363B',
    },
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
    h2: {
      fontFamily: 'Slabo 27px, serif',
    },
    h3: {
      fontFamily: 'Slabo 27px, serif',
    },
  },
});

export default function Home(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>Owen Edwards</title>
        </Head>
        <Navbar />
        <main>
          <section id="about-me" className="py-10 section-padding">
            <AboutMe />
          </section>
          <section id="experience" className="py-10 section-padding">
            <Experience />
          </section>
          <section id="projects" className="py-10 section-padding">
            <Projects />
          </section>
          <section id="skills" className="py-10 section-padding">
            <Skills />
          </section>
          <section id="education" className="py-10 section-padding">
            <Education />
          </section>
          <section id="testimonials" className="py-10 section-padding">
            <Testimonials />
          </section>
          <section id="contact" className="py-10 section-padding">
            <ContactMe />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
