import theme from '@/app/style/theme';
import { Divider, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';

import logo from '../../assets/SquadroSoft_box_hernuk.png';

const OurDetails = () => {
    const data = {
        imageSrc: logo,
        title: 'ABOUT US',
        subTitle: 'Welcome to Squadro Soft',
        description: `Our world faces countless challenges every moment. While it's impossible to eliminate every
        problem entirely, we believe it's possible to solve those that impact our lives the most,
        making life better and more comfortable. Isotral, along with its branch platforms, is dedicated
        to addressing these issues. In the future, we aim to expand our platforms to further enhance
        your quality of life. Our mission is simple: to give you a better life.`,
        bulletPoints: [
            'Safety and Security',
            'Skill',
            'Education',
            'Green World',
            'Public rights and protection',
        ]
    };

    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(6, 1fr)' },
                alignItems: 'center',
                gap: { xs: 0, md: 10 },
                mt: { xs: 1, md: 6 }
            }}
        >
            {/* Image Section */}
            <Box
                sx={{
                    width: '100%',
                    height: 'auto',
                    gridColumn: { xs: 'auto', md: 'span 3' },
                }}
            >
                <Image
                    src={data.imageSrc}
                    alt="About Image"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            </Box>

            {/* Content Section */}
            <Box sx={{ gridColumn: { xs: 'auto', md: 'span 3' } }}>
                <Typography
                    variant="overline"
                    sx={{
                        display: 'flex', alignItems: 'center', fontWeight: 'bold',
                        fontSize: '40px',
                        color: theme.palette.primary.main,
                    }}
                >
                    {data.title}
                    <Divider sx={{ width: 40, ml: 2, borderColor: theme.palette.primary.main }} />
                </Typography>

                <Typography sx={{
                    fontWeight: 'bold',
                    fontSize: '30px',
                    lineHeight: 1.0,
                    color: theme.palette.secondary.main,
                }}>
                    {data.subTitle}
                </Typography>

                <Typography mt={1} variant="body1" sx={{ fontSize: '16px', lineHeight: 1.7 }}>
                    {data.description}
                </Typography>

                {/* Bullet Points */}
                <Box display="flex" flexWrap="wrap" mt={3} mx={-0.5}>
                    {data.bulletPoints.map((text, i) => (
                        <Box
                            key={i}
                            width={{ xs: '100%', sm: '50%' }}
                            px={0.5}
                            mb={1}
                        >
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Typography variant="body1" fontWeight={600} color="primary">
                                    ➜
                                </Typography>
                                <Typography variant="body1" color="text.primary">
                                    {text}
                                </Typography>
                            </Stack>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default OurDetails;
