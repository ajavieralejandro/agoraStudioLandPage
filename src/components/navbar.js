import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ScrollToColor01 from './scrollToColor/scrollToColor';
import { Link } from 'react-scroll';

const StyledButton = styled(Button)`
text-align: center;
color: white;
cursor: 'point';
font-size : 22px;
&:hover {
  -webkit-transform: scale(1.08);  transition : 0.5s;
  
}


`;
/*
const StyledAppBar = styled(AppBar)`
background : #697D48;

`
const StyledMenuItem = styled(MenuItem)`
    color : black;
`

const StyledTypography = styled(Typography)`
  color :  white;
`;
*/

const StyledLink = styled(Link)`
  font-family: 'Source Code Pro', monospace;
  font-size : 18px;
  &:hover{
    font-weight: bold;
    color : black;

  }

`;
const pages = ['about', 'team', 'gallery','contact'];
//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };




  return (
      <ScrollToColor01>
    <AppBar >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'inline-flex' } }}
          >
            AgoraStudio
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, textAlign:'center' }}>
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <StyledLink to={page} smooth={true} duration={800}><p>{page}</p></StyledLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <StyledButton
                key={page}
                onClick={handleCloseNavMenu}
              >
                                  <StyledLink to={page} smooth={true} duration={800}><p>{page}</p></StyledLink>
              </StyledButton>
            ))}
          </Box>

        
        </Toolbar>
      </Container>
    </AppBar>
    </ScrollToColor01>
  );
};
export default ResponsiveAppBar;