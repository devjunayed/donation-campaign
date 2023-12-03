const getStoredDonationId = () => {
    const storedDonationId = localStorage.getItem('donation-id');
    if(storedDonationId){
        return JSON.parse(storedDonationId);
    }
    return [];
}


const saveDonationId = (id) => {
    const storedDonationId = getStoredDonationId();
    const exists = storedDonationId.find(donationId => donationId === id);
    if(!exists){
        storedDonationId.push(id);
        localStorage.setItem('donation-id', JSON.stringify(storedDonationId));
    }
}

export {getStoredDonationId, saveDonationId};