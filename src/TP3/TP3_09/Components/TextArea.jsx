export function TextArea({ type, value, placeholder, cols, rows, onChange }) {
  return (
    <textarea
      type={type}
      value={value}
      placeholder={placeholder}
      cols={cols}
      rows={rows}
      onChange={onChange}
    />
  );
}
