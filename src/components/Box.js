function Box({ children, ...props }) {
  return (
    <div {...props} style={{ textAlign: props.textalign }}>
      {children}
    </div>
  );
}

export default Box;
