import '../../assets/style/manufact.css';
import '../../assets/style/utilities.css';
import { Helmet } from 'react-helmet';

export default function Manufacture() {
    return (
        <>
            <Helmet>
                <title> Top-Quality CNC Lathe, VMC, and Contourecord 1600G Manufacturing </title>
                <meta name="description" content="Check out our precision manufacturing using CNC Lathe, VMC, and Contourecord 1600G machines! We create high-quality products designed just for you, with a focus on excellence and reliability." />
            </Helmet>

            <main className="container">
                <div className="mt-4">
                    <h1 className="headers">
                        Manufacturing <span className="special-style">Facility</span>
                    </h1>
                    <div className="title-space" />
                </div>
                <div>
                    <div className="manufacture-machines">
                        <div className="manufacture-image">
                            <img src="./assets/images/manufature-images/image 13.png" alt="" />
                            <h5>CNC LATHE</h5>
                        </div>
                        <div>
                            <p>CNC Lathe With Chuck Dia 200mm along with Tailstock Centre </p>
                            <p>Max. Dia for machining 300mm and Max. Length 500mm</p>
                            <p>
                                Computer numerical control (CNC) is a manufacturing method that
                                automates the control, movement and precision of machine tools through
                                the use of preprogrammed computer software, which is embedded inside
                                the tools.
                            </p>
                        </div>
                    </div>
                    <div className="manufacture-machines">
                        <div className="manufacture-image">
                            <img
                                src="./assets/images/manufature-images/image 14.png"
                                alt=""
                                width="400px"
                            />
                            <h5>VMC</h5>
                        </div>
                        <div>
                            <p>
                                Vertical Machining Centers, also known as Vertical Milling Machines,
                                create holes in flat parts. The VMC technology is favored when
                                three-axis work is done on a single face, such as in-mold and die
                                works.
                            </p>
                            <p>
                                Multiple adjustments are available on VMCs. For example, on the
                                worktable, there are numerous angles of approach and rotating and
                                other positioning devices. The incorporated computerized controls
                                enable automation, repeatability, tool selection/change, and contour
                                control. These new CNC machines raised the productivity of the
                                “milling” machine to unprecedented heights, giving rise to the term
                                VMC (Vertical Machining Center).
                            </p>
                        </div>
                    </div>
                    <div className="manufacture-machines">
                        <div className="manufacture-image">
                            <img
                                src="./assets/images/manufature-images/image_15-removebg-preview.png"
                                alt=""
                                width="400px"
                                height="100%"
                            />
                            <h5>CONTOURECORD 1600G</h5>
                        </div>
                        <div>
                            <ul>
                                <li>The flexible measuring station for contour measurements</li>
                                <li>Ease of use for efficiency</li>
                                <li>Fast, easy and precise completion of contour measuring tasks</li>
                                <li>Patented linear motor technology</li>
                                <li>High straightness accuracy and glass scale in the X axis</li>
                                <li>Extensive accessories enable a large range of applications</li>
                                <li>All axes CNC controlled* Automated calibration function</li>
                                <li>
                                    Software compensates for sensing arm and stylus tip geometries
                                </li>
                                <li>Upgradeable using modularly adaptable CNC tables</li>
                                <li>Also expandable for 2D and 3D surface measuring tasks</li>
                                <li>
                                    Fully enclosed DX version with integrated active vibration damping
                                </li>
                                <li>
                                    Contourecord 1700 with inductive displacement transducer (LVDT) in
                                    the probing system
                                </li>
                                <li>
                                    Contourecord 2700 with optical diffraction scale in the probing
                                    system (Z axis) for maximum demands on accuracy
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}