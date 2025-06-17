import theme from '@/app/style/theme';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SchoolIcon from '@mui/icons-material/School';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';

const services = [
    {
        icon: <SchoolIcon sx={{ fontSize: 48, color: '#FFFF' }} />,
        title: 'Empowerment',
        description:
            'Our aim is to make people skilled which they badly need to survive in the society and the whole world.',
    },
    {
        icon: <EngineeringIcon sx={{ fontSize: 48, color: '#FFFF' }} />,
        title: 'Innovation',
        description:
            'We encourage creativity and provide tools to help individuals bring their ideas to life.',
    },
    {
        icon: <VolunteerActivismIcon sx={{ fontSize: 48, color: '#FFFF' }} />,
        title: 'Community Support',
        description:
            'Building strong communities through collective efforts and inclusive programs.',
    },
    {
        icon: <PsychologyIcon sx={{ fontSize: 48, color: '#FFFF' }} />,
        title: 'Mental Health',
        description:
            'Raising awareness and providing resources for emotional and psychological well-being.',
    },
];

const cardColor = '#F37021';
const cardHoverColor = '#2492EB';

const OurServices = () => {
    return (
        <Box
            sx={{
                mt: { xs: 1, md: 6 },
                pt: 2,
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: 4,
            }}
        >
            {services.map((service, index) => (
                <Card
                    key={index}
                    sx={{
                        width: '100%',
                        textAlign: 'center',
                        boxShadow: 2,
                        borderRadius: 3,
                        bgcolor: cardColor,
                        p: 3,
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        '&:hover': {
                            boxShadow: 6,
                            transform: 'translateY(-8px)',
                            bgcolor: cardHoverColor,
                        },
                    }}
                >
                    {service.icon}
                    <CardContent>
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            gutterBottom
                            sx={{
                                fontSize: 30,
                                color: alpha(theme.palette.custom.fifth[100], 0.9),
                            }}
                        >
                            {service.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: 18,
                                color: alpha(theme.palette.custom.fifth[100], 0.7),
                            }}
                        >
                            {service.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default OurServices;
