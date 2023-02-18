// import React from 'react'

// export default function Navbar() {
//   return (
//     <div>Navbar</div>
//   )
// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
}

function ScrollTop(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Navbar(props: any) {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
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
            <React.Fragment>
                <AppBar position="static">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                LOGO
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
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href=""
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
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>

                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                <Toolbar id="back-to-top-anchor" />
                <ScrollTop {...props}>
                    <Fab size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
            </React.Fragment>
        </>
    );
}

// import * as React from "react";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import LogoutIcon from "@mui/icons-material/Logout";
// import KeyboardArrowDownSharp from "@mui/icons-material/KeyboardArrowDownSharp";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import BusinessIcon from "@mui/icons-material/Business";
// import {
//     AppBar,
//     Avatar,
//     Box,
//     Collapse,
//     Divider,
//     IconButton,
//     List,
//     ListItem,
//     ListItemButton,
//     ListItemIcon,
//     ListItemText,
//     SwipeableDrawer,
//     Toolbar,
//     Tooltip,
//     Typography,
//     useTheme,
//     Link,
//     Grid,
//     Paper,
//     Popover,
//     Drawer,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { ExpandLess, ExpandMore } from "@mui/icons-material";
// import { useHistory } from "react-router-dom";
// import { useEffect, useState } from "react";

// interface Data {
//     id: number;
//     code: string;
//     BranchName: string;
//     Address: string;
//     Contact: string;
// }

// interface SimplePopoverrops {
//     open: boolean;
//     selectedValue: string;
//     onClose: (value: string) => void;
// }

// export default function Nav() {
//     let history = useHistory();

//     const dashboardClick = () => {
//         history.push("/dashboard");
//     };

//     const consumerClick = () => {
//         history.push("/consumers");
//     };
//     const handleClickGSTReport = () => {
//         history.push("/gst-report");
//     };

//     const matches = useMediaQuery("(max-width:800px)");
//     const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//     const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
//     const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null);
//     const [anchorEl4, setAnchorEl4] = React.useState<null | HTMLElement>(null);
//     const [anchorEl5, setAnchorEl5] = React.useState<null | HTMLElement>(null);
//     const [anchorEl6, setAnchorEl6] = React.useState<HTMLButtonElement | null>(
//         null
//     );
//     const [openResponsive, setopenResponsive] = React.useState(false);
//     const [branchListData, setBranchResultData] = useState([]);
//     const [state, setState] = React.useState({ left: false });
//     const [openMaster, setOpenMaster] = React.useState(true);
//     const [openDetail, setOpenDetail] = React.useState(true);
//     const [openTeam, setOpenTeam] = React.useState(true);
//     const [openSetting, setopenSetting] = React.useState(true);
//     //Theme Toggle State
//     const open = Boolean(anchorEl);
//     const open2 = Boolean(anchorEl2);
//     const open3 = Boolean(anchorEl3);
//     const open4 = Boolean(anchorEl4);
//     const open5 = Boolean(anchorEl5);
//     type Anchor = "top" | "left" | "bottom" | "right";
//     const toggleDrawer =
//         (anchor: any, open: boolean) =>
//             (event: any) => {
//                 if (
//                     event &&
//                     event.type === "keydown" &&
//                     ((event as React.KeyboardEvent).key === "Tab" ||
//                         (event as React.KeyboardEvent).key === "Shift")
//                 ) {
//                     return;
//                 }
//                 let page = event.target.innerText;

//                 switch (page) {

//                     case "Dashboard": {
//                         history.push("/dashboard");
//                         break;
//                     }
//                     case "Consumers": {
//                         history.push("/consumers");
//                         break;
//                     }
//                     case "Suppliers": {
//                         setOpenMaster(!openMaster)
//                         history.push("/suppliers");
//                         break;
//                     }
//                     case "Buyers": {
//                         setOpenMaster(!openMaster)
//                         history.push("/buyers");
//                         break;
//                     }
//                     case "Products": {
//                         setOpenMaster(!openMaster)
//                         history.push("/products");
//                         break;
//                     }
//                     case "Taxes": {
//                         setOpenMaster(!openMaster)
//                         history.push("/taxes");
//                         break;
//                     }
//                     case "Units": {
//                         setOpenMaster(!openMaster)
//                         history.push("/units");
//                         break;
//                     }
//                     case "Purchase": {
//                         setOpenDetail(!openDetail)
//                         history.push("/purchase");
//                         break;
//                     }
//                     case "Invoice": {
//                         setOpenDetail(!openDetail)
//                         history.push("/invoice");
//                         break;
//                     }
//                     case "Stock": {
//                         setAnchorEl2(null);
//                         history.push("/stock");
//                         break;
//                     }

