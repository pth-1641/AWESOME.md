type CustomSwitchProps = {
  isActive: boolean;
  label?: string;
  onChange?: (value: boolean) => void;
  vertical?: boolean;
  className?: string;
};

const CustomSwitch = ({
  isActive,
  label,
  onChange,
  vertical = true,
  className = 'mt-4',
}: CustomSwitchProps) => {
  return (
    <div
      class={`flex gap-2.5 ${className}`}
      style={
        vertical
          ? { flexDirection: 'column' }
          : { flexDirection: 'row', alignItems: 'center' }
      }
    >
      <h6>{label}</h6>
      <div
        class={`w-9 rounded-full h-3.5 relative cursor-pointer duration-300 ${
          isActive ? ' bg-emerald-900' : 'bg-gray-500'
        }`}
        onClick={() => onChange?.(!isActive)}
      >
        <span
          class={`block h-5 w-5 rounded-full left-0  absolute top-1/2 -translate-y-1/2 duration-300
          ${
            isActive
              ? 'translate-x-3/4 bg-emerald-500'
              : 'translate-x-0 bg-white'
          }`}
        />
      </div>
    </div>
  );
};

export default CustomSwitch;
