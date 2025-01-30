import { Box, Container, Typography, Stack } from '@mui/material';
import Intro from './Intro';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function AboutMe(): JSX.Element {
  return (
    <Container component="section" sx={{ my: 5 }}>
      <Intro />
      <Typography variant="h2" component="h2" align="center" gutterBottom>
        About Me
      </Typography>
      <Box sx={{ backgroundColor: '#f5f5f5', p: 3, borderRadius: 2 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <PersonIcon sx={{ fontSize: 32 }} />
          <Typography variant="body1">
            I&apos;m currently a senior pursuing a <strong>Bachelor of Science in Computer Science</strong> at the <a href="https://ceas.uc.edu/about.html" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>University of Cincinnati, College of Engineering and Applied Science</a>, where I&apos;m set to graduate in May 2025.
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 2 }}>
          <WorkIcon sx={{ fontSize: 32 }} />
          <Typography variant="body1">
            I&apos;ve had <strong>two previous software engineering internships</strong>. Most recently, I worked at <a href="https://www.paycor.com/company/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>Paycor</a> as a Software Engineer Co-op, where I developed backend services using <strong>Java</strong> with <strong>Spring Boot</strong> and <strong>Python</strong> with <strong>Flask</strong>, while building frontend features with <strong>Angular</strong> and <strong>TypeScript</strong>. I contributed to optimizing database performance, managing knowledge bases, and enhancing security measures, while also getting hands-on experience with <strong>Docker containerization</strong> and <strong>Agile methodologies</strong> from May 2024 - August 2024. Previously, I worked for <a href="https://www.sw.siemens.com/en-US/about-us/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>Siemens Digital Industries Software</a> as an NX Software Development Co-op, working with <strong>C++</strong> and <strong>Python</strong> where I authored change packages, addressed problem reports, and collaborated on functional specifications from January 2023 - December 2023.
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 2 }}>
          <SchoolIcon sx={{ fontSize: 32 }} />
          <Typography variant="body1">
          I have had <strong>two previous Teaching Assistant positions</strong> at the University of Cincinnati. I most recently worked as a Computer Science Teaching Assistant, where I taught <strong>Linux</strong> and <strong>C</strong> to students in the Introduction to Computer Systems course from August 2024 to December 2024. Before that, I served as an Engineering Teaching Assistant, mentoring first-year students and helping them navigate the basics of programming and engineering principles with <strong>Python</strong> from August 2022 - December 2022.
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 2 }}>
          <CodeIcon sx={{ fontSize: 32 }} />
          <Typography variant="body1">
            In addition to my professional experience, I&apos;ve worked on several projects both for coursework and personal interest. These include developing a web-based <a href="https://github.com/OwenAEdwards/BulletinHub" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>bulletin board application</a> with a <strong>React.js</strong> frontend and <strong>Go</strong> backend utilizing <strong>WebSockets</strong> for real-time updates and <strong>MongoDB</strong> for database, a <a href="https://github.com/OwenAEdwards/RideShare.Android" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>long-distance ride share app</a> for <strong>Android</strong> with <strong>Kotlin</strong> using <strong>Jetpack Compose</strong>, and a full-stack <a href="https://github.com/OwenAEdwards/E-Commerce-Website" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>e-commerce application</a> using <strong>React.js</strong> and <strong>Java</strong> with <strong>Spring Boot</strong>. I&apos;ve also led a team of cybersecurity interns during a <a href="https://drive.google.com/file/d/1K1n_HwN1QRgY80sh8pnmHa_edHoF_K7I/view?usp=share_link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>virtual apprenticeship</a>, where we focused on enhancing our knowledge of cybersecurity frameworks and incident response methodologies. I have my <a href="https://drive.google.com/file/d/1jkHRvVPzmDt0azhr6c4aQTtoGD1vzHcT/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>Microsoft Certified: Azure Fundamentals</a> certification and I&apos;m looking into getting my <strong>AWS Certified Solutions Architect - Associate</strong> certification.
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 2 }}>
          <FavoriteIcon sx={{ fontSize: 32 }} />
          <Typography variant="body1">
            Outside of work and school, I enjoy spending time in the kitchen cooking, playing guitar, and lifting weights at the gym. I&apos;m also a cat person and love spending time with my feline companion. I&apos;m based in Cincinnati but my hometown is Hudson, Ohio.
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
}
