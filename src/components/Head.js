

const Head = ( {head, icon}) => {
    return(
        <div className="section-head">
        <span>{icon}</span>
            <h2>{head}</h2>
        </div> 
    )
}

export default Head