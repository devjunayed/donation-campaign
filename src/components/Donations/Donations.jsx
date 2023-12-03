import { useLoaderData } from "react-router-dom";
import Donation from "../Donation/Donation";
import { useState } from "react";

const Donations = () => {
    const [dataLen, setDataLen] = useState(4);

    const data = useLoaderData();

    return (

        data.length === 0 ? <div className="text-center text-5xl my-auto flex justify-center items-center h-[50vh]"> Oops!!! no donation</div> :
            <div className="">
                <div className="grid mt-10 grid-cols-1 lg:grid-cols-2 mx-4 md:mx-8 lg:mx-12 gap-4">
                    {
                        data.slice(0, dataLen).map((donationItem) => <Donation key={donationItem.id} donationItem={donationItem}></Donation>)
                    }
                </div>
                <div className={`flex ${data.length <= 4 && 'hidden'} ${data.length === dataLen && 'hidden'}`}>
                    <button onClick={() => { setDataLen(data.length); }} className="mt-8 mb-8 bg-green-700 text-white mx-auto px-6 rounded-md py-2">See All</button>
                </div>
            </div>
    );
};

export default Donations;