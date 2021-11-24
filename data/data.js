import {
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { GiFootprint } from "react-icons/gi";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/services",
    text: "services",
  },
  {
    id: 3,
    url: "/about",
    text: "about",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
];

export const social = [
  {
    id: 1,
    url: "/",
    icon: <GiFootprint />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
  {
    id: 4,
    url: "https://www.youtube.com",
    icon: <FaYoutube />,
  },
  {
    id: 5,
    url: "https://www.facebook.com",
    icon: <FaFacebookSquare />,
  },
];
