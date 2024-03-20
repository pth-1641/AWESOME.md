type CustomTextareaProps = {
  value: string;
  label?: string;
  subtitle?: string;
  onChange?: (value: string) => void;
  className?: string;
};

const CustomTextarea = ({
  label,
  onChange,
  value,
  className = 'mt-4',
  subtitle,
}: CustomTextareaProps) => {
  return (
    <div class={className}>
      <h6 class="font-semibold mb-2">{label}</h6>
      <span class="text-xs text-gray-400 leading-5 block">{subtitle}</span>
      <textarea
        class="bg-transparent outline-none py-1.5 px-2 w-full border border-white/15 rounded-md resize-none text-sm"
        rows={5}
        contentEditable={false}
        value={value}
        placeholder={label}
        onChange={(e) => onChange?.(e.currentTarget.value)}
      />
    </div>
  );
};

export default CustomTextarea;
