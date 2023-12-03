import { useState } from "react";
import Banner from "../Banner/Banner";
import DonationCards from "../DonationCards/DonationCards";

const Home = () => {
  const [category, setCategory] = useState("");
    return (
        <>
          <Banner setCategory={setCategory}></Banner>
          <DonationCards category={category}></DonationCards>
        </>
    );
};

export default Home;