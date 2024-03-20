import { ChangeEvent, useCallback } from 'preact/compat';

type CustomInputNumberProps = {
  label?: string;
  onChange?: (value: number) => void;
  value: number;
  min?: number;
  max?: number;
  className?: string;
};

const CustomInputNumber = ({
  label,
  onChange,
  value,
  min = 0,
  max = Number.MAX_SAFE_INTEGER,
  className = 'mt-4',
}: CustomInputNumberProps) => {
  const handleChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      let value = +e.currentTarget.value;
      if (value > max) value = max;
      if (value < min) value = min;
      onChange?.(value);
    },
    [value]
  );

  return (
    <div class={className}>
      <h6 class="font-semibold">{label}</h6>
      <input
        class="w-full py-1.5 px-2 capitalize amd-border mt-2 text-sm"
        type="number"
        value={value}
        onChange={handleChangeInput}
        min={min}
        max={max}
      />
    </div>
  );
};

export default CustomInputNumber;
