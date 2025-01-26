function ShowGenInfo({obj}) {
    return (
        <>
            <div>
                {obj && (<div>Name: {obj.name}</div>)}
                <div>
                    {obj && (<div>Email: {obj.email}</div>)}
                    {obj && (<div>Phone: {obj.phone}</div>)}
                </div>
            </div>
        </>
    )
}

export default ShowGenInfo;