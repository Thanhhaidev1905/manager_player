const PLAYER = (props) => {
    const {player}=props;
    const {name, position, age,rate}= player;
    
    return(
        <div className="in4">
            <div className="container">

                <h1> Football</h1>
                <h2>Name:{name}</h2>
                <p>position:{position}</p>
                <p>age:{age}</p>
                <p>Rate:{rate} </p>

            </div>
        </div>
    )
}

export default PLAYER;
