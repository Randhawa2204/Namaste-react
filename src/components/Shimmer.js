const Shimmer = () => {
    return (
        <div className="shimmer-container">
            
            {
                [...Array(12)].map((ele , idx) =>
                    <div key={idx} className="shimmer-card"></div>
                )
            }
        </div>
    )
}

export default Shimmer;