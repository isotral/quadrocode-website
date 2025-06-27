import { Box, Container, Typography, IconButton, Input, Button, Link } from '@mui/material';
import { Facebook, Twitter, YouTube, LinkedIn, Phone, Mail, LocationOn, ArrowForwardIos as ArrowForwardIosIcon } from '@mui/icons-material'; // Import ArrowForwardIosIcon
import Image from 'next/image';
import NextLink from 'next/link';

import logo from '../../assets/SquadroSoft_box_hernuk.png';
import theme from '@/app/style/theme';

const footerLinks = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'Our Gallery', href: '/gallery' },
];

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#222', color: 'white', py: 6 }}>
            <Container maxWidth="xl">
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {/* Logo Section */}
                    <Box sx={{ flex: '1 1 25%', mb: 3 }}>
                        <Image
                            src={logo}
                            alt="VLOO Logo"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    </Box>

                    {/* Quick Links */}
                    <Box sx={{ flex: '1 1 25%', mb: 3 }}>
                        <Typography variant="h6" mb={2}>Quick Link</Typography>
                        <Box>
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    component={NextLink}
                                    href={link.href}
                                    underline="none"
                                    sx={{ display: 'flex', alignItems: 'center', color: 'white', mb: 1 }}
                                >
                                    <ArrowForwardIosIcon sx={{ marginRight: 1 }} /> {/* Right Arrow Icon */}
                                    {link.label}
                                </Link>
                            ))}
                        </Box>
                    </Box>

                    {/* Contact Information */}
                    <Box sx={{ flex: '1 1 25%', mb: 3 }}>
                        <Typography variant="h6" mb={2}>Contact</Typography>
                        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <LocationOn sx={{ marginRight: 1 }} /> {/* Location Icon */}
                            <a href="tel:+8801771449957" style={{ color: 'white', textDecoration: 'none' }}>
                                Dhaka, Bangladesh
                            </a>
                        </Typography>
                        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Phone sx={{ marginRight: 1 }} />
                            <a href="tel:+8801771449957" style={{ color: 'white', textDecoration: 'none' }}>
                                +8801771449957
                            </a>
                        </Typography>
                        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Phone sx={{ marginRight: 1 }} />
                            <a href="tel:+8801956394373" style={{ color: 'white', textDecoration: 'none' }}>
                                +8801956394373
                            </a>
                        </Typography>
                        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                            <Mail sx={{ marginRight: 1 }} />
                            <a href="mailto:info.isotral@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>
                                info.isotral@gmail.com
                            </a>
                        </Typography>

                        <Box sx={{ mt: 2 }}>
                            <IconButton color="inherit" href="https://www.facebook.com" target="_blank">
                                <Facebook />
                            </IconButton>
                            <IconButton color="inherit" href="https://www.twitter.com" target="_blank">
                                <Twitter />
                            </IconButton>
                            <IconButton color="inherit" href="https://www.youtube.com" target="_blank">
                                <YouTube />
                            </IconButton>
                            <IconButton color="inherit" href="https://www.linkedin.com" target="_blank">
                                <LinkedIn />
                            </IconButton>
                        </Box>
                    </Box>

                    {/* Newsletter Section */}
                    <Box sx={{ flex: '1 1 25%', mb: 3 }}>
                        <Typography variant="h6" mb={2}>Newsletter</Typography>
                        <Typography variant="body1" mb={2}>Get all updates and news from us</Typography>
                        <Box sx={{ display: 'flex' }}>
                            <Input
                                placeholder="Your email"
                                sx={{
                                    flexGrow: 1,
                                    padding: '8px',
                                    marginRight: '10px',
                                    backgroundColor: '#fff',
                                    borderRadius: '4px',
                                    color: '#333',
                                }}
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    px: {
                                        xs: 6,  // Padding on mobile
                                        md: 6,  // Padding on medium and larger screens
                                    },
                                    py: 1.5,
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                    borderRadius: 2,
                                    color: theme.palette.custom.fifth.white,
                                    backgroundColor: theme.palette.custom.button[100],
                                    width: {
                                        xs: '100%',  // Full width on mobile
                                        md: 'auto',  // Auto width on medium and larger screens
                                    },
                                    '&:hover': {
                                        backgroundColor: theme.palette.custom.button[200],
                                    },
                                }}
                            >
                                SEND
                            </Button>
                        </Box>
                    </Box>
                </Box>

                {/* Footer Bottom */}
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Typography
                        sx={{
                            color: theme.palette.custom.fifth.white,
                        }}
                    >
                        © Squadro Soft, All Rights Reserved. Designed by BeetCoder
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
