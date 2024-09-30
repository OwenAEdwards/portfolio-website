import { Box, Button, Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';

// Custom colored list item for skills
const ColoredListItem = styled(ListItem)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.common.white,
  borderRadius: '5px',
  marginBottom: theme.spacing(1),
  padding: theme.spacing(1),
  width: 'auto',
  display: 'inline-flex',
  marginRight: theme.spacing(1),
}));

// Custom list item for bullet points
const BulletPointItem = styled(ListItem)(({ theme }) => ({
  display: 'list-item',
  listStyleType: 'disc',
  paddingLeft: theme.spacing(2),
  marginLeft: theme.spacing(2), // Additional left margin for better alignment
  marginBottom: theme.spacing(2), // Add spacing between bullet points
  width: '100%', // Ensures the bullet point spans the entire width of the container
  padding: 0, // Avoid extra padding that can misalign bullets
}));

// Experience Box with hover effect
const ExperienceBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: theme.spacing(4),
  padding: theme.spacing(3), // Increased padding here
  transition: 'transform 0.3s ease, background-color 0.3s ease, color 0.3s ease',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#f5f5f5',
  '&:hover': {
    backgroundColor: '#4A6376',
    color: 'white',
    transform: 'scale(1.05)', // Add scale effect
    '& .MuiTypography-root': { // Specifically target Typography components
      color: 'white', // Explicitly change the color to white on hover
    },
  },
}));

