import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/system";
import "../App.css";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

//CSS component
const CustomBottomNavigation = styled(BottomNavigation)`
  margin-left: 15%;
  background-color: green;
`;

const CustomBottomNavigationAction = styled(BottomNavigationAction)`
  margin: 0 10%;
  color: white;
  padding: 0 5%;
`;

const CustomToolbar = styled(Toolbar)`
  background-color: green;
`;

const CustomAvatar = styled(Avatar)`
  margin-left: 43%;
  margin-right: 1%;
`;

const CustomFormControl = styled(FormControl)`
  margin-left: 1%;
`;

const Header = () => {
  const [value, setValue] = React.useState(0);
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    // <div className="header-container">
    <AppBar position="static">
      <CustomToolbar>
        <Typography variant="h6">Survey Now</Typography>
        <CustomBottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <CustomBottomNavigationAction label="Home" />
          <CustomBottomNavigationAction label="About us" />
          <CustomBottomNavigationAction label="New Survey" />
        </CustomBottomNavigation>
        <CustomAvatar
          alt="Remy Sharp"
          src="https://i.pinimg.com/564x/04/55/2e/04552e8c76b3e5dec67bd23345b26971.jpg"
          sx={{ width: 56, height: 56 }}
        />
        <Typography variant="h7">Ducki</Typography>
        <CustomFormControl variant="outlined" sx={{ backgroundColor: 'transparent' }}>
        <InputLabel id="dropdown-label"></InputLabel>
        <Select
          labelId="dropdown-label"
          id="dropdown"
          value={selectedValue}
          onChange={handleChange}
          label="Select an Option"
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value="option1">Profile</MenuItem>
          <MenuItem value="option2">Settings</MenuItem>
          <MenuItem value="option3">Sign Out</MenuItem>
        </Select>
      </CustomFormControl>
      </CustomToolbar>
    </AppBar>

    //  </div>
  );
};

export default Header;
