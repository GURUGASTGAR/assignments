import "./App.css"
export function CardComponent(props){
    return(
        <div className="card">
            <h1 className="username">{props.name}</h1>
            <p className="description">{props.description}</p>
            <h3 className="interestsHeaders">Intrests</h3>
            <ul className="interestslist">{props.interests.map((interest)=>{
                return <li className="interestsitem">
                    {interest}
                </li>
            })}</ul>
            <div className="socialLinks">
                {props.social.map((platforms)=>{
                  return <button className="social">{platforms}</button>  
                })}
            </div>
        </div>
    )
}

