

function Button({children,isDisable}) {
  return (
    <button disabled={isDisable}>
      {children}
    </button>
  );
}
Button.defaultProps={
    isDisable:false,
}
export default Button;
