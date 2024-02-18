type CustomInputProps = {
  value: string;
  label?: string;
  subtitle?: string;
  onChange?: (value: string) => void;
  className?: string;
};

const CustomInput = ({
  label,
  onChange,
  value,
  className,
  subtitle,
}: CustomInputProps) => {
  return (
    <div class={className}>
      <h6 class="font-semibold">{label}</h6>
      <span class="text-xs text-gray-400 leading-5 block">{subtitle}</span>
      <input
        class=" w-full py-1.5 px-2 capitalize amd-border mt-2 text-sm"
        type="text"
        value={value}
        placeholder={label}
        onChange={(e) => onChange?.(e.currentTarget.value)}
      />
    </div>
  );
};

export default CustomInput;
