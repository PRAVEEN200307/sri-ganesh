export default function AboutUS() {
    return (
        <>
            {/* About us */}
            <section className="container">
                <div>
                    {/* title */}
                    <div className="mt-4">
                        <h1 className="headers">
                            About <span className="special-style">us</span>
                        </h1>
                        <div className="title-space" />
                    </div>
                    {/* content and image */}
                    <div className="row">
                        {/* paragraph */}
                        <div className="pt-3 col-lg">
                            <p className="text-decoration">
                                <span className="fs-1 experience">22</span>
                                <span className="fw-bold">
                                    {" "}
                                    YEAR OF RICH EXPERIENCE IN ALL TYPE OF MACHINE
                                </span>
                                Founded on the tradition and philosophy of steadfast commitment to
                                achieving “Total Customer Satisfaction” through excellent quality,
                                on time deliveries and competitive pricing, the Company has grown
                                steadily in strength and stature to attain its present recognition
                                of being one of the largest exporter of forgings in India in its
                                product range and has created a niche in the global market.With its
                                presence pan India and near to the customers, MMF is placing itself
                                as a one stop shop for the closed die forgings needs of both
                                domestic and international customers. “Forging Excellence” in terms
                                of quality of products and relationship with stake holders is the
                                theme of the company.
                            </p>
                        </div>
                        {/* propagator image */}
                        <div className="proprietor col-lg ">
                            <img src="./assets/images/Home page/propogator.svg" alt="" />
                            <div className="stamp-proprietor ">
                                <h4 className="fw-bold">N.Mohanraj </h4>
                                <h5 className="ps-3">Proprietor</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

