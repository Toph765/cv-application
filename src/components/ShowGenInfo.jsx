function ShowGenInfo({obj}) {
    return (
        <>
            <div>
                {obj && (<h2>{obj.name}</h2>)}
                <div>
                    {obj && (<span>{obj.address} |</span>)}
                    {obj && (<span> {obj.email} |</span>)}
                    {obj && (<span> {obj.phone}</span>)}
                </div>
            </div>
        </>
    )
}

export default ShowGenInfo;