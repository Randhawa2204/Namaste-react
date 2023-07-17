const User = (props) => {
    return (
        <div className="about-card">
            <h2>{props.name}</h2>
            <h3>Location</h3>
            <h3>Mail Id</h3>
        </div>
    )
}

export default User