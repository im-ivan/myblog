interface IInputTextProps {
  label: string;
  value: string;

  onChange: (newValue: string) => void;
  onPressEnter: () => void;
}
export const InputText: React.FC<IInputTextProps> = (props) => {
  return (
    <>
      <label htmlFor="email">{props.label}</label>
      <input
        type="text"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? props.onPressEnter : undefined)}
      />
    </>
  );
};
