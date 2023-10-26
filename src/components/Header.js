import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import Avatar from "@mui/material/Avatar";
import { Avatar } from "antd";
import {
  DownOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Menu } from "antd";
import { styled } from "@mui/system";
import "../App.css";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const url =
  "https://i.pinimg.com/236x/8b/58/92/8b5892170b8088104ffa26ec24850dd6.jpg";

//CSS component
const CustomBottomNavigation = styled(BottomNavigation)`
  margin-left: 15%;
  background-color: #00b14f;
`;

const CustomBottomNavigationAction = styled(BottomNavigationAction)`
  margin: 0 10%;
  color: white;
  padding: 0;
`;

const CustomToolbar = styled(Toolbar)`
  background-color: #00b14f;
`;

const CustomAvatar = styled(Avatar)`
  margin-left: 43%;
  margin-right: 1%;
`;

const CustomFormControl = styled(FormControl)`
  margin-left: 1%;
  border: none;
`;

const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        Profile
      </a>
    ),
    icon: <ProfileOutlined />,
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        Settings
      </a>
    ),
    icon: <SettingOutlined />,
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        Help
      </a>
    ),
    icon: <QuestionCircleOutlined />,
  },
  {
    key: "4",
    danger: true,
    label: (
      <a target="_blank" rel="noopener noreferrer">
        Log Out
      </a>
    ),
  },
];

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
          <CustomBottomNavigationAction label="Trang chủ" />
          <CustomBottomNavigationAction label="Về chúng tôi" />
          <CustomBottomNavigationAction label="Khảo sát" />
        </CustomBottomNavigation>
        {/* <CustomAvatar
          alt="Ducki"
          src="https://i.pinimg.com/564x/04/55/2e/04552e8c76b3e5dec67bd23345b26971.jpg"
          sx={{ width: 56, height: 56 }}
        /> */}
          <CustomAvatar
            src={<img src={url} alt="avatar" className="avatar-image" />}
          />
          <Typography variant="h7">John Doe</Typography>
          <CustomFormControl variant="outlined" sx={{}}>
            <Dropdown overlay={<Menu items={items} />} trigger={["hover"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </CustomFormControl>
      </CustomToolbar>
    </AppBar>

    //  </div>
  );
};

export default Header;
