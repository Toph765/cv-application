function ShowGenInfo({obj}) {
    return (
        <>
            <div>
                {obj && (<div>{obj.name}</div>)}
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