//                     case "Admins/Users": {
//                         setOpenTeam(!openTeam);
//                         history.push("/user");
//                         break;
//                     }
//                     case "Staff": {
//                         setOpenTeam(!openTeam);
//                         history.push("/staff");
//                         break;
//                     }
//                     case "Branches": {
//                         setopenSetting(!openSetting);
//                         history.push("/branches");
//                         break;
//                     }
//                     case "GST Report": {
//                         history.push("/gst-report");
//                         break;
//                     }
//                     default: {
//                     }
//                 }
//                 setState({ ...state, [anchor]: open });
//             };

//     const handleClickMaster = () => {

//         setOpenMaster(!openMaster)
//         // if (openMaster == false) {
//         //   console.log("1")
//         //   setOpenMaster(!openMaster);
//         // }
//         // else {
//         //   console.log("2")
//         //   setOpenMaster(false);
//         // }

//     };
//     const handleClickDetail = () => {
//         setOpenDetail(!openDetail);
//     };
//     const handleClickTeam = () => {
//         setOpenTeam(!openTeam);
//     };
//     const handleClickSetting = () => {
//         setopenSetting(!openSetting);
//     };

//     const masterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//         setAnchorEl(event.currentTarget);
//     };
//     const detailClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//         setAnchorEl2(event.currentTarget);
//     };
//     const teamClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//         setAnchorEl3(event.currentTarget);
//     };
//     const settingClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//         setAnchorEl5(event.currentTarget);
//     };
//     const profieClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//         setAnchorEl4(event.currentTarget);
//     };
//     const masterClose = (event: any,) => {
//         let page = event.target.innerText.trim();
//         switch (page) {
//             case "Suppliers": {
//                 setAnchorEl(null);
//                 toggleDrawer(setAnchorEl, true)
//                 history.push("/suppliers");
//                 break;
//             }
//             case "Buyers": {
//                 setAnchorEl(null);
//                 history.push("/buyers");
//                 break;
//             }
//             case "Categories": {
//                 setAnchorEl(null);
//                 history.push("/categories");
//                 break;
//             }
//             case "Units": {
//                 setAnchorEl(null);
//                 history.push("/units");
//                 break;
//             }

//             case "Branches": {
//                 setAnchorEl(null);
//                 history.push("/branches");
//                 break;
//             }
//             case "InvoiceSetting": {
//                 setAnchorEl(null);
//                 history.push("/InvoiceSetting");
//                 break;
//             }

//             case "Buyers": {
//                 setAnchorEl(null);
//                 history.push("/buyers");
//                 break;
//             }
//             case "Products": {
//                 setAnchorEl(null);
//                 history.push("/products");
//                 break;
//             }
//             case "Taxes": {
//                 setAnchorEl(null);
//                 history.push("/taxes");
//                 break;
//             }
//             default: {
//                 setAnchorEl(null);
//             }
//         }
//     };
//     const detailClose = (event: any) => {
//         let page = event.target.innerText.trim();
//         switch (page) {
//             case "Purchase": {
//                 setAnchorEl2(null);
//                 history.push("/purchase");
//                 break;
//             }
//         }
//         switch (page) {
//             case "Invoice": {
//                 setAnchorEl2(null);
//                 history.push("/invoice");
//                 break;
//             }
//         }
//         switch (page) {
//             case "Stock": {
//                 setAnchorEl2(null);
//                 history.push("/stock");
//                 break;
//             }
//             default: {
//                 setAnchorEl2(null);
//             }
//         }
//         switch (page) {
//             case "InvoiceReturn": {
//                 setAnchorEl2(null);
//                 history.push("/invoicereturn");
//                 break;
//             }
//             default: {
//                 setAnchorEl2(null);
//             }
//         }
//     };

//     const teamClose = (event: any) => {
//         let page = event.target.innerText.trim();
//         switch (page) {
//             case "Admins": {
//                 setAnchorEl3(null);
//                 history.push("/admins");
//                 break;
//             }

//             case "Admins/User": {
//                 setAnchorEl3(null);
//                 history.push("/user");
//                 break;
//             }
//             case "Staff": {
//                 setAnchorEl3(null);
//                 history.push("/staff");
//                 break;
//             }
//             default: {
//                 setAnchorEl3(null);
//             }
//         }
//         setAnchorEl3(null);
//     };

