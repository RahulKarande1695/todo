import { Text } from "../../atoms";

export default function FormField({ id, label, error, children }) {
  return (
    <div>
      <Text as="label" htmlFor={id}>
        {label}
      </Text>
      {children}
      {error && (
        <Text as="p" id={`${id}-error`} role="alert">
          {error}
        </Text>
      )}
    </div>
  );
}