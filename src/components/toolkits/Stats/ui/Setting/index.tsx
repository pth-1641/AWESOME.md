import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Icon } from "@iconify/react";
import { useMemo, useState } from "preact/hooks";
import { EAlign } from "../../../../../enums/share.enum";
import { useSectionProps } from "../../../../../hooks";
import { useAppStore } from "../../../../../store/app.store";
import { getEnumKey } from "../../../../../utils";
import CustomInput from "../../../../common/CustomInput";
import CustomSelect from "../../../../common/CustomSelect";
import CustomTabs from "../../../../common/CustomTabs";
import { IStatsSetting } from "../../default";
import { EStatsProvider } from "../../stats.enum";
import ChartSetting from "./Chart";
import LanguagesSetting from "./Languages";
import StatsSetting from "./Stats";
import StreakSetting from "./Streak";
import SummarySetting from "./Summary";
import TrophySetting from "./Trophy";

const Setting = ({ id }: { id: string }) => {
  const props = useSectionProps<IStatsSetting>(id);

  if (!props) return null;

  return (
    <>
      <CustomTabs
        items={[
          {
            key: "layout",
            label: "Layout",
            icon: "ph:layout-thin",
            children: <Layout {...props} />,
          },
          {
            key: "config",
            label: "Config",
            icon: "iconamoon:settings-thin",
            children: <Config {...props} />,
          },
        ]}
      />
    </>
  );
};

const Layout = (props: IStatsSetting) => {
  const { editSection } = useAppStore();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = props.providers.findIndex((prov) => prov === active.id);
      const newIndex = props.providers.findIndex((prov) => prov === over.id);
      editSection({
        ...props,
        providers: arrayMove(props.providers, oldIndex, newIndex),
      });
    }
  };

  return (
    <>
      <CustomInput
        label="Github Username"
        value={props.username}
        onChange={(username) =>
          editSection({
            ...props,
            username,
          })
        }
      />
      <h6 class="mt-4">Providers</h6>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={props.providers}
          strategy={verticalListSortingStrategy}
        >
          {props.providers.map((provider, key) => (
            <Provider key={key} index={key} name={provider} settings={props} />
          ))}
        </SortableContext>
      </DndContext>
    </>
  );
};

const Config = (props: IStatsSetting) => {
  const [provider, setProvider] = useState<string>(EStatsProvider.STATS);

  return (
    <>
      <CustomSelect
        label="Providers"
        value={provider}
        options={Object.values(EStatsProvider)}
        onChange={(value) => setProvider(value)}
        className="mb-4"
      />
      {provider === EStatsProvider.STATS && <StatsSetting {...props} />}
      {provider === EStatsProvider.LANGUAGES && <LanguagesSetting {...props} />}
      {provider === EStatsProvider.STREAK && <StreakSetting {...props} />}
      {provider === EStatsProvider.TROPHY && <TrophySetting {...props} />}
      {provider === EStatsProvider.SUMMARY && <SummarySetting {...props} />}
      {provider === EStatsProvider.CHART && <ChartSetting {...props} />}
    </>
  );
};

const Provider = (props: {
  settings: IStatsSetting;
  index: number;
  name: string;
}) => {
  const { editSection } = useAppStore();

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.name, transition: null });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const key = useMemo(
    () => getEnumKey(EStatsProvider, props.name)?.toLowerCase(),
    [props.settings]
  ) as keyof IStatsSetting;

  return (
    <li class="amd-border list-none mt-2" style={style}>
      <div class="flex gap-2 p-2">
        <div
          class="flex items-center gap-2 flex-1"
          ref={setNodeRef}
          {...(attributes as any)}
          {...listeners}
        >
          <button>
            <Icon icon="fluent:drag-20-regular" height={20} width={20} />
          </button>
          <div class="flex-1 select-none capitalize">{props.name}</div>
        </div>
        <button
          class="hover:text-emerald-500 duration-150"
          onClick={() => {
            editSection({
              ...props.settings,
              [key]: {
                ...(props.settings[key] as any),
                // @ts-ignore
                active: !props.settings[key].active,
              },
            });
          }}
        >
          {
            // @ts-ignore
            props.settings[key].active ? (
              <Icon icon="clarity:eye-line" height={18} />
            ) : (
              <Icon icon="clarity:eye-hide-line" height={18} />
            )
          }
        </button>
      </div>
      <ul class="flex border-t border-white/15">
        {Object.values(EAlign).map((align, index) => (
          <button
            class={`w-full flex justify-center py-1.5 border-white/15 ${
              index !== 0 ? "border-l" : ""
            }`}
            key={align}
            onClick={() =>
              editSection({
                ...props.settings,
                [key]: {
                  ...(props.settings[key] as any),
                  align,
                },
              })
            }
          >
            <Icon
              icon={`ant-design:pic-${align}-outlined`}
              className={
                // @ts-ignore
                props.settings[key].align === align ? "text-emerald-500" : ""
              }
            />
          </button>
        ))}
      </ul>
    </li>
  );
};

export default Setting;
