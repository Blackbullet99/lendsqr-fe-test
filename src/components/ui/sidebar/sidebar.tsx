"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import {
  bargePercent,
  bank,
  breifcase,
  chartbar,
  clipboard,
  coinsSolid,
  downArrow,
  handShake,
  home,
  loan,
  piggyBank,
  sack,
  scroll,
  service,
  signOut,
  slider,
  tire,
  transaction,
  userCheck,
  userCog,
  userFriends,
  userTimes,
  user,
  rightArrow,
} from "../../../../public/icon";

const sideBarLinks = [
  {
    title: "Customer",
    detail: [
      { label: "Users", icon: userFriends, link: "/dashboard/user" },
      {
        label: "Guarantors",
        icon: user,
        link: "/dashboard/guarantors",
      },
      { label: "Loans", icon: sack, link: "/dashboard/loans" },
      {
        label: "Decision Models",
        icon: handShake,
        link: "/dashboard/decision-models",
      },
      { label: "Savings", icon: piggyBank, link: "/dashboard/savings" },
      {
        label: "Loan Requests",
        icon: loan,
        link: "/dashboard/loan-request",
      },
      { label: "Whitelist", icon: userCheck, link: "/dashboard/whitelist" },
      { label: "karma", icon: userTimes, link: "/dashboard/karma" },
    ],
  },
  {
    title: "Businesses",
    detail: [
      {
        label: "Organization",
        icon: breifcase,
        link: "/dashboard/organization",
      },
      {
        label: "Loan Products",
        icon: loan,
        link: "/dashboard/loan-products",
      },
      {
        label: "Savings Products",
        icon: bank,
        link: "/dashboard/savings-products",
      },
      {
        label: "Fees and Charges",
        icon: coinsSolid,
        link: "/dashboard/fees-and-charges",
      },
      {
        label: "Transactions",
        icon: transaction,
        link: "/dashboard/transactions",
      },
      { label: "Services", icon: service, link: "/dashboard/services" },
      {
        label: "Service Account",
        icon: userCog,
        link: "/dashboard/service-account",
      },
      {
        label: "Settlements",
        icon: scroll,
        link: "/dashboard/settlements",
      },
      { label: "Reports", icon: chartbar, link: "/dashboard/reports" },
    ],
  },
  {
    title: "Settings",
    detail: [
      {
        label: "Preferences",
        icon: slider,
        link: "/dashboard/preferences",
      },
      {
        label: "Fees and Pricing",
        icon: bargePercent,
        link: "/dashboard/fees-and-pricing",
      },
      {
        label: "Audit Logs",
        icon: clipboard,
        link: "/dashboard/audit-logs",
      },
      {
        label: "System Messages",
        icon: tire,
        link: "/dashboard/system-messages",
      },
    ],
  },
];

interface sidebarLink {
  label: string;
  icon: any;
  link: string;
}

const Sidebar = () => {
  const [openOrg, setOpenOrg] = useState(true);

  const renderSidebarLinks = (link: sidebarLink) => {
    return (
      <li key={link.label}>
        <Link href={link.link} className={styles.sidebar__link}>
          <Image src={link.icon} alt={link.label} />
          {link.label}
        </Link>
      </li>
    );
  };

  return (
    <div className={styles.sidebar}>
      <aside className={styles.sidebar__container}>
        <div className={styles.sidebar__head}>
          <Image src={breifcase} alt="briefcase" />
          <p>Switch Organization</p>
          {openOrg ? (
            <Image
              src={downArrow}
              alt="downArrow"
              onClick={() => setOpenOrg(!openOrg)}
            />
          ) : (
            <Image
              src={rightArrow}
              alt="rightArrow"
              onClick={() => setOpenOrg(!openOrg)}
            />
          )}
        </div>
        <div className={styles.sidebar__body}>
          <Link href="/dashboard" className={styles.sidebar__link}>
            <Image src={home} alt="home" />
            <p>Dashboard</p>
          </Link>
          {openOrg &&
            sideBarLinks.map((link) => (
              <ul key={link.title}>
                <p>{link.title}</p>
                <>
                  {link.detail.map((detailLink) =>
                    renderSidebarLinks(detailLink)
                  )}
                </>
              </ul>
            ))}
        </div>
        <div className={styles.sidebar__footer}>
          <Link href="/auth/login" className={styles.sidebar__link}>
            <Image src={signOut} alt="signOut" />
            <p>Logout</p>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