//     const profileClose = (page: string) => {
//         //let page = event.target.innerText;
//         switch (page) {
//             case "My Profile": {
//                 setAnchorEl4(null);
//                 history.push("/my-profile");
//                 break;
//             }
//             default: {
//                 setAnchorEl4(null);
//             }
//         }
//         setAnchorEl4(null);
//     };
//     const settingClose = (event: any) => {
//         let page = event.target.innerText.trim();
//         switch (page) {
//             case "Branches": {
//                 setAnchorEl5(null);
//                 history.push("/branches");
//                 break;
//             }
//             case "Invoice Setting": {
//                 setAnchorEl5(null);
//                 history.push("/invoice-Setting");
//                 break;
//             }
//             default: {
//                 setAnchorEl5(null);
//             }
//         }
//         setAnchorEl5(null);
//     };


//     const list = (anchor: Anchor) => (
//         <Box
//             sx={{ width: 250 }}
//             role="presentation"
//         >
//             <List>
//                 <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
//                 </Box>
//                 <ListItemButton onClick={toggleDrawer(anchor, false)}>
//                     <ListItemText primary="Dashboard" />
//                 </ListItemButton>

//                 <ListItemButton onClick={toggleDrawer(anchor, false)}>
//                     <ListItemText primary="Consumers" />
//                 </ListItemButton>

//                 <ListItemButton onClick={handleClickMaster} >
//                     <ListItemText primary="Master" />
//                     {openMaster ? <ExpandLess /> : <ExpandMore />}
//                 </ListItemButton>
//                 <Collapse in={openMaster} timeout="auto" unmountOnExit>
//                     <List component="div" disablePadding>
//                         <ListItemButton sx={{ pl: 4 }} onClick={toggleDrawer(anchor, false)}>
//                             <ListItemText primary="Suppliers" />
//                         </ListItemButton>
//                         <ListItemButton sx={{ pl: 4 }} onClick={toggleDrawer(anchor, false)} >
//                             <ListItemText primary="Buyers" />
//                         </ListItemButton>

//                         <ListItemButton sx={{ pl: 4 }} onClick={toggleDrawer(anchor, false)}>
//                             <ListItemText primary="Products" />
//                         </ListItemButton>
//                         <ListItemButton sx={{ pl: 4 }} onClick={toggleDrawer(anchor, false)}>
//                             <ListItemText primary="Taxes" />
//                         </ListItemButton>
//                         <ListItemButton sx={{ pl: 4 }} onClick={toggleDrawer(anchor, false)}>
//                             <ListItemText primary="Units" />
//                         </ListItemButton>
//                     </List>
//                 </Collapse>
//                 <ListItemButton onClick={handleClickDetail}>
//                     <ListItemText primary="Transactions" />
//                     {openDetail ? <ExpandLess /> : <ExpandMore />}
//                 </ListItemButton>
//                 <Collapse in={openDetail} timeout="auto" unmountOnExit>
//                     <List component="div" disablePadding>
//                         <ListItemButton sx={{ pl: 4 }} onClick={toggleDrawer(anchor, false)}>
//                             <ListItemText primary="Purchase" />
//                         </ListItemButton>
//                         <ListItemButton sx={{ pl: 4 }} onClick={toggleDrawer(anchor, false)}>
//                             <ListItemText primary="Invoice" />
//                         </ListItemButton>
//                         <ListItemButton sx={{ pl: 4 }} onClick={toggleDrawer(anchor, false)}>

//                             <ListItemText primary="Stock" />
//                         </ListItemButton>
//                     </List>
//                 </Collapse>
//                 <ListItemButton onClick={handleClickTeam}>
//                     <ListItemText primary="Team" />
//                     {openTeam ? <ExpandLess /> : <ExpandMore />}
//                 </ListItemButton>
//                 <Collapse in={openTeam} timeout="auto" unmountOnExit>
//                     <List component="nav" disablePadding>
//                         <ListItemButton sx={{ pl: 4 }} onClick={toggleDrawer(anchor, false)}>
//                             <ListItemText primary="Admins/Users" />
//                         </ListItemButton>
//                     </List>
//                     <List component="nav" disablePadding>
//                         <ListItemButton sx={{ pl: 4 }} onClick={toggleDrawer(anchor, false)}>
//                             <ListItemText primary="Staff" />
//                         </ListItemButton>
//                     </List>
//                 </Collapse>
//                 <ListItemButton onClick={handleClickSetting}>
//                     <ListItemText primary="Settings" />
//                     {open ? <ExpandLess /> : <ExpandMore />}
//                 </ListItemButton>
//                 <Collapse in={openSetting} timeout="auto" >
//                     <List component="div" disablePadding>
//                         <ListItemButton sx={{ pl: 4 }} onClick={toggleDrawer(anchor, false)}>
//                             <ListItemText primary="Branches" />
//                         </ListItemButton>
//                     </List>
//                 </Collapse>
//                 <ListItemButton onClick={toggleDrawer(anchor, false)}>
//                     <ListItemText primary="GST Report" />
//                 </ListItemButton>
//             </List>
//         </Box >
//     );


