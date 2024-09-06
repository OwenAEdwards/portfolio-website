import Image from 'next/image';
import { Box, Container, Typography, List, ListItem, ListItemText, Card, CardMedia, CardContent, Button } from '@mui/material';
import { styled } from '@mui/system';

// Project Card styling with hover effect
const ProjectCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  flex: '1 1 calc(33.333% - 16px)', // For responsive cards
  transition: 'transform 0.3s ease, background-color 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.grey[100], // Light grey background on hover
    transform: 'scale(1.05)', // Slight zoom on hover
  },
  [theme.breakpoints.down('sm')]: {
    flex: '1 1 calc(100% - 16px)', // Full width on small screens
  },
}));

// Custom component for skill icon + name
const SkillIcon = ({ iconSrc, label }: { iconSrc: string, label: string }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 2, marginBottom: 1 }}>
    <Image src={iconSrc} alt={label} width={24} height={24} />
    <Typography variant="body2" sx={{ marginLeft: 1 }}>
      {label}
    </Typography>
  </Box>
);

export default function Projects(): JSX.Element {
  // Project data
  const projects = [
    {
      title: 'Long-Distance Ride Share Mobile Application',
      description: [
        'Developed a long-distance ride share app for Android using Kotlin (Gradle) with Jetpack Compose, Material 3, and Retrofit.',
        'Designed an ASP.NET Core backend supported by Microsoft SQL Server and MongoDB for data storage.',
        'Utilized Retrofit for API communication and Kotlin Coroutines for asynchronous programming.',
        'Integrated location services and real-time data handling to improve user experience.'
      ],
      skills: [
        { name: 'Kotlin', icon: 'icons/kotlin-original.svg' },
        { name: 'Jetpack Compose', icon: 'icons/jetpackcompose-original.svg' },
        { name: 'Android', icon: 'icons/android-original.svg' },
        { name: 'C#', icon: 'icons/csharp-original.svg' },
        { name: 'ASP.NET Core', icon: 'icons/dot-net-original.svg' },
        { name: 'SQL Server', icon: 'icons/microsoftsqlserver-original.svg' },
        { name: 'MongoDB', icon: 'icons/mongodb-original.svg' }
      ],
      imageUrl: 'ride-share-app-project.png',
      link: '#', // No link or placeholder for the "Work In Progress" status
      status: 'Work In Progress' // Status for displaying on the button
    },
    {
      title: 'Portfolio Website',
      description: [
        'Developed a personal portfolio website using React for component-based UI development and Material UI for responsive, modern styling across the site.',
        'Utilized TypeScript for type-safe coding practices, enhancing maintainability and debugging.',
        'Leveraged Next.js for server-side rendering and optimized performance, while React Router managed routing between pages seamlessly.',
        'Deployed the website using Vercel, ensuring reliable hosting and continuous integration with GitHub for automatic updates.'
      ],
      skills: [
        { name: 'React', icon: 'icons/react-original.svg' },
        { name: 'Material UI', icon: 'icons/materialui-original.svg' },
        { name: 'TypeScript', icon: 'icons/typescript-original.svg' },
        { name: 'Node.js', icon: 'icons/nodejs-original.svg' },
        { name: 'Next.js', icon: 'icons/nextjs-original.svg' },
        { name: 'React Router', icon: 'icons/reactrouter-original.svg' },
        { name: 'Vercel', icon: 'icons/vercel-original.svg' }
      ],
      imageUrl: 'portfolio-website-new-project.png',
      link: 'https://owen-edwards.vercel.app/',
    },
    {
      title: 'E-Commerce Application',
      description: [
        'Developed a full-stack e-commerce application using Java Spring Boot with Maven dependencies and React.js with Material UI.',
        'Designed and implemented a PostgreSQL database schema using an Entity-Relationship (ER) Diagram for efficient data organization.',
        'Utilized Object-Relational Mapping (ORM) with Hibernate/JPA for seamless interaction between the Java backend and the PostgreSQL database.',
        'Designed and utilized RESTful APIs for CRUD operations (Create, Read, Update, Delete).',
        'Built a user-friendly frontend using React components and hooks, ensuring a dynamic and responsive user experience with Material UI.'
      ],
      skills: [
        { name: 'Java', icon: 'icons/java-original.svg' },
        { name: 'Spring Boot', icon: 'icons/spring-original.svg' },
        { name: 'PostgreSQL', icon: 'icons/postgresql-original.svg' },
        { name: 'JavaScript', icon: 'icons/javascript-original.svg' },
        { name: 'React', icon: 'icons/react-original.svg' },
        { name: 'Material UI', icon: 'icons/materialui-original.svg' }
      ],
      imageUrl: 'e-commerce-project.png',
      link: 'https://github.com/OwenAEdwards/E-Commerce-Website'
    },
    {
      title: 'Portfolio Website (Old)',
      description: [
        'Applied basics of front-end web development to develop static portfolio website in Visual Studio Code.',
        'Displayed resume and contact information using HTML and CSS.',
        'Improved website responsiveness to mobile with CSS media queries and Bootstrap framework.',
        'Committed website to GitHub Pages static web hosting service through Git version control.'
      ],
      skills: [
        { name: 'HTML', icon: 'icons/html5-original.svg' },
        { name: 'CSS', icon: 'icons/css3-original.svg' },
        { name: 'Bootstrap', icon: 'icons/bootstrap-original.svg' },
        { name: 'GitHub Pages', icon: 'icons/github-original.svg' }
      ],
      imageUrl: 'portfolio-website-old-project.png',
      link: 'https://owenaedwards.github.io/'
    },
    {
      title: 'Autonomous Product Retrieval (APR) System',
      description: [
        'Employed the Engineering Design Process to create an Autonomous Product Retrieval (APR) LEGO robot with an EV3 operating system.',
        'Interfaced with a team of engineers in the communicative teaming process.',
        'Analyzed data collected from a Python script using VBA macros and Excel descriptive statistics.',
        'Recorded a report documenting project management and technical information.'
      ],
      skills: [
        { name: 'Python', icon: 'icons/python-original.svg' }
      ],
      imageUrl: 'ened-robot-project.png',
      link: 'https://docs.google.com/document/d/1ZWPE3hKZEWG844dFzusyR1L-3IKp48DbRJTyuRsQ-Vw/edit?usp=sharing'
    }
  ];

  return (
    <Container component="section" sx={{ my: 5 }}>
      <Typography variant="h2" component="h2" align="center" gutterBottom>
        Projects
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 2 }}>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <CardMedia
              component="img"
              height="140"
              image={project.imageUrl}
              alt={project.title}
            />
            <CardContent>
              <Typography variant="h5" component="h3">
                {project.title}
              </Typography>
              <List>
                {project.description.map((point, i) => (
                  <ListItem key={i} disableGutters>
                    <ListItemText primary={point} />
                  </ListItem>
                ))}
              </List>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
                {project.skills.map((skill, i) => (
                  <SkillIcon key={i} iconSrc={skill.icon} label={skill.name} />
                ))}
              </Box>
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              href={project.link}
              target="_blank"
              sx={{ mt: 2 }}
              disabled={project.status === 'Work In Progress'}
            >
              {project.status || 'View Project'}
            </Button>
          </ProjectCard>
        ))}
      </Box>
    </Container>
  );
}
