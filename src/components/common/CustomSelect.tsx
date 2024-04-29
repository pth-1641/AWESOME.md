import { useState } from 'preact/hooks';

type CustomSelectProps = {
  options: string[];
  label?: string;
  value: string;
  onChange?: (value: string) => void;
  className?: string;
};

const CustomSelect = ({
  options,
  label,
  value,
  onChange,
  className = 'mt-4',
}: CustomSelectProps) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  return (
    <section class={className}>
      <h6 class="font-semibold mb-2">{label}</h6>
      <div class="relative amd-border cursor-pointer text-sm">
        <input
          class={`w-full py-1.5 px-2 capitalize cursor-pointer`}
          type="text"
          value={value?.replace(/-|_/g, ' ') || options[0]}
          readOnly
          onFocus={() => setShowOptions(true)}
          onBlur={() => setShowOptions(false)}
        />
        <ul
          class={`absolute z-10 capitalize bg-primary border border-white/15 rounded-md inset-x-0 duration-150 max-h-52 overflow-auto ${
            showOptions
              ? 'opacity-100 top-10 pointer-events-auto'
              : ' opacity-0 top-14 pointer-events-none'
          }`}
        >
          {options.map((option) => (
            <li
              key={option}
              class={`py-1.5 px-2 duration-150 hover:bg-white/5 ${
                option === value ? 'text-emerald-500 font-semibold' : ''
              }`}
              onMouseDown={() => onChange?.(option)}
            >
              {option.toLowerCase().replace(/-|_/g, ' ')}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CustomSelect;
