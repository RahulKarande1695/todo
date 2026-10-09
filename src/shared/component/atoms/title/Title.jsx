export default function Title({
    level = 1,
    children,
    ref,
    ...props
}){
    const Tag = `h${level}`
    return(
        <Tag ref={ref} {...props}>
            {children}
        </Tag>
    )
}