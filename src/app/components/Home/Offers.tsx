'use client'

import theme from '@/app/style/theme';
import { Box, Container, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import qualifiedEngineers from '@/assets/qualified-engineers.png'; // Rename uploaded image accordingly
import dedicatedTeam from '@/assets/dedicated-team.png'; // Rename second image accordingly

const Offers = () => {
    return (
        <Box sx={{ py: 8, textAlign: 'center', mt: { xs: 4, md: 12 } }}>
            <Container maxWidth="md">
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                        fontSize: '40px',
                        textTransform: 'uppercase',
                        color: theme.palette.custom.sixth[100],
                    }}
                >
                    WHAT WE OFFER
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: '16px',
                        lineHeight: 1.65,
                        color: theme.palette.custom.sixth[200],
                        mb: 6,
                    }}
                >
                    Enosis works as an extension of your development and testing team. We will work together to solve your business cases and get the maximum value of your budget. One of our differentiating qualities is that we take the time to understand the particular challenges, difficulties, and needs of your business.
                </Typography>

                <Grid container spacing={6} justifyContent="center">
                    {/* Card 1 */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Image
                                src={qualifiedEngineers}
                                alt="Qualified Engineers"
                                width={500}
                                height={300}
                                style={{ width: '100%', height: 'auto' }}
                            />
                            <Typography variant="h5" fontWeight="bold" sx={{ mt: 3, color: 'error.main' }}>
                                Qualified Engineers
                            </Typography>
                            <Typography sx={{ mt: 1, fontSize: '15px', color: theme.palette.custom.sixth[200] }}>
                                Enosis is a team of 350+ software experts. We continue to strive in being the best in the industry by hiring engineers from renowned universities. Having team members experienced in a wide range of technology stacks enables us to meet different customers' needs.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Card 2 */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Image
                                src={dedicatedTeam}
                                alt="Dedicated Team"
                                width={500}
                                height={300}
                                style={{ width: '100%', height: 'auto' }}
                            />
                            <Typography variant="h5" fontWeight="bold" sx={{ mt: 3, color: 'error.main' }}>
                                Dedicated Team
                            </Typography>
                            <Typography sx={{ mt: 1, fontSize: '15px', color: theme.palette.custom.sixth[200] }}>
                                Our in-house team is yours too. We will jump in and ramp up quickly. Your goals become our goals. We will navigate the risks of software development together.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Offers;
