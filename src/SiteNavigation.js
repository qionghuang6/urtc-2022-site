import { useEffect, useState } from 'react'
import { Button, AppBar, Container, Toolbar, IconButton, Typography, Box, MenuItem, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// const pageMap = { 'About': '/about', 'URTC 2023': '/urtc2023', 'Apply': '/apply', 'Submission + Presentation': '/submission', 'Sponsorship': '/sponsorship', 'Contact Us': '/contact', 'FAQ': '/faq' };
const pageMap = { 'About': '/about', 'Submission': '/submission', 'Sponsorship': '/sponsorship', 'Contact Us': '/contact', 'FAQ': '/faq' };
const pages = Object.keys(pageMap);

export default function SiteNavigation() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", function (_event) {
            if (window.scrollY > 30 && !scrolled) {
                setScrolled(true);
            } else if (window.scrollY < 30 && scrolled) {
                setScrolled(false);
            }
        })
    }, [scrolled])

    return (
        <AppBar position="fixed" sx={{
            backgroundColor: `rgba(68, 23, 68, ${scrolled ? 0.7 : 0})`,
            transition: 'all 0.5s linear',
            backdropFilter: scrolled ? `blur(6px)` : 'none'
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        fontFamily="Montserrat"
                        fontWeight="700"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        MIT URTC
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu} component="a" href={pageMap[page]}>
                                    <Typography fontFamily="Montserrat" fontWeight="500" textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        fontFamily="Montserrat"
                        fontWeight="700"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        MIT URTC
                    </Typography>
                    <Box sx={{ justifyContent: 'end', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                component="a"
                                href={pageMap[page]}
                                size="large"
                                sx={{
                                    my: 1,
                                    mx: 0.2,
                                    color: 'white',
                                    display: 'block',
                                    fontFamily: 'Montserrat',
                                    fontWeight: '400',
                                    '&:hover': {
                                        color: 'pink'
                                    }
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
