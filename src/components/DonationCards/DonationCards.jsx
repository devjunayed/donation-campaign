import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";
import PropTypes from 'prop-types';


const DonationCards = ({category}) => {
    const [datas, setDatas] = useState([]);
    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setDatas(data));

    }, []);



    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 mt-4 md:mt-20 lg:mt-32 mx-20 gap-6 mb-6">
            {
                category === ""
                ?
                datas.map(data => <DonationCard key={data.id} data={data}></DonationCard>)
                :
                datas.filter((data)=> data.category.toLowerCase() === category.toLowerCase()).map(data => <DonationCard key={data.id} data={data}></DonationCard>)
            }
        </div>
    );
};


DonationCards.propTypes = {
    category: PropTypes.string
}

export default DonationCards;