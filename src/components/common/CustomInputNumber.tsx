const CustomInputNumber = ({
  label,
  onChange,
  value,
}: {
  label: string;
  onChange?: (value: any) => void;
  value: number;
}) => {
  return (
    <div>
      <h4 class="font-semibold">{label}</h4>
      <input
        class="bg-transparent outline-none w-full py-1.5 px-2 capitalize amd-border mt-2 mb-4"
        type="number"
        value={value}
        onChange={(e) => onChange?.(+e.currentTarget.value)}
        min="0"
      />
    </div>
  );
};

export default CustomInputNumber;
