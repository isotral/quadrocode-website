"use client"
import theme from '@/app/style/theme';
import { Box, Container, Typography } from '@mui/material';
import OffersCard from './OffersCard';

import qualifiedEngineers from '../../assets/Qualified Engineers.png';
import dedicated from '../../assets/Dedicated Team.png';
import collaborative from '../../assets/Collaborative Process.png';
import continuous from '../../assets/Continuous Supervision.png';

const Offers = () => {
    return (
        <>
            <Box sx={{
                py: 8,
                textAlign: 'center',
                mt: { xs: 4, md: 12 },
            }}>
                <Container maxWidth="md">
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        gutterBottom
                        sx={{
                            fontSize: '40px',
                            textTransform: 'uppercase',
                            color: theme.palette.primary.main,
                        }}
                    >
                        WHAT WE OFFER
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '16px',
                            lineHeight: 1.65,
                            color: theme.palette.custom.sixth[200]
                        }}
                    >
                        Enosis works as an extension of your development and testing team. We will work together to solve your business cases and get the maximum value of your budget. One of our differentiating qualities is that we take the time to understand the particular challenges, difficulties, and needs of your business.
                    </Typography>
                </Container>
            </Box>


            <Box display="flex" flexDirection={{ xs: 'column-reverse', md: 'row' }} gap={{ xs: 0, md: 10 }}>
                <OffersCard
                    title="Qualified Engineers"
                    description="Enosis is a team of 350+ software experts. We continue to strive in being the best in the industry by hiring engineers from renowned universities. Having team members experienced in a wide range of technology stacks enables us to meet different customers needs."
                    image={qualifiedEngineers}
                />
                <OffersCard
                    title="Dedicated Team"
                    description="Our in-house team is yours too. We will jump in and ramp up quickly. Your goals become our goals. We will navigate the risks of software development together."
                    image={dedicated}
                />
            </Box>

            <Box display="flex" flexDirection={{ xs: 'column-reverse', md: 'row' }} gap={{ xs: 0, md: 10 }}>
                <OffersCard
                    title="Collaborative Process"
                    description="We work as an extension of your team, not as a vendor. We help you to participate in a deeply collaborative process to develop the desired product. We will be in constant communication with your team every step of the way."
                    image={collaborative}
                />
                <OffersCard
                    title="Continuous Supervision"
                    description="A project manager will be involved in the entire lifecycle of your project to plan, organize, control, and deploy key deliverables according to your desired milestones, including process improvement analysis and implementation."
                    image={continuous}
                />
            </Box>
        </>
    )
}

export default Offers
