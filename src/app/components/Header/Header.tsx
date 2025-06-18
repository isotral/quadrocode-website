'use client';

import theme from '@/app/style/theme';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
    Box,
    Container,
    Drawer,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemText,
    Stack,
} from '@mui/material';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import logo from '../../assets/squadroSoftLogo.jpeg';
import { usePathname } from 'next/navigation';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Contact Us', href: '/contact-us' },
];

const Header = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const [hash, setHash] = useState<string>('');

    const toggleDrawer = () => setOpen(!open);

    // ✅ Capture hash on client only
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setHash(window.location.hash);
        }
    }, []);

    const activeColor = '#F37021';

    const isActive = (href: string) => {
        if (href.startsWith('/#')) {
            return href === `${pathname}${hash}`;
        }
        return href === pathname;
    };

    return (
        <Box
            sx={{
                py: 2,
                boxShadow: '0 0 1.5px rgba(0,0,0,0.3)',
                position: 'sticky',
                top: 0,
                zIndex: 10,
                backgroundColor: '#fff',
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    marginX: 'auto',
                    overflowX: 'hidden',
                    [theme.breakpoints.up('xl')]: {
                        paddingX: '32px',
                        maxWidth: '1280px',
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    {/* Logo */}
                    <Box display="flex" alignItems="center">
                        <Image src={logo} alt="Logo" width={50} height={50} />
                    </Box>

                    {/* Desktop Nav + Mobile Menu */}
                    <Box display="flex" alignItems="center">
                        <Stack
                            direction="row"
                            spacing={4}
                            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    underline="none"
                                    sx={{
                                        fontWeight: isActive(link.href) ? 'bold' : 'medium',
                                        color: isActive(link.href) ? activeColor : 'text.primary',
                                        transition: 'color 0.3s',
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </Stack>

                        <IconButton
                            onClick={toggleDrawer}
                            sx={{ display: { xs: 'flex', md: 'none' }, ml: 1 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Container>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer}
                transitionDuration={500}
            >
                <Box sx={{ width: 250, p: 2 }}>
                    <Box display="flex" justifyContent="flex-end">
                        <IconButton onClick={toggleDrawer}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <List>
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                underline="none"
                                sx={{ textDecoration: 'none' }}
                            >
                                <ListItem
                                    component="a"
                                    onClick={toggleDrawer}
                                    sx={{
                                        backgroundColor: isActive(link.href)
                                            ? 'rgba(243, 112, 33, 0.1)'
                                            : 'transparent',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <ListItemText
                                        primary={link.label}
                                        primaryTypographyProps={{
                                            fontWeight: isActive(link.href) ? 'bold' : 'medium',
                                            color: isActive(link.href) ? activeColor : 'text.primary',
                                        }}
                                    />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
};

export default Header;
