import { useState } from 'preact/hooks';
import { useSectionProps } from '../../../../../hooks';
import CustomSelect from '../../../../common/CustomSelect';
import CustomTabs from '../../../../common/CustomTabs';
import { IStatsSetting } from '../../default';
import { EProvider } from '../../stats.enum';
import StatsSetting from './Stats';
import LanguagesSetting from './Languages';
import StreakSetting from './Streak';
import TrophySetting from './Trophy';

const Setting = ({ id }: { id: string }) => {
  const props = useSectionProps<IStatsSetting>(id);

  if (!props) return null;

  return (
    <div>
      <CustomTabs
        items={[
          {
            key: 'layout',
            label: 'Layout',
            icon: 'ph:layout-thin',
            children: <Layout />,
          },
          {
            key: 'config',
            label: 'Config',
            icon: 'iconamoon:settings-thin',
            children: <Config {...props} />,
          },
        ]}
      />
    </div>
  );
};

const Layout = () => {
  return <>Layout</>;
};

const Config = (props: IStatsSetting) => {
  const [provider, setProvider] = useState<string>(EProvider.STATS);

  return (
    <>
      <CustomSelect
        label="Providers"
        value={provider}
        options={Object.values(EProvider)}
        onChange={(value) => setProvider(value)}
        className="mb-4"
      />
      {provider === EProvider.STATS && <StatsSetting {...props} />}
      {provider === EProvider.LANGUAGES && <LanguagesSetting {...props} />}
      {provider === EProvider.STREAK && <StreakSetting {...props} />}
      {provider === EProvider.TROPHY && <TrophySetting {...props} />}
    </>
  );
};

export default Setting;
