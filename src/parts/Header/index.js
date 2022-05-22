import LogoAvoticts from '../../assets/logo/advotics.jpg';
import ProfileHeader from '../../components/ProfilHeader/index';
import PotoProfil from '../../components/PotoProfil/index';
import BtnLogout from '../../components/BtnLogout/index';

function Header(){
    return (
        <header className="fixed top-0 left-0 right-0 flex w-full bg-white h-16  items-center justify-between shadow-md z-20">
            <div className="flex ml-8">
                <img 
                    src={LogoAvoticts} 
                    className="h-8" 
                    alt="logo utama avoticts"></img>

                <p className='font-sans text-xs ml-1 self-end text-gray-4'>powered by</p>
                <img 
                    src={LogoAvoticts} 
                    className="h-4 ml-1 self-end" 
                    alt="logo utama avoticts"></img>
            </div>
            <div className="flex mr-8 items-center">
                <ProfileHeader/>
                <PotoProfil/>
                <BtnLogout/>

            </div>


        </header>
    )
}

export default Header;