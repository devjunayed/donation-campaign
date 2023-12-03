import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    var [seconds, setSeconds] = useState(10);
    const navigate = useNavigate();

    useEffect(()=>{
        const interval = setInterval(()=> {
            setSeconds((seconds)=> seconds = seconds - 1);
        }, 1000);

        if(seconds === 0){
          navigate('/');
        }


        return () => clearInterval(interval);
    }, [seconds, navigate]);



   
    return (
        <div className="flex justify-center items-center min-h-screen flex-col bg-black text-white">
            <h5>Redirecting to home within {seconds}s</h5>
            <h2 className="text-3xl text-bold">404 Page not found ☹!!!</h2>
            <Link to="/">
            <button className="btn mt-4">
                Go Home
            </button>
            </Link>
        </div>
    );
};

export default ErrorPage;