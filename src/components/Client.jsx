import { useRef } from "react"

export default function Client() {

    const gallery = useRef();

    function handleWheel(e) {
        gallery.current.scrollLeft += e.deltaY;
        gallery.current.style.scrollBehavior = "auto";
    }

    function handleBackBtn() {
        gallery.current.scrollLeft -= 900
        gallery.current.style.scrollBehavior = "smooth";
    }

    function handleNext() {
        gallery.current.scrollLeft += 900;
        gallery.current.style.scrollBehavior = "smooth";
    }

    return (
        <>
            {/* client page */}
            <section className="container mt-4 clients">
                <div>
                    <h1 className="headers">
                        Our <span className="special-style">clients</span>
                    </h1>
                    <div className="title-space" />
                    <div className="gallery-wrap">
                        <svg
                            id="backBtn"
                            width={112}
                            height={108}
                            viewBox="0 0 112 108"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={handleBackBtn}
                        >
                            <path
                                d="M112 54C112 83.8234 86.9279 108 56 108C25.0721 108 0 83.8234 0 54C0 24.1766 25.0721 0 56 0C86.9279 0 112 24.1766 112 54Z"
                                fill="#088BEA"
                            />
                            <path
                                d="M38.651 54.1954L64.6279 36.4188L65.2325 71.0545L38.651 54.1954Z"
                                fill="#FDFDFD"
                            />
                        </svg>
                        <div className="gallery" ref={gallery} onWheel={handleWheel}>
                            <div>
                                <img src="./assets/images/client/avalon.png" alt="" />
                                <img src="./assets/images/client/BorgWarner.png" alt="" />
                                <img src="./assets/images/client/delphi-tvs.png" alt="" />
                            </div>
                            <div>
                                <img src="./assets/images/client/ipRings.png" alt="" />
                                <img src="./assets/images/client/NfForgings.png" alt="" />
                                <img src="./assets/images/client/tvs.png" alt="" />
                            </div>
                        </div>
                        <svg
                            id="nextBtn"
                            width={112}
                            height={108}
                            viewBox="0 0 112 108"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={handleNext}
                        >
                            <path
                                d="M112 54C112 83.8234 86.9279 108 56 108C25.0721 108 0 83.8234 0 54C0 24.1766 25.0721 0 56 0C86.9279 0 112 24.1766 112 54Z"
                                fill="#088BEA"
                            />
                            <path
                                d="M73.6689 53.3859L48.3281 72.0583L46.5152 37.4647L73.6689 53.3859Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>
            </section>
        </>

    )
}