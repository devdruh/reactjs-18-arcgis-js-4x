import * as React from 'react' 
import { Container, Typography, Box, IconButton, Toolbar, AppBar, MenuItem, Menu, Tooltip, Link } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LogoDevIcon from '@mui/icons-material/LogoDev';
// import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useLocation } from 'react-router-dom';

const pages = [
    {
        name: "Home",
        url: '/'
    },
    {
        name: "Data & Maps",
        url: "data-maps"
    },
    {
        name: "About",
        url: "about"
    }
]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
    
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    let pathLoc = useLocation();
    let subPathLoc = pathLoc.pathname.substring(pathLoc.pathname === '/' ? 0 : 1);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
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
                            {pages.map((page) => (
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
                            {pages.map((page) => (
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
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    {/* <EmojiEmotionsIcon/> */}
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                                >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
        
  )
}

export default Navbar