import { Icon } from '@iconify/react';
import { useSectionProps } from '../../../../hooks';
import { useAppStore } from '../../../../store/app.store';
import { ITechSetting } from '../default';

const Preview = ({ id }: { id: string }) => {
  const props = useSectionProps<ITechSetting>(id);
  const sectionId = useAppStore((state) => state.sectionId);

  if (!props) return null;
  const { settings, icons } = props;

  return (
    <div
      class={`border rounded-md p-4 hover:border-emerald-400 cursor-pointer flex flex-wrap gap-y-2.5 ${
        sectionId === id ? 'border-emerald-400' : 'border-white/15'
      }`}
      style={{ justifyContent: settings.position }}
    >
      {icons.map((icon) => (
        <>
          <Icon
            key={icon}
            icon={icon}
            width={settings.size}
            height={settings.size}
          />
          <img width={settings.gap} class="invisible" />
        </>
      ))}
    </div>
  );
};

export default Preview;