//     useEffect(() => {
//         setOpenMaster(!openMaster);
//         setOpenDetail(false);
//         setOpenTeam(false);
//         setopenSetting(false);
//     }, []);


//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <AppBar position="static" className="app-bar" enableColorOnDark>
//                 <Toolbar>
//                     {matches ? (
//                         <IconButton
//                             size="large"
//                             edge="start"
//                             color="inherit"
//                             aria-label="menu"
//                             //sx={{ mr: 2 }}
//                             onClick={toggleDrawer("left", true)}
//                         >
//                             <MenuIcon onClick={toggleDrawer("left", true)} />
//                         </IconButton>
//                     ) : (
//                         <>
//                             <Grid >
//                                 <Button
//                                     color="inherit"
//                                     className="manuButton"
//                                     onClick={dashboardClick}
//                                 >
//                                     Dashboard
//                                 </Button>
//                                 <Button
//                                     color="inherit"
//                                     className="manuButton"
//                                     onClick={consumerClick}
//                                 >
//                                     Consumers
//                                 </Button>
//                                 <Button
//                                     id="menuMaster"
//                                     aria-controls={open ? "popoverMaster" : undefined}
//                                     aria-haspopup="true"
//                                     aria-expanded={open ? "true" : undefined}
//                                     onClick={masterClick}
//                                     endIcon={<KeyboardArrowDownSharp />}
//                                     color="inherit"
//                                     className="manuButton"
//                                 >
//                                     Master
//                                 </Button>
//                                 <Menu
//                                     id="popoverMaster"
//                                     anchorEl={anchorEl}
//                                     open={open}
//                                     onClose={masterClose}
//                                     MenuListProps={{
//                                         "aria-labelledby": "menuMaster",
//                                     }}
//                                 >
//                                     <MenuItem onClick={masterClose}>Suppliers</MenuItem>
//                                     <MenuItem onClick={masterClose}>Buyers</MenuItem>
//                                     <MenuItem onClick={masterClose}>Products</MenuItem>
//                                     <MenuItem onClick={masterClose}>Taxes</MenuItem>
//                                     <MenuItem onClick={masterClose}>Units</MenuItem>
//                                 </Menu>
//                                 <Button
//                                     id="menuTransactions"
//                                     aria-controls={open2 ? "popoverTransactions" : undefined}
//                                     aria-haspopup="true"
//                                     aria-expanded={open2 ? "true" : undefined}
//                                     onClick={detailClick}
//                                     endIcon={<KeyboardArrowDownSharp />}
//                                     color="inherit"
//                                     className="manuButton"
//                                 >
//                                     Transactions
//                                 </Button>
//                                 <Menu
//                                     id="popoverTransactions"
//                                     anchorEl={anchorEl2}
//                                     open={open2}
//                                     onClose={detailClose}
//                                     MenuListProps={{
//                                         "aria-labelledby": "popoverMasterTransactions",
//                                     }}
//                                 >
//                                     <MenuItem onClick={detailClose}>Purchase</MenuItem>
//                                     <MenuItem onClick={detailClose}>Invoice</MenuItem>
//                                     <MenuItem onClick={detailClose}>Stock</MenuItem>
//                                     {/* <MenuItem onClick={detailClose}>InvoiceReturn</MenuItem> */}
//                                 </Menu>
//                                 <Button
//                                     id="menuTeam"
//                                     aria-controls={open3 ? "popoverTeam" : undefined}
//                                     aria-haspopup="true"
//                                     aria-expanded={open3 ? "true" : undefined}
//                                     onClick={teamClick}
//                                     endIcon={<KeyboardArrowDownSharp />}
//                                     color="inherit"
//                                     className="manuButton"
//                                 >
//                                     Team
//                                 </Button>
//                                 <Menu
//                                     id="popoverTeam"
//                                     anchorEl={anchorEl3}
//                                     open={open3}
//                                     onClose={teamClose}
//                                     MenuListProps={{
//                                         "aria-labelledby": "menuTeam",
//                                     }}
//                                 >
//                                     <MenuItem onClick={teamClose}>Admins/User</MenuItem>
//                                     <MenuItem onClick={teamClose}>Staff</MenuItem>
//                                 </Menu>
//                             </Grid>
//                         </>
//                     )}
//                 </Toolbar>
//                 <SwipeableDrawer
//                     anchor="left"
//                     open={state["left"]}
//                     onClose={toggleDrawer("left", false)}
//                     onOpen={toggleDrawer("left", true)}
//                 >
//                     {list("left")}
//                 </SwipeableDrawer>
//             </AppBar>
//         </Box>
//     );
// }
