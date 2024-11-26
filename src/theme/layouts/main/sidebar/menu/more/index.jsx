import { Popover } from "@headlessui/react";
import { morePanelItems } from "./moreIPanelItems";

const More = () => {
    return (
        <Popover className="relative">
            <Popover.Button className="py-[3px] block group outline-none">
                <button>
                    <div className="p-3 font-bold rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[#eff3f41a]">
                        <div className="w-[26.25px] h-[26.25px] relative">
                            <svg
                                viewBox="0 0 24 24"
                                fill="#e7e9ea"
                                width={26.25}
                                height={26.25}>
                                <path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z" />
                            </svg>
                        </div>
                        <div className="pr-4 text-xl">Daha fazla</div>
                    </div>
                </button>
            </Popover.Button>
            <Popover.Panel className="w-[318px] absolute bottom-0 left-0 bg-black shadow-box rounded-xl overflow-hidden">
                {morePanelItems?.map((item, index) => (
                    <>
                        <button className="p-3 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[#eff3f41a]">
                            <div
                                key={index}
                                className="w-[26.25px] h-[26.25px] relative">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="#e7e9ea"
                                    width={26.25}
                                    height={26.25}>
                                    {item.iconPath}
                                </svg>
                            </div>
                            <div className="pr-4 text-xl font-bold">
                                {item.title}{" "}
                            </div>
                        </button>
                    </>
                ))}
            </Popover.Panel>
        </Popover>
    );
};

export default More;
