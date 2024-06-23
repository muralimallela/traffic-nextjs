"use client";
import { useState, FC } from "react";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { FiLogOut } from "react-icons/fi";
import { Menus } from "./Menus";
import { usePathname } from "next/navigation";

const Sidebar: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [submenuOpenIndex, setSubmenuOpenIndex] = useState<number | null>(null);
  const pathname = usePathname();

  const handleMenuClick = (index: number) => {
    if (Menus[index].submenu) {
      setSubmenuOpenIndex(submenuOpenIndex === index ? null : index);
      setOpen(true);
    } else {
      setOpen(false);
      setSubmenuOpenIndex(null);
    }
  };

  return (
    <div className="flex mt-14 -mb-16 fixed h-5/6 top-0 z-20">
      {open && (
        <div className="fixed inset-0 -z-1 transition-opacity">
          <div
            onClick={() => {
              setOpen(false);
              setSubmenuOpenIndex(null);
            }}
            className="absolute inset-0"
            tabIndex={0}
          ></div>
        </div>
      )}
      <div
        className={`${
          open ? "w-72" : "w-16"
        } bg-black rounded-2xl ml-0.5 p-0 pt-8 relative duration-300 flex flex-col justify-between`}
      >
        <div>
          <Image
            width={40}
            height={40}
            alt="Menu Arrow"
            src="/assets/menuarrow.svg"
            className={`absolute cursor-pointer -right-3 top-[29px] w-8 ${
              !open && "rotate-0"
            } ${open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <div>
              <IoMenu
                onClick={() => setOpen(!open)}
                className={`cursor-pointer ml-1 text-5xl -mt-3 text-white transition-transform duration-500 ${
                  open ? "rotate-[360deg]" : ""
                }`}
              />
            </div>
            <h1
              className={`text-white origin-left font-medium -mt-3 text-3xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              RevRoad
            </h1>
          </div>

          <ul className="pt-6 pl-2">
            {Menus.map((Menu, index) => {
              const isActive = pathname.endsWith(Menu.href || "#");
              const isSubActive = pathname.split("/").includes("report");
              return (
                <li key={index} className="relative">
                  <Link href={Menu.href || "#"}>
                    <div
                      onClick={() => handleMenuClick(index)}
                      className={`flex ${
                        Menu.submenu && isSubActive
                          ? "bg-white text-gray-900"
                          : "rounded-l-3xl text-black"
                      } p-2 cursor-pointer rounded-l-3xl ${
                        (!isActive ) && " text-white"
                      } ${
                        isActive && "bg-white text-black"
                      } text-sm items-center gap-x-4 ${
                        Menu.gap ? "mt-9" : "mt-2"
                      } ${index === 0 && " "}`}
                    >
                      <div>{Menu.src}</div>
                      <span
                        className={`${
                          !open && "hidden"
                        } font-semibold origin-right duration-900`}
                      >
                        {Menu.title}
                      </span>
                    </div>
                  </Link>
                  {Menu.submenu && submenuOpenIndex === index && open && (
                    <ul className="pl-12  rounded-b-3xl shadow-md">
                      {Menu.submenu.map((submenuItem, subIndex) => (
                        <Link key={subIndex} href={submenuItem.href}>
                          <li className="flex items-center rounded-l-3xl text-white pb-3 pl-3">
                            <div
                              onClick={() => setOpen(false)}
                              className="flex items-center  mt-3 w-full cursor-pointer gap-x-4"
                            >
                              <div>{submenuItem.icon}</div>
                              <span>{submenuItem.title}</span>
                            </div>
                          </li>
                        </Link>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mb-6 ml-3">
          <div className={`flex`}>
            <div>
              <FiLogOut className="text-3xl text-white" />
            </div>
            <p
              className={`text-gray-300 font-bold text-md ${
                !open && "hidden"
              } ml-3 mt-0.5`}
            >
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
