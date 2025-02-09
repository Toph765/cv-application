function ShowSkills({data}) {
    return (
        <>
            <div className="info-block">
                <ul>
                    {data && (data.map(item => {
                        return (<li key={item.id}>{item.skill}</li>)
                    }))}
                </ul>
            </div>
        </>
    )
}

export default ShowSkills;