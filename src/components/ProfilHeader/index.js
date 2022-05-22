function ProfileHeader(props){
    const usename = props.usename || "Username";
    const companyName = props.company || "Company Name"
    return(
        <div className="text-grey-4 mr-3">
            <h2 className="text-base">{usename}</h2>
            <h3 className="text-xs tracking-normal">{companyName}</h3>
        </div>

    )
}

export default ProfileHeader;