type OscarProps = {
    children: React.ReactNode
}
export const Oscar = (props: OscarProps) => {
    return (
        <h2>
            Oscar goes to...<i>{props.children}</i>
        </h2>
    )
}
