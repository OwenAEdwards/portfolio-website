import { Box, Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';

// Custom colored list item for coursework
const CourseworkListItem = styled(ListItem)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.common.white,
  borderRadius: '5px',
  marginBottom: theme.spacing(1),
  padding: theme.spacing(1),
  width: 'auto', // Adjust width to prevent full width
  display: 'inline-flex', // Set as inline-flex to allow side-by-side layout
  marginRight: theme.spacing(1), // Add margin between items
}));

// Custom styling for the coursework column
const CourseworkColumn = styled(Box)(({ theme }) => ({
  flex: '1 1 auto', // Flexible width for the coursework column
}));

export default function Education(): JSX.Element {
  return (
    <Container component="section" sx={{ my: 5 }}>
      <Typography variant="h2" component="h2" align="center" gutterBottom>
        Relevant Coursework
      </Typography>

      {/* Introduction paragraph */}
      <Typography variant="body1" sx={{ mb: 3 }}>
        Throughout my academic journey at the <strong>University of Cincinnati</strong>, I have taken a variety of courses that have helped me build a strong foundation in computer science and software engineering. These courses have not only deepened my understanding of key concepts but also provided me with practical skills that I apply in real-world projects. Here are some of the key courses I have taken:
      </Typography>

      {/* University of Cincinnati */}
      <Box sx={{ display: 'flex', flexDirection: 'column', mb: 4 }}>
        <Box sx={{ mt: 2, display: 'flex' }}>
          {/* Coursework Column */}
          <CourseworkColumn>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ flex: '1 1 auto' }}>
                {/* Year 2021-2022 */}
                <Typography variant="h6" component="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  2021-2022
                </Typography>
                <List sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CourseworkListItem>
                    <ListItemText primary="Computer Science 1" />
                  </CourseworkListItem>
                  <CourseworkListItem>
                    <ListItemText primary="Data Structures" />
                  </CourseworkListItem>
                  <CourseworkListItem>
                    <ListItemText primary="Introduction to Computer Systems" />
                  </CourseworkListItem>
                  <CourseworkListItem>
                    <ListItemText primary="Python Programming" />
                  </CourseworkListItem>
                  <CourseworkListItem>
                    <ListItemText primary="Information Security &amp; Assurance" />
                  </CourseworkListItem>
                </List>
              </Box>

              <Box sx={{ flex: '1 1 auto' }}>
                {/* Year 2022-2023 */}
                <Typography variant="h6" component="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  2022-2023
                </Typography>
                <List sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CourseworkListItem>
                    <ListItemText primary="Discrete Computational Structures" />
                  </CourseworkListItem>
                  <CourseworkListItem>
                    <ListItemText primary="Programming Languages" />
                  </CourseworkListItem>
                  <CourseworkListItem>
                    <ListItemText primary="Database Design and Development" />
                  </CourseworkListItem>
                  <CourseworkListItem>
                    <ListItemText primary="Design and Analysis of Algorithms" />
                  </CourseworkListItem>
                  <CourseworkListItem>
                    <ListItemText primary="Operating Systems &amp; Systems Programming" />
                  </CourseworkListItem>
                  <CourseworkListItem>
                    <ListItemText primary="Software Engineering" />
                  </CourseworkListItem>
                </List>
              </Box>

              <Box sx={{ flex: '1 1 auto' }}>
                {/* Year 2023-2024 */}
                <Typography variant="h6" component="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  2023-2024
                </Typography>
                <List sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CourseworkListItem>
                    <ListItemText primary="Artificial Intelligence: Principles and Applications" />
                  </CourseworkListItem>
                  <CourseworkListItem>
                    <ListItemText primary="Computer Networks and Networked Computing" />
                  </CourseworkListItem>
                  <CourseworkListItem>
                    <ListItemText primary="Requirements Engineering" />
                  </CourseworkListItem>
                  <CourseworkListItem>
                    <ListItemText primary="The Theory of Formal Languages and Automata" />
                  </CourseworkListItem>
                  <CourseworkListItem>
                    <ListItemText primary="User Interface I" />
                  </CourseworkListItem>
                </List>
              </Box>

              <Box sx={{ flex: '1 1 auto' }}>
                {/* Year 2024-2025 */}
                <Typography variant="h6" component="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  2024-2025
                </Typography>
                <List sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CourseworkListItem>
                    <ListItemText primary="Engineering Interactive Visual Interfaces for Data Science" />
                  </CourseworkListItem>
                  <CourseworkListItem>
                    <ListItemText primary="Large Scale Software Engineering" />
                  </CourseworkListItem>
                  <CourseworkListItem>
                    <ListItemText primary="Security Vulnerability Assessment" />
                  </CourseworkListItem>
                </List>
              </Box>
            </Box>
          </CourseworkColumn>
        </Box>
      </Box>

      {/* Additional Education/Relevant Coursework Sections can be added similarly */}
      
    </Container>
  );
}
