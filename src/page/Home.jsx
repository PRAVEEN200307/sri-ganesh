import { Helmet } from "react-helmet";

import AboutUS from "../components/AboutUs";
import Banner from "../components/Banner";
import Product from "../components/Product";
import Client from "../components/Client";
import Map from "../components/Map";

import '../../assets/style/utilities.css';
import '../../assets/style/home.css'

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home | Sri ganesh engineering - All kind of Cnc precision parts Manufactuturing </title>
                <meta name="description" content="Explore MMF, your trusted partner for closed die forgings! With 22 years of experience,we deliver high-quality products on time at competitive prices, ensuring total customer satisfaction" />
            </Helmet>

            <Banner />
            <AboutUS />
            <Product />
            <Client />
            <Map />
        </>
    )
}