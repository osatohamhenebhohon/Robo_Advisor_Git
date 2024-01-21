

import { FaInstagram } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { RxLinkedinLogo } from "react-icons/rx";

const footerList = [
  {
    title: "About",
    List: [
      { list: "Our Company" },
      { list: "Career" },
      { list: "Robo Advisor Foundation" },
      { list: "Social program" },
    ],
  },

  {
    title: "Products",
    List: [
      { list: "Managed investing" },
      { list: "Self-directed investing" },
      { list: "Private credit" },
      { list: "Private equity" },
      { list: "Cash" },
      { list: "Crypto" },
    ],
  },

  {
    title: "Account",
    List: [
      { list: "RRSP" },
      { list: "TFSA" },
      { list: "FHSA" },
      { list: "Non-registered account" },
      { list: "Spousal RRSP" },
      { list: "RESP" },
      { list: "Corporate" },
      { list: "NAIRA" },
      { list: "All acounts" },
    ],
  },
  {
    title: "Legal",
    List: [
      { list: "Accessibility" },
      { list: "Privacy policy" },
      { list: "Terms of use" },
    ],
  },
  {
    title: "Social",
    List: [
      { list: "Instagram", icon: <FaInstagram /> },
      //   { list: "X", icon: <RiTwitterXLine /> },
      { list: "Youtube", icon: <SiYoutube /> },
      { list: "LinkedIn", icon: <RxLinkedinLogo /> },
    ],
  },
];
export default footerList;
