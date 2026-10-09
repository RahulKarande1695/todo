export default function Text({ as: Component = "p", children, ref, ...props }) {
  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  );
}
