type StatusProp = {
    status: `loading` | `success` | `error`
}

export const Status = (props: StatusProp) => {
    let message
    // if (props.status===`loading`) {message = 'Loading...'}
    // else if (props.status===`success`) {message = 'Data Fetched Successfully!'}
    // else if (props.status===`error`) {message = 'Error while loading data!'}
    switch(props.status)
    {
        case "loading":
            message="Loading..."
            break
        case "success":
            message="Data Fetched Successfully!" 
            break
        case "error":
            message="Error while loading data!" 
            break
    }
    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}