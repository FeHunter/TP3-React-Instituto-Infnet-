export function Select({ option1, option2, option3, onChange }) {
  return (
    <select onChange={onChange}>
      <option value={option1}>{option1}</option>
      <option value={option2}>{option2}</option>
      <option value={option3}>{option3}</option>
    </select>
  );
}
