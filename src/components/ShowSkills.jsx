function ShowSkills({data}) {
    return (
        <>
            <div>
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