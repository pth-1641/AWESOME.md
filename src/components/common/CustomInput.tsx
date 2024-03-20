import { VNode } from 'preact';

type CustomInputProps = {
  value: string;
  label?: string;
  subtitle?: string | VNode;
  onChange?: (value: string) => void;
  className?: string;
  capitalize?: boolean;
};

const CustomInput = ({
  label,
  onChange,
  value,
  className = 'mt-4',
  subtitle,
  capitalize,
}: CustomInputProps) => {
  return (
    <div class={className}>
      <h6 class="font-semibold">{label}</h6>
      <span class="text-xs text-gray-400 leading-5 block">{subtitle}</span>
      <input
        class={`w-full py-1.5 px-2 amd-border mt-2 text-sm ${
          capitalize ? 'capitalize' : ''
        }`}
        type="text"
        value={value}
        placeholder={label}
        onChange={(e) => onChange?.(e.currentTarget.value)}
      />
    </div>
  );
};

export default CustomInput;
