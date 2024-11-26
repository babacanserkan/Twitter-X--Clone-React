import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { menuItems } from "./menuItems";
import More from "./more";
import NewPost from "./new";
import { Popover } from "@headlessui/react";
import { FaCircleUser } from "react-icons/fa6";

const Menu = () => {
    return (
        <nav className="mt-0.5 mb-1">
            {menuItems?.map((item, key) => (
                <NavLink to={item.path} key={key} className="py-1 block group">
                    {({ isActive }) => (
                        <div
                            className={classNames(
                                "p-3 font-bold rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[#eff3f41a]",
                                { "font-normal": { isActive } }
                            )}>
                            <div className="w-[26.25px] h-[26.25px] relative">
                                {item?.notification && (
                                    <span className="text-xs w-[16px] h-[16px] absolute -top-1.5 -right-1 flex items-center justify-center rounded-full bg-[#1d9bf0]">
                                        {item?.notification}
                                    </span>
                                )}

                                {!isActive && item.icons.passive}
                                {isActive && item.icons.active}
                            </div>

                            <div className="pr-4 text-xl"> {item.title} </div>
                        </div>
                    )}
                </NavLink>
            ))}
            <More />
            <NewPost />
            <Popover className="relative">
                <Popover.Button className="py-[3px] block group outline-none">
                    <button>
                        <div className="p-3 rounded-full transition-colors items-center inline-flex gap-3 group-hover:bg-[#eff3f41a]">
                            <div className="w-[40px] h-[40px]">
                                <FaCircleUser size={38} />
                            </div>
                            <div className="flex flex-col items-start">
                                <p className="font-bold">Serkan Babacan</p>
                                <p className="text-[#71767b]">
                                    @serkanbabacan1
                                </p>
                            </div>
                            <div>
                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    fill="#fff"
                                    className="w-[18.75px] h-[18.75px]">
                                    <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                                </svg>
                            </div>
                        </div>
                    </button>
                </Popover.Button>
                {/* <Popover.Panel className="w-[318px] absolute bottom-0 left-0 bg-black shadow-box rounded-xl overflow-hidden">
                    <button className="p-3 h-14 w-full transition-colors gap-5 hover:bg-[#eff3f41a]">
                        <div className="">var olan bir hesap ekle</div>
                        <div className="pr-4 text-xl font-bold"></div>
                    </button>
                </Popover.Panel> */}
            </Popover>
        </nav>
    );
};

export default Menu;
