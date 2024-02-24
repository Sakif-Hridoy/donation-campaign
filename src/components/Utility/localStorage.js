const getStoredDonationService = () => {
  const storedDonationService = localStorage.getItem("donation-services");
  if (storedDonationService) {
    return JSON.parse(storedDonationService);
  }
  return [];
};

const saveDonationService = (id) => {
  const storedDonationService = getStoredDonationService();
  const exists = storedDonationService.find((jobId) => jobId === id);
  if (!exists) {
    storedDonationService.push(id);
    localStorage.setItem(
      "donation-services",
      JSON.stringify(storedDonationService)
    );
  }
};

export { getStoredDonationService, saveDonationService };
