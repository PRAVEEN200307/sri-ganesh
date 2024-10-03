import Tables from "../components/Tables";
import { ToastContainer } from 'react-toastify';


export default function Dashboard() {
    return (
        < >
            <header className="container  p-3">
                <h5>Welcome back ,Sri Ganesh Engineering</h5>
            </header>
            <main className="  bg-light">
                <div className="container p-5">
                    <h3>User List</h3>
                     <Tables />
                </div>
            </main>

            <ToastContainer />

        </>
    )
}
