type HeadingProps = {
    children: string
}
export const Heading = (props: HeadingProps) => {
    return (
        <div>
            <h4>{props.children}</h4>
        </div>
    )
}
