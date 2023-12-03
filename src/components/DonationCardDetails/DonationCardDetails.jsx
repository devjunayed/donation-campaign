import { useLoaderData } from "react-router-dom";
import { getStoredDonationId, saveDonationId } from "../utils/localStorage";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const DonationCardDetails = () => {
    const data = useLoaderData();


    const handleDonation = () => {
        if (getStoredDonationId().find(donationId => donationId === data[0].id)) {
            toast.error('Already donated!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        }

        toast.success('Donated Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        saveDonationId(data[0].id);
    }
    return (
        <div className="mx-12 space-y-4">
            <div className=" relative">
                <div>
                    <img className="w-full" src={data[0].thumbnail} alt="" />
                </div>
                <div className="flex items-center hero-overlay h-20 bg-opacity-60 absolute bottom-0">
                    <button onClick={handleDonation} className="ml-8 text-white py-2 px-4 rounded-md border-none" style={{ background: `${data[0].styles.textColor}` }} >Donate {data[0].price}</button>
                </div>

            </div>
            <h2 className="text-2xl lg:text-3xl font-bold">{data[0].title}</h2>
            <p className="text-gray-500">{data[0].description}</p>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};

export default DonationCardDetails;