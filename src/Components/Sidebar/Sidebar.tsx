"use client";

// React
import React from "react";
// React

// CSS
import styles from "./Sidebar.module.css";
// CSS

// Icons
import { FcHome } from "react-icons/fc";
import { FcOnlineSupport } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
// Icons

// Utils
import { Tooltip } from "react-tooltip";
import Link from "next/link";
// Utils

const Sidebar = () => {
  return (
    <div
      className={`${styles.sidebarContainer} w-12 h-full flex flex-col items-center justify-center pr-1`}
    >
      <Tooltip id="sidebarTooltip" />
      <Link href={"/"}>
        <FcHome
          data-tooltip-id="sidebarTooltip"
          data-tooltip-content="خانه"
          data-tooltip-place="left"
        />
      </Link>
      <Link href={"/profile"}>
        <FcReadingEbook
          data-tooltip-id="sidebarTooltip"
          data-tooltip-content="پروفایل"
          data-tooltip-place="left"
        />
      </Link>

      <Link href={"/support"}>
        <FcOnlineSupport
          data-tooltip-id="sidebarTooltip"
          data-tooltip-content="پشتیبانی"
          data-tooltip-place="left"
        />
      </Link>
    </div>
  );
};

export default Sidebar;
