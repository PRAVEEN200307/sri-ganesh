import { Link } from "react-router-dom";

export default function Product() {
    return (
        <>
            {/* sample product */}
            <section className="product mt-5">
                <div className="container">
                    <div className="pt-10">
                        <h1 className="headers">
                            Sample <span className="special-style">product</span>
                        </h1>
                        <div className="title-space" />
                        <div className="image-slider">
                            <div className="image-slider-track">
                                <div className="product-slide">
                                    <img src="./assets/images/Product-images/parts-1.png" />
                                </div>
                                <div className="product-slide">
                                    <img src="./assets/images/Product-images/parts-2.png" />
                                </div>
                                <div className="product-slide">
                                    <img src="./assets/images/Product-images/parts-5.png" />
                                </div>
                                <div className="product-slide">
                                    <img src="./assets/images/Product-images/parts-6.png" />
                                </div>
                                <div className="product-slide">
                                    <img
                                        src="./assets/images/Product-images/Rectangle 18.png"
                                        className="bordering"
                                    />
                                </div>
                                <div className="product-slide">
                                    <img
                                        src="./assets/images/Product-images/image 8.png"
                                        className="bordering"
                                    />
                                </div>
                                <div className="product-slide">
                                    <img src="./assets/images/Product-images/Rectangle 19.png" />
                                </div>
                                <div className="product-slide">
                                    <img src="./assets/images/Product-images/Rectangle 20.png" />
                                </div>
                                <div className="product-slide">
                                    <img src="./assets/images/Product-images/Rectangle 21.png" />
                                </div>
                                <div className="product-slide">
                                    <img
                                        src="./assets/images/Product-images/autoparts-removebg-preview 1.png"
                                        className="bordering"
                                    />
                                </div>
                                <div className="product-slide">
                                    <img
                                        src="./assets/images/Product-images/autoparts2-removebg-preview 1.png"
                                        className="bordering"
                                    />
                                </div>
                                <div className="product-slide">
                                    <img
                                        src="./assets/images/Product-images/image 37.png"
                                        className="bordering"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link className="seemore-btn" to="product">
                                See more
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}