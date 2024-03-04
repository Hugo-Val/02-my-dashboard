import Image from "next/image";
import { IoBrowsersOutline, IoCalculator, IoFootball, IoLogoReact } from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
    {
        path: "/dashboard/main",
        icon: <IoBrowsersOutline size={40} />,
        title: "Dashboard",
        subTitle: "Vizualization of Data"
    },
    {
        path: "/dashboard/counter",
        icon: <IoCalculator size={40} />,
        title: "Counter",
        subTitle: "Counter Client Side State"
    },
    {
        path: "/dashboard/pokemons",
        icon: <IoFootball size={40} />,
        title: "Pokemons",
        subTitle: "Static Generation"
    }
]; 

export const Sidebar = () => {
    return (
        <div id="menu" 
            style={{ width: "400px" }}
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll">

            <div id="logo" className="my-4 px-6">
                <h1 className="text-lg md:text-2xl font-bold text-white">
                    <IoLogoReact className="m-2 inline-block text-blue-500" />
                    <span>
                        Dash
                    </span>
                    <span className="text-blue-500">8</span>
                    .
                </h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>

            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image 
                            className="rounded-full w-8 h-8" 
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c" 
                            alt="User Avatar"
                            width={50}
                            height={50} 
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Hugo Valencia
                    </span>
                </a>
            </div>

            <div id="nav" className="w-full px-6">
                {
                    menuItems.map(item => (
                        <SidebarMenuItem
                            key={item.path}
                            path={item.path}
                            icon={item.icon}
                            title={item.title}
                            subTitle={item.subTitle}
                        /> 
                    ))
                }

                

                

            </div>
        </div>
    );
}