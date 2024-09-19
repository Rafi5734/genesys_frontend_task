import React from 'react';
import NavLogo from "../../assets/Logo/nav_logo.svg"
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
  Button,
} from "@nextui-org/react";
import HumburgerMenu from '../../assets/customIcons/HumburgerMenu';

import "./topNavbar.css"


const TopNavbar = () => {
    return (
      <div className="bg-[#EA2127] w-full overflow-hidden">
        <div className="flex flex-row w-full justify-between items-center pt-6 ps-16 pe-16 navbar_controller">
          <div className="flex flex-row">
            <img
              src={NavLogo}
              height="auto"
              alt="nav_logo"
              className="logo_img"
            />
            <span className="monts text-white font-extrabold text-[112px] tracking-[12px] logo_name">
              VTMERCH
            </span>
          </div>
          <div>
            <Dropdown placement="bottom-end" className="bg-white">
              <DropdownTrigger>
                <Button isIconOnly className="bg-transparent">
                  <HumburgerMenu />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    );
};

export default TopNavbar;
