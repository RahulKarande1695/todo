export default function Input({
    type = "text",
    ref,
    ...props
}){
    return <input type={type} ref={ref} {...props} />;
}