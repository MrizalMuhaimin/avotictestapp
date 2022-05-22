import Profile from "../../assets/icons/Profile.png"

function PotoProfil(props){
    const url = props.url || Profile;
    return (
        <img src={url} alt="profil header" className="w-8 h-8 rounded-full mr-3 hover:cursor-pointer"></img>
    )
}

export default PotoProfil;