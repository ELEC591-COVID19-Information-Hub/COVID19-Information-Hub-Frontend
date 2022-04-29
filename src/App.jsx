import React from 'react'
import './App.css';
import {Map} from "./components/Map";
import {Main} from "./components/Main";
import {Box, Button, Container, MenuItem, Stack, Typography} from "@mui/material";
import {Menu} from "@mui/material";
import {StyledEngineProvider} from '@mui/material/styles';
import LoginPage from "./components/login_page"
import {put} from "./util";

const local_storage_key = "logged_in_user"

function App() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [username, setUsername] = React.useState("");
    const [displayLoginPage, setDisplayLoginPage] = React.useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        if (username === "") {
            // Login
            setDisplayLoginPage(true)
        } else {
            setAnchorEl(event.currentTarget);
        }
    };
    React.useEffect(() => {

        let user = localStorage.getItem(local_storage_key)
        if (user !== null && user !== undefined) {
            setUsername(user)
        }
    }, [])
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = async () => {
        await put("/logout");
        setUsername("")
        localStorage.removeItem(local_storage_key)
        setAnchorEl(null);
    };

    return (
        <div>
            <Box minWidth={"100%"} display={"flex"} justifyContent={"space-between"} minHeight={"0%"}
                 alignItems={"center"}>
                <div/>
                <Typography variant={"h2"}>
                    Covid-19 Information HUB
                </Typography>
                <Box>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <Typography>
                            {username === "" ? "Log In / Sign Up" : username}
                        </Typography>
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleLogout}>Log out</MenuItem>
                    </Menu>
                </Box>
            </Box>

            {displayLoginPage ? <LoginPage setUsername={setUsername} setDisplayLoginPage={setDisplayLoginPage}/> :
                <Main currentUser={username}/>}
        </div>
    )
}

export default App;
