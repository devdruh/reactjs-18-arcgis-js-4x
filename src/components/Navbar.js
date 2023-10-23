import { useContext, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Container, Typography, Box, IconButton, Toolbar, AppBar, MenuItem, Menu, Link } from '@mui/material'
import { ColorModeContext, navPages } from '../utils/variables';
import MenuIcon from '@mui/icons-material/Menu'
import LogoDevIcon from '@mui/icons-material/LogoDev';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const DarkLightMode = () => {

    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    );
}

const Navbar = () => {
    
    const [anchorElNav, setAnchorElNav] = useState(null);

    let pathLoc = useLocation();
    let subPathLoc = pathLoc.pathname.substring(pathLoc.pathname === '/' ? 0 : 1);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <AppBar position="static" color="primary">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Arial',
                                // fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            DEV
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
                                <MenuIcon/>
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
                            {navPages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu} selected={subPathLoc === page.url}>
                                    <Link
                                        key={page.name}
                                        href={page.url}
                                        underline='none'
                                        sx={{ mx: 2, color: 'white', display: 'block' }}
                                    >
                                        {page.name}
                                    </Link>
                                </MenuItem>
                            ))}
                            </Menu>
                        </Box>
                        <LogoDevIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {navPages.map((page) => (
                                <Link
                                    key={page.name}
                                    href={page.url}
                                    underline='none'
                                    sx={{ mx: 2, color: 'white', display: 'block' }}
                                >
                                    {page.name}
                                </Link>
                            ))}
                        </Box>
 
                        <Box sx={{ flexGrow: 0 }}>
                            <DarkLightMode />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Navbar