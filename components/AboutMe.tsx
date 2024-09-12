import { Box, Container, Typography } from '@mui/material';
import Intro from './Intro';

export default function AboutMe(): JSX.Element {
  return (
    <Container component="section" sx={{ my: 5 }}>
      <Intro /> { /* Intro component here */ }
      <Typography variant="h2" component="h2" align="center" gutterBottom>
        About Me
      </Typography>
      <Box sx={{ backgroundColor: '#BDC3C7', p: 3, borderRadius: 2 }}>
        <Typography variant="body1">
          I&apos;m currently a fourth-year Computer Science student at the University of Cincinnati, College of Engineering and Applied Science, where I&apos;m set to graduate in Spring 2025.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Most recently, I worked at Paycor as a Software Engineer Co-op, working in <strong>Java</strong> with <strong>Spring Boot</strong> and <strong>Python</strong> with <strong>Flask</strong> on the backend and <strong>Angular</strong> with <strong>TypeScript</strong> on the frontend. I contributed to optimizing database performance, managing knowledge bases, and enhancing security measures, while also getting hands-on experience with <strong>Docker containerization</strong> and <strong>Agile methodologies</strong> from May 2024 - August 2024. Previously, I worked for Siemens Digital Industries Software as an NX Software Development Co-op, working with <strong>C++</strong> where I authored change packages, addressed problem reports, and collaborated on functional specifications from January 2023 - December 2023.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          I also worked as an Engineering Teaching Assistant at my university, working with <strong>Python</strong>, mentoring first-year students and helping them navigate the basics of programming and engineering principles from August 2022 - December 2022. Currently, I am a Computer Science Teaching Assistant teaching <strong>Linux</strong> and <strong>C</strong> to students in my computer science program for Introduction to Computer Systems from August 2024 - December 2024.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          In addition to my professional experience, I&apos;ve worked on several projects for classes and for fun, including developing a long-distance ride share app for <strong>Android</strong> with <strong>Kotlin</strong> using <strong>Jetpack Compose</strong> and <strong>C#</strong> using <strong>ASP.NET</strong> and a full-stack e-commerce application using <strong>React.js</strong> and <strong>Java</strong> with <strong>Spring Boot</strong>. I&apos;ve also led a team of cybersecurity interns during a virtual apprenticeship, where we focused on enhancing our knowledge of cybersecurity frameworks and incident response methodologies. I have my <strong>Microsoft Certified: Azure Fundamentals</strong> certification and I&apos;m looking into getting my <strong>AWS Certified Solutions Architect - Associate</strong> certification.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Outside of work and school, I enjoy spending time in the kitchen cooking, playing guitar, and lifting weights at the gym. I&apos;m also a cat person and love spending time with my feline companion. I&apos;m based in Cincinnati but my hometown is Hudson, Ohio.
        </Typography>
      </Box>
    </Container>
  );
}
