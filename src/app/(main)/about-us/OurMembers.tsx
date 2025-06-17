'use client'

import theme from '@/app/style/theme'
import CardMembershipIcon from '@mui/icons-material/CardMembership'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import {
    Avatar,
    Box,
    IconButton,
    Link,
    Typography,
} from '@mui/material'

const members = [
    {
        name: 'Kamrul Hasan',
        role: 'Frontend Developer',
        avatar: 'https://res.cloudinary.com/dmcppzpgl/image/upload/v1741548642/kamrul_zivg8b.jpg',
        linkedin: 'https://www.linkedin.com/in/kamrulhasan',
        email: 'kamrul@example.com',
    },
    {
        name: 'Anika Rahman',
        role: 'UI/UX Designer',
        avatar: 'https://res.cloudinary.com/dmcppzpgl/image/upload/v1741548642/kamrul_zivg8b.jpg',
        linkedin: 'https://www.linkedin.com/in/anikarahman',
        email: 'anika@example.com',
    },
    {
        name: 'Raihan Islam',
        role: 'Backend Developer',
        avatar: 'https://res.cloudinary.com/dmcppzpgl/image/upload/v1741548642/kamrul_zivg8b.jpg',
        linkedin: 'https://www.linkedin.com/in/raihanislam',
        email: 'raihan@example.com',
    },
    {
        name: 'Moumita Saha',
        role: 'QA Engineer',
        avatar: 'https://res.cloudinary.com/dmcppzpgl/image/upload/v1741548642/kamrul_zivg8b.jpg',
        linkedin: 'https://www.linkedin.com/in/moumitasaha',
        email: 'moumita@example.com',
    },
]

const OurMembers = () => {
    return (
        <Box sx={{ padding: { xs: '40px 20px', md: '80px 60px' }, textAlign: 'center' }}>
            <Typography
                variant="h4"
                fontWeight="bold"
                mb={5}
                sx={{
                    fontWeight: 'bold',
                    fontSize: '40px',
                    color: theme.palette.primary.main,
                }}
            >
                Our Members
            </Typography>

            {/* Grid container using CSS Grid */}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                    gap: 4,
                }}
            >
                {members.map((member, index) => (
                    <Box
                        key={index}
                        sx={{
                            backgroundColor: '#f9f9f9',
                            padding: 3,
                            borderRadius: 4,
                            boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
                            transition: '0.3s',
                            '&:hover': {
                                transform: 'translateY(-5px)',
                            },
                            textAlign: 'center',
                        }}
                    >
                        <Avatar
                            src={member.avatar}
                            alt={member.name}
                            sx={{
                                width: 100,
                                height: 100,
                                margin: '0 auto 16px auto',
                                border: '3px solid #2492EB',
                            }}
                        />
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            sx={{
                                color: theme.palette.custom.sixth[100],
                            }} >
                            {member.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                color: theme.palette.custom.sixth[200],
                            }}>
                            {member.role}
                        </Typography>

                        {/* Social Icons */}
                        <Box mt={2} display="flex" justifyContent="center" gap={1}>
                            <IconButton
                                component={Link}
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener"
                                sx={{ color: '#0A66C2' }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton
                                component={Link}
                                href={`mailto:${member.email}`}
                                sx={{ color: '#EA4335' }}
                            >
                                <EmailIcon />
                            </IconButton>
                            <IconButton sx={{ color: '#2492EB' }}>
                                <CardMembershipIcon />
                            </IconButton>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default OurMembers
