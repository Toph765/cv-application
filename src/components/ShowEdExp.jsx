function ShowEdExp({data}) {
    return (
        <>
            <div>
                {data && (data.map(item => {
                    return (
                        <div key={item.id}>
                            <div>
                                <span>{item.schoolName}</span>
                                <span>{item.graduation}</span>
                            </div>
                            <div>
                                {item.program}
                            </div>
                        </div>
                   )}))} 
            </div>
        </>
    )
}

export default ShowEdExp;