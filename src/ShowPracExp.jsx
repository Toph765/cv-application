function ShowPracExp({data}) {
    return (
        <>
            <div>
                {data && data.map(item => {
                    return (
                        <div key={item.id}>
                            <div>
                                <span>{item.companyName}</span>
                                <span>{item.from} - {item.to}</span>
                            </div>
                            <div>
                                {item.position}
                            </div>
                            <div>
                                <ul>
                                    {item.responsibilities && (item.responsibilities.map(resp => {
                                        return (<li key={resp.id}>{resp.responsibilities}</li>)
                                    }))}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ShowPracExp;