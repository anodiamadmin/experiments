import React from "react";

type Props = {
  children: React.ReactNode;
};

const Wrapper: React.FC<Props> = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default function ReactWrapper() {
  return (
    <Wrapper>
      <h1>Hello World</h1>
      <p>This is inside the wrapper.</p>
    </Wrapper>
  );
}
