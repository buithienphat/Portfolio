import { useEffect } from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import About from "./components/About";

function App() {
    useEffect(() => {
        document.addEventListener("DOMContentLoaded", function () {
            // Get all the navigation links
        });
        var navLinks = document.querySelectorAll(".nav li");

        console.log("navLinks", navLinks);

        // Add click event listener to each link
        navLinks.forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();

                // Get the target section ID from the href attribute
                var targetId =
                    e.target.parentElement.parentElement.parentElement
                        .getAttribute("href")
                        .substring(1);
                var targetSection = document.getElementById(targetId);

                targetSection.scrollIntoView({
                    behavior: "smooth",
                });
                // const check = e.t;
            });
        });
        // navLinks.forEach(function (link) {
        //     link.addEventListener("click", function (e) {
        //         e.preventDefault();
        //         // Get the target section ID from the href attribute
        //         var targetId = this.getAttribute("href").substring(1);

        //         // Get the corresponding section element
        //         var targetSection = document.getElementById(targetId);

        //         // Scroll to the section
        //         window.scroll({
        //             behavior: "smooth",
        //         });
        //     });
        // });
    }, []);

    return (
        <div className="mx-auto font-poppins pl-[135px] pr-[55px] bg-black text-white text-base relative max-md:pl-[100px] max-md:pr-[20px] max-sm:px-5">
            {/* <header></header> */}
            <Navbar />
            <Home />
            <About />
            <Project />
            <Contact />
        </div>
    );
}

export default App;
