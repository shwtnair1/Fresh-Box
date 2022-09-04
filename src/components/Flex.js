function Flex({ children, ...props }) {
  return (
    <div
      {...props}
      style={{ display: 'flex', flexDirection: props.flexdirection }}
    >
      {children}
    </div>
  );
}

export default Flex;
