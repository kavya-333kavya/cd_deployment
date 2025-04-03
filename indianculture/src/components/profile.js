import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box, CircularProgress, Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors'; // To style the profile icon

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    email: '', // Dynamically set from localStorage
    name: '',
    bio: '',
  });

  const [isLoading, setIsLoading] = useState(true);

  // Fetch the logged-in user profile when the component mounts
  useEffect(() => {
    const emailFromStorage = localStorage.getItem('userEmail');

    if (emailFromStorage) {
      setUserData((prevData) => ({
        ...prevData,
        email: emailFromStorage,
      }));
    }

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <Container maxWidth="md" style={styles.pageStyle}> {/* Increased maxWidth to "md" for larger container */}
        <Box style={styles.profileBox}>
          <CircularProgress />
          <Typography variant="h6" align="center">Loading...</Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" style={styles.pageStyle}> {/* Increased maxWidth to "md" for larger container */}
      <Box style={styles.profileBox}>
        {/* Profile Icon */}
        <Avatar sx={styles.avatarStyle}>
          {/* No 'U', using the image of a man */}
        </Avatar>

        {/* Email Display with larger font size */}
        <Typography variant="h4" gutterBottom align="center" sx={styles.emailText}>
          Email: {userData.email || 'No email available'}
        </Typography>

        {/* Larger Complete Profile Button */}
        <Button variant="contained" color="primary" fullWidth style={styles.completeProfileButton}>
          Complete Profile
        </Button>
      </Box>
    </Container>
  );
};

// Styles
const styles = {
  pageStyle: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url('https://i.pinimg.com/564x/a2/d7/ae/a2d7ae1f09364e37dd5ded185d28135c.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  profileBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '80px', // Increased box padding for larger size
    borderRadius: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    width: '100%',
    maxWidth: '600px', // Increased box width
  },
  avatarStyle: {
    width: 120, // Increased size of the profile icon
    height: 120, // Increased size of the profile icon
    margin: '0 auto 30px auto', // More space between the avatar and the text
    backgroundColor: deepOrange[500],
  },
  emailText: {
    fontSize: '26px', // Larger font size for the email
    fontWeight: 'bold',
  },
  completeProfileButton: {
    marginTop: '30px', // Increased margin for spacing
    padding: '15px 0', // Increased button size
    fontSize: '18px', // Larger font for the button text
  },
};

export default ProfilePage;
