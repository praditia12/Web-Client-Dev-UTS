import React from "react";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Work from "../../components/work/Work";
import Portofolio from "../../components/portofolio/Portofolio";
import Testimonials from "../../components/testimonials/Testimonials";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Work />
            <Portofolio />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default HomePage;
