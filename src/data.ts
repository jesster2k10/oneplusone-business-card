import { IconType } from "react-icons";
import { FaGlobe, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";

export interface Profile {
  title: string;
  subtitle?: string;
  phone?: string;
  email: string;
  links: Link[];
}

export type Link = {
  title: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
};

export const businessProfile: Profile = {
  title: "ONEPLUSONE",
  email: "contact@oneplusone.co",
  links: [
    {
      title: "Website",
      href: "https://oneplusone.co",
      icon: FaGlobe,
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/oneplusoneclothing/",
      icon: FaInstagram,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/company/oneplusoneclothing/",
      icon: FaLinkedin,
    },
  ],
};

export const profiles: Record<string, Profile> = {
  jesse: {
    title: "Jesse Onolememen",
    subtitle: "Chief Executive Officer",
    phone: "+353 (83) 488 2575",
    email: "jesse@oneplusone.co",
    links: [
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/jonolememen/",
        icon: FaLinkedin,
      },
      {
        title: "Instagram",
        href: "https://www.instagram.com/jonolem/",
        icon: FaInstagram,
      },
      {
        title: "WeChat",
        icon: IoLogoWechat,
      },
    ],
  },
  oj: {
    title: "OJ Onolememen",
    subtitle: "Chief Creative Officer",
    phone: "+353 (83) 848 1422",
    email: "oj@oneplusone.co",
    links: [
      {
        title: "Instagram",
        href: "https://www.instagram.com/ojsgram/",
        icon: FaInstagram,
      },
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/oj-onolememen-96a66264/",
        icon: FaLinkedin,
      },
      {
        title: "TikTok",
        href: "https://www.tiktok.com/@ojs.tiktok",
        icon: FaTiktok,
      },
    ],
  },
  oisin: {
    title: "Oisín Weber Hall",
    subtitle: "Chief Operating Officer",
    phone: "+353 (87) 706 4512",
    email: "oisin@oneplusone.co",
    links: [
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/oisin-weber-hall-234268200/",
        icon: FaLinkedin,
      },
    ],
  },
  andrew: {
    title: "Andrew Chapman",
    subtitle: "Creative Director",
    phone: "+353 (87) 706 4512",
    email: "andrew@oneplusone.co",
    links: [],
  },
};
