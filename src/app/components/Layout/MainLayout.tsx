import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    const theme = useTheme();

    return (
        <Container
            maxWidth={false}
            sx={{
                maxWidth: '100%',
                marginTop: '10px',
                marginX: 'auto',
                padding: '16px',
                [theme.breakpoints.up('md')]: {
                    padding: '32px',
                },
                [theme.breakpoints.up('xl')]: {
                    maxWidth: '1280px',
                },
            }}
        >
            <Header />

            {children}

            <Footer />
        </Container>
    );
}
