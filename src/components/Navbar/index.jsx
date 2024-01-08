import {
    HomeFilled,
    MailFilled,
    ProjectFilled,
    UserOutlined,
} from "@ant-design/icons";
import React from "react";

const Navbar = () => {
    return (
        <div className="flex flex-col justify-center gap-10 items-center bg-[#212121] border-r border-r-[#4c4b4b] h-screen w-20 fixed top-0 left-0 max-sm:hidden">
            <a
                href="/"
                className="font-rm text-6xl text-[#00FF85] border-b border-b-[#4c4b4b] p-4"
            >
                <img src="/assets/img/Plogo.png" alt="Logo" />
            </a>
            <ul className="nav flex flex-col gap-10">
                <li className="flex">
                    <a href="#home" className="p-4 bg-[#494a4d] rounded-md">
                        <HomeFilled
                            style={{
                                color: "#00FF85",
                                fontSize: 26,
                            }}
                        />
                    </a>
                </li>
                <li className="flex">
                    <a href="#about" className="p-4 rounded-md">
                        <UserOutlined
                            style={{
                                color: "#00FF85",
                                fontSize: 26,
                            }}
                        />
                    </a>
                </li>
                <li className="flex">
                    <a href="#project" className="p-4 rounded-md">
                        <ProjectFilled
                            style={{
                                color: "#00FF85",
                                fontSize: 26,
                            }}
                        />
                    </a>
                </li>
                <li className="flex">
                    <a href="#contact" className="p-4 rounded-md">
                        <MailFilled
                            style={{
                                color: "#00FF85",
                                fontSize: 26,
                            }}
                        />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
