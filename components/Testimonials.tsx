import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import { Avatar } from '@mui/material';

// Custom card styling
const TestimonialCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: (theme.shadows as string[])[5],
  borderRadius: '10px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

// Custom card content styling
const TestimonialContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
}));

// Styling for the person info section
const PersonInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
  transition: 'color 0.2s, transform 0.2s', 
    '&:hover': { transform: 'scale(1.05)' }, // Slight pop-out effect
    '&:hover *': { color: 'red' } // Apply hover effect to entire component
}));

const NameAndTitle = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minWdith: 0,
  maxWidth: '70%',
}));

const Testimonials = () => {
  return (
    <Container component="section" sx={{ my: 5 }}>
      <Typography variant="h2" component="h2" align="center" gutterBottom>
        Testimonials
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', gap: 3 }}>
        {/* Testimonial 1 */}
        <TestimonialCard sx={{ maxWidth: 400 }}>
          {/* Person's Info */}
          <a 
            href="https://www.linkedin.com/in/robert-lewis-b453456a/"
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <PersonInfo>
              <Avatar
                alt="Robert Lewis"
                src="https://media.licdn.com/dms/image/v2/C4D03AQElK35Ky03DdA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1547146467506?e=1743638400&v=beta&t=Azlkwq6HMoXPWO36WYMIV-b50oOJRcPfNRhDx6EPrxY"
                sx={{ width: 60, height: 60 }}
              />
              <NameAndTitle>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Robert Lewis
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Computer Science 1 Professor (Mentor)
                </Typography>
              </NameAndTitle>
            </PersonInfo>
          </a>

          <TestimonialContent>
            <Typography variant="body1" sx={{ mb: 2 }}>
              &ldquo;An excellent student. Was one of the most successful in the C++ introductory course that I taught Spring 2022. Owen went above and beyond the material at every opportunity. Owen was an engaging student that I learned as much from as I felt like I taught him.
            </Typography>
            <Typography variant="body1">
              I highly recommend this student for any position / job where hard work and creativity are needed. It can be tough to find those qualities together in the same individual but with Owen they both are in abundance.&rdquo;
            </Typography>
          </TestimonialContent>
        </TestimonialCard>

        {/* Testimonial 2 */}
        <TestimonialCard sx={{ maxWidth: 400 }}>
          {/* Person's Info */}
          <a 
            href="https://www.linkedin.com/in/vedanta-hatwal-1a0a161b1/"
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <PersonInfo>
              <Avatar
                alt="Vedanta Hatwal"
                src="https://media.licdn.com/dms/image/v2/D5635AQFdloIUkjn0qw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1730623417964?e=1738897200&v=beta&t=KPqyp_PIRe3ZIGecCJWk7OQ8M3-XIiwNhvMaVw9vquw"
                sx={{ width: 60, height: 60 }}
              />
              <NameAndTitle>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Vedanta Hatwal
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Former Student of Owen
                </Typography>
              </NameAndTitle>
            </PersonInfo>
          </a>

          <TestimonialContent>
            <Typography variant="body1">
              &ldquo;He was my TA for Engineering Design Thinking 1 and he was great both inside and out of class. And responded to all my questions with detail and was particularly helpful for programming.&rdquo;
            </Typography>
          </TestimonialContent>
        </TestimonialCard>

        {/* Testimonial 3 */}
        <TestimonialCard sx={{ maxWidth: 400 }}>
          {/* Person's Info */}
          <a 
            href="https://www.linkedin.com/in/anuragdethe/"
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <PersonInfo>
              <Avatar
                alt="Anurag D. Dethe"
                src="https://media.licdn.com/dms/image/v2/D5635AQFEVudVo2gclQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1731356384866?e=1738897200&v=beta&t=DY19t7VCGqHM81p9YBuqv-70K0I89DtkJzGAe8q7YF4"
                sx={{ width: 60, height: 60 }}
              />
              <NameAndTitle>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Anurag D. Dethe
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Former Student of Owen
                </Typography>
              </NameAndTitle>
            </PersonInfo>
          </a>

          <TestimonialContent>
            <Typography variant="body1">
              &ldquo;I was able to learn a lot from Owen as my TA during my first year engineering course. I found him to be one of the most forthcoming TAs who had a genuine interest in helping solve problems and work on problems himself. Owen went out of his way not only to teach, but also personally mentor me and my peers, helping us navigate the field of engineering. His contribution helped me in what is considered the most difficult engineering course in the first year, along with other courses as well. Showing that he has a deep knowledge of software and programs along with a passion for learning and teaching. I have no doubt that Owen would prove to be an invaluable asset to any employer.&rdquo;
            </Typography>
          </TestimonialContent>
        </TestimonialCard>

        {/* Testimonial 4 */}
        <TestimonialCard sx={{ maxWidth: 400 }}>
          {/* Person's Info */}
          <a 
            href="https://www.linkedin.com/in/phanibharadwajjarugumilli/"
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <PersonInfo>
              <Avatar
                alt="Phani Bharadwaj Jarugumilli"
                src="https://media.licdn.com/dms/image/v2/D4D03AQFLOGWNkHrZwg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731526982580?e=1743638400&v=beta&t=E1MknQalmCOjawDpzSiPOVedDhtqw93Byukzdz1dCbc"
                sx={{ width: 60, height: 60 }}
              />
              <NameAndTitle>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Phani Bharadwaj Jarugumilli
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Former Student of Owen
                </Typography>
              </NameAndTitle>
            </PersonInfo>
          </a>

          <TestimonialContent>
            <Typography variant="body1">
              &ldquo;I met Owen when I was taking my Engineering Design Thinking course, where he was the teaching assistant for our class. His confidence in the area of programming and his helping nature proved to be of great value to me. Additionally, I also like Owen's passion to keep himself updated about changes in the tech industry. I am more than happy to write Owen a recommendation and I can assure you that he will be a highly valuable asset for future companies that are looking for an employee with excellent soft and technical skills.&rdquo;
            </Typography>
          </TestimonialContent>
        </TestimonialCard>

        {/* Testimonial 5 */}
        <TestimonialCard sx={{ maxWidth: 400 }}>
          {/* Person's Info */}
          <a 
            href="https://www.linkedin.com/in/alex-yang-803abb194/"
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <PersonInfo>
              <Avatar
                alt="Alex Yang"
                src="https://media.licdn.com/dms/image/v2/C4D03AQFtB3iYj1og8A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1586904101932?e=1743638400&v=beta&t=e4NbjdI6FLxG_fZ9LzBjWDRIKFGYK3SY9oBcia3eaKc"
                sx={{ width: 60, height: 60 }}
              />
              <NameAndTitle>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Alex Yang
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Fellow Co-worker at Siemens Digital Industries Software
                </Typography>
              </NameAndTitle>
            </PersonInfo>
          </a>

          <TestimonialContent>
            <Typography variant="body1">
              &ldquo;It was a pleasure working with Owen during our internship at Siemens Digital Industries while under the Model Based Definition group. Although our initial tasks were different, I quickly realized how determined and tenacious he was on his task work. Eventually, we got the opportunity to work together on some project work. Working together with Owen made me realize how knowledgeable and invested he is in the software industry. Several times he was able to help me with both coding jargon and concepts, demonstrating his passion in software. Owen upholds both a professional and friendly attitude while in the office which brings about a positive impact on those around him, inspiring people to work harder. Despite a 50 min drive to the office, I would always look forward to working with Owen. I am certain that as Owen continues his studies and his experiences through various more internships, he will become an irreplaceable valued team member at whichever company lucky enough to employ him.&rdquo;
            </Typography>
          </TestimonialContent>
        </TestimonialCard>

        {/* Testimonial 6 */}
        <TestimonialCard sx={{ maxWidth: 400 }}>
          {/* Person's Info */}
          <a 
            href="https://www.linkedin.com/in/hrishikesh-bhide/"
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <PersonInfo>
              <Avatar
                alt="Hrishikesh Bhide"
                src="https://media.licdn.com/dms/image/v2/D5603AQGiR0ed0gCXQA/profile-displayphoto-shrink_400_400/B56ZST0uCdHQAk-/0/1737646858893?e=1743638400&v=beta&t=9FlWAF86ETjllupzSRblmDKlNsfcJssk74ZnznCW26A"
                sx={{ width: 60, height: 60 }}
              />
              <NameAndTitle>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Hrishikesh Bhide
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Programming Languages Professor (Instructor)
                </Typography>
              </NameAndTitle>
            </PersonInfo>
          </a>

          <TestimonialContent>
            <Typography variant="body1">
              &ldquo;Owen was an exemplary student in my Programming Languages computer science course during Summer, 2023. When we discussed theoretical topics in programming languages, such as scope, syntaxes, and grammar, Owen always seemed to grasp the concepts at hand. He demonstrated proficiency in a multitude of programming languages, each of a different paradigm, including Python, Java, Haskell, and Prolog. Owen was committed, being the first student in class out of over 75 to present an extra credit assignment, showcasing excellent communication skills. Owen absorbed the material taught in class and ultimately earned an A. I highly recommend Owen to any future employer looking for an employee who is motivated, a confident public speaker, and a tenacious learner.&rdquo;
            </Typography>
          </TestimonialContent>
        </TestimonialCard>

        {/* Testimonial 7 */}
        <TestimonialCard sx={{ maxWidth: 400 }}>
          {/* Person's Info */}
          <a 
            href="https://www.linkedin.com/in/nitin-nitin-a4a17013/"
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <PersonInfo>
              <Avatar
                alt="Nitin Nitin"
                src="https://media.licdn.com/dms/image/v2/D5603AQHO38MXXlaTaA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1680918837991?e=1743638400&v=beta&t=S4cDeb-amSyB2lOpYCY3zh2MLHRIGSZU8-CGhQkjtz8"
                sx={{ width: 60, height: 60 }}
              />
              <NameAndTitle>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Nitin Nitin
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Data Structures &amp; Discrete Computational Structures Professor (Mentor)
                </Typography>
              </NameAndTitle>
            </PersonInfo>
          </a>

          <TestimonialContent>
            <Typography variant="body1">
              &ldquo;Owen was an exceptional student in my Data Structures and Discrete Computational Structures courses, consistently scoring top marks and actively contributing to class discussions. He impressed me with his in-depth understanding of topics like algorithm analysis and graph theory, consistently exceeding expectations by implementing efficient solutions in C++ using the STL. I particularly remember his initiative in creating and sharing a GitHub repository of his own data structure implementations, demonstrating not only his coding skills but also his passion for learning and problem-solving. Owen's strong mathematical foundation, combined with his ability to implement complex algorithms and collaborate effectively, makes him a valuable asset to any team seeking a talented and dedicated computer science professional.&rdquo;
            </Typography>
          </TestimonialContent>
        </TestimonialCard>
      </Box>
    </Container>
  );
};

export default Testimonials;
