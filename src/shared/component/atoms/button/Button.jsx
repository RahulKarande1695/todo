export default function Button({
    type = "button", 
    children, 
    loading = false,
    disabled = false, 
    ref, 
    ...props 
}) {
  return( 
  <button
  type={type}
   ref = {ref}
   disabled = {disabled || loading}
   aria-busy = {loading}
  {...props} 
  >
    {loading ? "Loading..." : children}
  </button>)
}
