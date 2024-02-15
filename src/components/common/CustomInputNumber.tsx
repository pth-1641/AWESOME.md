type CustomInputNumberProps = {
  label: string;
  onChange?: (value: any) => void;
  value: number;
  min?: number;
  max?: number;
};

const CustomInputNumber = ({
  label,
  onChange,
  value,
  min = 0,
  max,
}: CustomInputNumberProps) => {
  return (
    <div>
      <h4 class="font-semibold">{label}</h4>
      <input
        class="bg-transparent outline-none w-full py-1.5 px-2 capitalize amd-border mt-2 mb-4 text-sm"
        type="number"
        value={value}
        onChange={(e) => onChange?.(+e.currentTarget.value)}
        min={min}
        max={max}
      />
    </div>
  );
};

export default CustomInputNumber;
