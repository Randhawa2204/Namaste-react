const Shimmer = () => {
    return (
        <>
        <div className="flex mb-4 ml-12">
            <div className="bg-gray-200 h-8 w-96 mr-4 "></div>
            <div className="bg-gray-200 h-8 w-24" />
        </div>
        <div className="flex flex-wrap ml-12">
            
            {
                [...Array(12)].map((ele , idx) =>
                    <div key={idx} className="rounded overflow-hidden shadow-lg w-[250px] h-[350px] mr-6 mb-4 bg-gray-200"></div>
                )
            }
        </div>
        </>
        
    )
}

export default Shimmer;