export default function Experience(): JSX.Element {
  return (
    <Container component="section" sx={{ my: 5 }}>
      <Typography variant="h2" component="h2" align="center" gutterBottom>
        Experience
      </Typography>

      {/* Computer Science Teaching Assistant */}
      <ExperienceBox>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          {/* Logo Placeholder */}
          <Box
            component="img"
            src="/uc-ceas-logo.jpg"
            alt="University of Cincinnati, College of Engineering and Applied Science Logo"
            sx={{ width: '50px', height: '50px', mr: 2 }}
          />
          <Box>
            <Typography variant="h5" component="h3">
              Computer Science Teaching Assistant
            </Typography>
            <Typography variant="h6" component="p">
              University of Cincinnati, College of Engineering and Applied Science &mdash; Department of Computer Science
            </Typography>
          </Box>
        </Box>

        <Typography variant="body2" color="textSecondary">
          August 2024 &mdash; PRESENT
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Responsibilities:
          </Typography>
          <List>
            <BulletPointItem>
              Assisted 110 students by holding 20 hours of office hours and answering course-related emails each week.
            </BulletPointItem>
            <BulletPointItem>
              Provided guidance on C programming and debugging using GDB in Linux, helping students solve complex coding issues.
            </BulletPointItem>
            <BulletPointItem>
              Ran help sessions during office hours, teaching course material and troubleshooting student code.
            </BulletPointItem>
          </List>

          <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 2 }}>
            Key Skills:
          </Typography>
          <List sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <ColoredListItem>
              <Box
                component="img"
                src="/icons/linux-original.svg"
                alt="Linux Logo"
                sx={{ width: '20px', height: '20px', mr: 1 }}
              />
              <ListItemText primary="Linux" />
            </ColoredListItem>
            <ColoredListItem>
              <Box
                component="img"
                src="/icons/c-original.svg"
                alt="C Logo"
                sx={{ width: '20px', height: '20px', mr: 1 }}
              />
              <ListItemText primary="C" />
            </ColoredListItem>
          </List>
        </Box>
      </ExperienceBox>

      {/* Paycor Software Engineer Co-op */}
      <ExperienceBox>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box
            component="img"
            src="/paycor-logo.png"
            alt="Paycor Logo"
            sx={{ width: '50px', height: '50px', mr: 2 }}
          />
          <Box>
            <Typography variant="h5" component="h3">
              Software Engineer Co-op
            </Typography>
            <Typography variant="h6" component="p">
              Paycor
            </Typography>
          </Box>
        </Box>

        <Typography variant="body2" color="textSecondary">
          May 2024 &mdash; August 2024
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Responsibilities:
          </Typography>
          <List>
            <BulletPointItem>
              Enhanced offer letter processing by refining queries and transitioning to a reader database, resulting in a 60% average reduction in load on the writer database for ReadIOPS.
            </BulletPointItem>
            <BulletPointItem>
              Overhauled KnowledgeBase links post-migration from Salesforce to HelpJuice, replacing static HTML links with dynamic Angular variables for improved user experience.
            </BulletPointItem>
            <BulletPointItem>
              Containerized a Python Flask app with Docker, reducing setup time from 1 week to under 5 minutes. Simplified local development and improved team collaboration.
            </BulletPointItem>
            <BulletPointItem>
              Partnered with InfoSec to resolve a dozen critical security issues, including SSRF, CRFD, and open redirects.
            </BulletPointItem>
            <BulletPointItem>
              Optimized memory efficiency in the Recruiting app, improving performance by rethinking I/O operations using RESTful APIs.
            </BulletPointItem>
            <BulletPointItem>
              Contributed within an Agile team using Kanban Board on Azure DevOps, completing 3-week sprints with GitLab CI/CD pipelines.
            </BulletPointItem>
          </List>

          <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 2 }}>
            Key Skills:
          </Typography>
          <List sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <ColoredListItem>
              <Box
                  component="img"
                  src="/icons/java-original.svg"
                  alt="Java Logo"
                  sx={{ width: '20px', height: '20px', mr: 1 }}
              />
              <ListItemText primary="Java" />
            </ColoredListItem>
            <ColoredListItem>
              <Box
                  component="img"
                  src="/icons/typescript-original.svg"
                  alt="TypeScript Logo"
                  sx={{ width: '20px', height: '20px', mr: 1 }}
              />
              <ListItemText primary="TypeScript" />
            </ColoredListItem>
            <ColoredListItem>
              <Box
                  component="img"
                  src="/icons/docker-original.svg"
                  alt="Docker Logo"
                  sx={{ width: '20px', height: '20px', mr: 1 }}
              />
              <ListItemText primary="Docker" />
            </ColoredListItem>
            <ColoredListItem>
              <Box
                  component="img"
                  src="/icons/angular-original.svg"
                  alt="Angular Logo"
                  sx={{ width: '20px', height: '20px', mr: 1 }}
              />
              <ListItemText primary="Angular" />
            </ColoredListItem>
            <ColoredListItem>
              <Box
                  component="img"
                  src="/icons/spring-original.svg"
                  alt="Spring Boot Logo"
                  sx={{ width: '20px', height: '20px', mr: 1 }}
              />
              <ListItemText primary="Spring Boot" />
            </ColoredListItem>
            <ColoredListItem>
              <Box
                  component="img"
                  src="/icons/python-original.svg"
                  alt="Python Logo"
                  sx={{ width: '20px', height: '20px', mr: 1 }}
              />
              <ListItemText primary="Python" />
            </ColoredListItem>
            <ColoredListItem>
              <Box
                  component="img"
                  src="/icons/flask-original.svg"
                  alt="Flask Logo"
                  sx={{ width: '20px', height: '20px', mr: 1 }}
              />
              <ListItemText primary="Flask" />
            </ColoredListItem>
          </List>
        </Box>
      </ExperienceBox>

      {/* Siemens NX Software Development Co-op */}
      <ExperienceBox>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box
            component="img"
            src="/siemens-logo.jpg"
            alt="Siemens Logo"
            sx={{ width: '50px', height: '50px', mr: 2 }}
          />
          <Box>
            <Typography variant="h5" component="h3">
              NX Software Development Co-op
            </Typography>
            <Typography variant="h6" component="p">
              Siemens Digital Industries Software
            </Typography>
          </Box>
        </Box>

        <Typography variant="body2" color="textSecondary">
          January 2023 &mdash; December 2023
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Responsibilities:
          </Typography>
          <List>
            <BulletPointItem>
              Authored over 40 change packages to improve the Siemens NX CAD software.
            </BulletPointItem>
            <BulletPointItem>
              Improved the Drafting application by resolving 45+ Problem Reports (PRs).
            </BulletPointItem>
            <BulletPointItem>
              Integrated new C++ APIs into existing systems, enhancing legacy features.
            </BulletPointItem>
            <BulletPointItem>
              Collaborated on 3+ functional specifications, gathering requirements from the product manager and customers.
            </BulletPointItem>
            <BulletPointItem>
              Employed test-driven development (TDD) to ensure robust functionality in code implementation.
            </BulletPointItem>
            <BulletPointItem>
              Utilized CI in DevOps with descriptive commits, pull requests, and code reviews.
            </BulletPointItem>
          </List>

          <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 2 }}>
            Key Skills:
          </Typography>
          <List sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <ColoredListItem>
              <Box
                  component="img"
                  src="/icons/cplusplus-original.svg"
                  alt="C++ Logo"
                  sx={{ width: '20px', height: '20px', mr: 1 }}
              />
              <ListItemText primary="C++" />
            </ColoredListItem>
            <ColoredListItem>
              <Box
                  component="img"
                  src="/icons/xml-original.svg"
                  alt="XML Logo"
                  sx={{ width: '20px', height: '20px', mr: 1 }}
              />
              <ListItemText primary="XML" />
            </ColoredListItem>
          </List>
        </Box>
      </ExperienceBox>

      {/* Engineering Teaching Assistant */}
      <ExperienceBox>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box
            component="img"
            src="/uc-ceas-logo.jpg"
            alt="University of Cincinnati, College of Engineering and Applied Science Logo"
            sx={{ width: '50px', height: '50px', mr: 2 }}
          />
          <Box>
            <Typography variant="h5" component="h3">
              Engineering Teaching Assistant
            </Typography>
            <Typography variant="h6" component="p">
            University of Cincinnati, College of Engineering and Applied Science &mdash; Department of Engineering and Computing Education
            </Typography>
          </Box>
        </Box>

        <Typography variant="body2" color="textSecondary">
          August 2022 &mdash; December 2022
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Responsibilities:
          </Typography>
          <List>
            <BulletPointItem>
              Mentored 24 first-year engineering students in engineering best practices.
            </BulletPointItem>
            <BulletPointItem>
              Tutored Python programming and flowchart creation to student groups.
            </BulletPointItem>
            <BulletPointItem>
              Managed email correspondence and grading for 76 students on a weekly basis.
            </BulletPointItem>
          </List>

          <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 2 }}>
            Key Skills:
          </Typography>
          <List sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <ColoredListItem>
              <Box
                  component="img"
                  src="/icons/python-original.svg"
                  alt="Python Logo"
                  sx={{ width: '20px', height: '20px', mr: 1 }}
              />
              <ListItemText primary="Python" />
            </ColoredListItem>
          </List>
        </Box>
      </ExperienceBox>

      <Box sx={{ mt: 4, textAlign: 'center' }}> {/* Center the button */}
        <Button 
          variant="contained" 
          color="primary" 
          size="large" // Set the size to large
          href="./resume.pdf"
          download 
          sx={{ padding: '12px 24px' }} // Adjust padding for a larger button
        >
          View Full Resume
        </Button>
      </Box>

    </Container>
  );
}
