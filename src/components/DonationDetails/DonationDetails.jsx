import { useLoaderData, useParams } from 'react-router-dom';
import './DonationDetails.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonationService } from '../Utility/localStorage';

const DonationDetails = props => {
    // const [donationDetails,setDonationDetails] = useLoaderData();
    const donationDetails = useLoaderData();
    const {id} = useParams();
    console.log(typeof id)
    const idInt = parseInt(id);

    const donationDetail = donationDetails.find((donationDetail)=> donationDetail.id === idInt)
    console.log(donationDetail)
    // const {picture,title} = donationDetails;
    // const {title} = data;
    
    const handleDonationDetails =()=>{
        saveDonationService(idInt);
        toast('Donation Added successfully')

    }
  
    return (
        <div>
            <div className='flex justify-center items-center'><img className='w-[800px]' src={donationDetail.picture} alt=""  />

            <div className='button-position'>
            <button onClick={handleDonationDetails} className='w-[140px] h-[45px] rounded text-white' style={{background:donationDetail.textColor}}>Donate {donationDetail.price}</button>
            </div>

            </div>
            <div className='m-20'>
            <h2 className='text-4xl font-bold'>{donationDetail.title}</h2>
            <p className='mt-4'>{donationDetail.description}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

DonationDetails.propTypes = {
    
};

export default DonationDetails;