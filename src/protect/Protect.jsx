import { useNavigate, Outlet } from "react-router-dom";

function Protect() {
    const token = localStorage.getItem('userToken');
     const navigated = useNavigate()
    if (!token) {
        return <button onClick={() => navigated(-1)} className="bg-purple-500 px-7 py-1.5 rounded-3xl flex justify-center items-center w-ful">back</button>;
    }

    return <Outlet />; 
}

export default Protect;
