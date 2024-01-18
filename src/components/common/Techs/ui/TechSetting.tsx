import { useEffect, useState } from "preact/hooks";
import { useSectionProps } from "../../../../hooks";
import { useAppStore } from "../../../../store/app.store";
import { ITechSetting } from "../default";
import { Icon } from "@iconify/react";
import { useDebounce } from "../../../../hooks";

const TechSetting = ({ id }: { id: string }) => {
  const props = useSectionProps<ITechSetting>(id);
  const editSection = useAppStore((state) => state.editSection);
  const [icons, setIcons] = useState<string[]>([]);
  const [query, setQuery] = useState<string>("");

  if (!props) return null;

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://api.iconify.design/search?query=${query}&limit=999`
      );
      const data = await res.json();
      setIcons(data?.icons || []);
    })();
  }, [query]);

  return (
    <div>
      <h4 class="font-semibold">Search</h4>
      <input
        class="border border-white/15 bg-transparent rounded-md outline-none w-full py-1.5 px-2 mt-2 mb-6"
        type="text"
        placeholder="Search"
        // onInput={(e) => setQuery(e.currentTarget.value)}
        onInput={(e) => console.log(useDebounce(e.currentTarget.value))}
      />
      <div class="grid grid-cols-3 gap-3">
        {icons.map((icon) => (
          <button
            key={icon}
            class="border border-white/15 rounded p-3 hover:border-emerald-400 duration-150 group"
          >
            <Icon icon={icon} height={48} width={48} />
            <p class="text-xs mt-1.5 truncate group-hover:text-emerald-400 duration-150">
              {icon.split(":")[1]}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TechSetting;
