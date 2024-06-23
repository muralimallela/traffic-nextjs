import { IoIosAddCircleOutline } from "react-icons/io";
import { PiAmbulanceFill } from "react-icons/pi";
import { ImHome } from "react-icons/im";
import { ReactElement } from "react";
import { FaCarCrash, FaTrafficLight, FaExclamationTriangle } from "react-icons/fa";


interface Submenu {
  title: string;
  href: string;
  icon: ReactElement;
}

interface Menu {
  title: string;
  src: ReactElement;
  gap?: boolean;
  href?: string;
  submenu?: Submenu[];
}

export const Menus: Menu[] = [
  {
    title: "Home",
    src: <ImHome className={`text-3xl ml-1`} />,
    gap: false,
    href: "/dashboard",
  },
  {
    title: "New_Report",
    src: (
      <div className="bg-[#8B68F7] rounded-full">
        <IoIosAddCircleOutline className={`text-4xl text-white`} />
      </div>
    ),
    submenu: [
      { title: "Violation", href: "/dashboard/report/violation", icon: <FaExclamationTriangle className="text-lg" /> },
      { title: "Accident", href: "/dashboard/report/accident", icon: <FaCarCrash className="text-lg" /> },
      { title: "Traffic", href: "/dashboard/report/traffic", icon: <FaTrafficLight className="text-lg" /> },
    ],
  },
  {
    title: "Ambulance",
    src: <PiAmbulanceFill className={`text-4xl ml-1`} />,
    href: "/dashboard/ambulance",
  },
];
