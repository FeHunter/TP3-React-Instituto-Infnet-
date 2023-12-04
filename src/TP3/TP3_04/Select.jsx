export function Select({ value, option1, option2, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      <option value={option1}>{option1}</option>
      <option value={option2}>{option2}</option>
    </select>
  );
}
