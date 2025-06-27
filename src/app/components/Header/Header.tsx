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
import logo from '../../assets/SquadroSoft_banner_df0ucp.png';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';

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
    <>
      <Box
        sx={{
          py: 2,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          backgroundColor: '#fff',
          zIndex: 1100,
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
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
              <NextLink href="/" passHref>
                <Image
                  src={logo}
                  alt="Logo"
                  width={100}
                  height={50}
                  style={{ cursor: 'pointer' }}
                />
              </NextLink>
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
                    component={NextLink}
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
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        transitionDuration={400}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navLinks.map((link) => (
              <ListItem
                key={link.label}
                component={NextLink}
                href={link.href}
                onClick={toggleDrawer}
                sx={{
                  backgroundColor: isActive(link.href)
                    ? 'rgba(243, 112, 33, 0.1)'
                    : 'transparent',
                  cursor: 'pointer',
                  borderRadius: 1,
                  mb: 1,
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
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Spacer to push content below the fixed header */}
      <Box sx={{ height: { xs: '72px', md: '80px' } }} />
    </>
  );
};

export default Header;
