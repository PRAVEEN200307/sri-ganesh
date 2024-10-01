export default function Banner() {
    return (
        <section>
            {/* slider */}
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                    />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval={4000}>
                        <img
                            src="./assets/images/Home page/TPI-CNC-Machining.jpg"
                            className="d-block w-100 image-adjace "
                            alt="cnc image"
                        />
                    </div>
                    <div className="carousel-item" data-bs-interval={2000}>
                        <img
                            src="./assets/images/Home page/Top-10-CNC-Machine-Manufacturers-in-2023.jpg"
                            className="d-block w-100 image-adjace"
                            alt="cnc image"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="./assets/images/Home page/AdobeStock_172041052-1-scaled.jpeg"
                            className="d-block w-100 image-adjace"
                            alt="cnc image"
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    )
}