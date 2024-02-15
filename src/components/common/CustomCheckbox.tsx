type CustomCheckboxProps = {
  label?: string;
  isActive: boolean;
  onChange?: (value: boolean) => void;
};

const CustomCheckbox = ({ label, isActive, onChange }: CustomCheckboxProps) => {
  return (
    <label class="relative cursor-pointer select-none capitalize text-sm">
      <input
        type="checkbox"
        class="mr-2"
        onInput={(e) => onChange?.(e.currentTarget.checked)}
      />
      <span
        class={`absolute w-3.5 h-3.5 rounded-sm top-0.5 duration-200 left-0 ${
          isActive ? 'bg-emerald-500' : 'bg-white'
        }`}
      >
        <span class="block absolute bg-white w-1 h-0.5 rotate-45 top-1/2 -translate-y-1/2 left-0.5" />
        <span class="block absolute bg-white w-2 h-0.5 rotate-[135deg] top-1/2 -translate-y-1/2 left-1" />
      </span>
      {label?.replace(/-|_/g, ' ')}
    </label>
  );
};

export default CustomCheckbox;
