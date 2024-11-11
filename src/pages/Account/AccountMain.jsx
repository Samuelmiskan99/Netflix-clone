import ACCOUNT_BG from '../../assets/pictures/netflix-bg.jpg';
import SavedShows from '../../components/Others/SavedShows';

const AccountMain = () => {
   return (
      <>
         <div className='w-full'>
            <img className='w-full h-[400px] object-cover' src={ACCOUNT_BG} alt='' />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]' />
            <div className='absolute text-white top-[20%] p-4 md:p-8'>
               <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
            </div>
         </div>
         <SavedShows />
      </>
   );
};

export default AccountMain;
