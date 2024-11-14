type greetProps = {
    name?: string
}

export const Greet = (props: greetProps) => {
  return (
    <div>Hello {props.name}</div>
  )
}
