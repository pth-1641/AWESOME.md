import { Icon } from '@iconify/react';
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'preact/hooks';
import { opacityToHex } from '../../utils';

type CustomColorPickerProps = {
  value: string;
  label?: string;
  onChange?: (value: string) => void;
  className?: string;
  initOpacity?: number;
};

const CustomColorPicker = ({
  value,
  label,
  onChange,
  className,
  initOpacity = 100,
}: CustomColorPickerProps) => {
  const [openOpacityLine, setOpenOpacityLine] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(initOpacity);

  const originColor = useMemo(() => value.slice(0, 7), [value]);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openOpacityLine) return;
    const handleClick = (e: any) => {
      const isInside = popupRef.current?.contains(e.target);
      if (!isInside) setOpenOpacityLine(false);
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [openOpacityLine]);

  return (
    <div class={className}>
      <h6 class="mb-2">{label}</h6>
      <div class="flex items-center gap-2">
        <label class="flex items-center gap-1.5 rounded border border-white/25 py-1 px-1.5">
          <input
            type="color"
            value={originColor}
            onInput={(e) =>
              onChange?.(opacityToHex(e.currentTarget.value, opacity))
            }
          />
          <span class="text-sm">{originColor}</span>
        </label>
        <div class="relative">
          <div
            class={`absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#21262d] flex flex-col items-center px-4 pb-2 pt-4 rounded z-10 duration-150 origin-bottom ${
              openOpacityLine ? 'scale-100' : 'scale-0'
            }`}
            ref={popupRef}
          >
            <span class="absolute h-3 w-3 -bottom-1 rotate-45 bg-[#21262d]" />
            <div
              class="h-4 flex items-center"
              style={{
                backgroundImage: `linear-gradient(to right, ${originColor}00, ${originColor}FF)`,
              }}
            >
              <input
                type="range"
                min={0}
                max={100}
                value={opacity}
                onInput={(e) => {
                  onChange?.(opacityToHex(value, +e.currentTarget.value));
                  setOpacity(+e.currentTarget.value);
                }}
              />
            </div>
            <span class="text-xs mt-2">Opacity: {opacity}%</span>
          </div>
          <Icon
            icon="mdi:circle-opacity"
            className="hover:text-emerald-500 duration-150 cursor-pointer"
            height={20}
            onClick={() => setOpenOpacityLine(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomColorPicker;
