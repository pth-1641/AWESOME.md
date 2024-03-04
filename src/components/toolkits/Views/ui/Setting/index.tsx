import { useSectionProps } from '../../../../../hooks';
import { useAppStore } from '../../../../../store/app.store';
import CustomInput from '../../../../common/CustomInput';
import CustomSelect from '../../../../common/CustomSelect';
import CustomTabs from '../../../../common/CustomTabs';
import { IViewsSetting } from '../../default';
import { EViewProvider } from '../../views.enum';
import MoeSetting from './Moe';
import KomarevSetting from './Komarev';

const Setting = ({ id }: { id: string }) => {
  const props = useSectionProps<IViewsSetting>(id);
  const { editSection } = useAppStore();

  if (!props) return null;

  return (
    <>
      <CustomTabs
        items={[
          {
            key: 'general',
            label: 'General',
            icon: 'mdi:counter',
            children: (
              <>
                <CustomInput
                  label="Github Username"
                  value={props.username}
                  capitalize={false}
                  onChange={(username) =>
                    editSection({
                      ...props,
                      username,
                    })
                  }
                />
                <CustomSelect
                  className="mt-0"
                  label="Provider"
                  value={props.provider}
                  options={Object.values(EViewProvider)}
                  onChange={(provider) =>
                    editSection({
                      ...props,
                      provider,
                    })
                  }
                />
              </>
            ),
          },
          {
            key: 'config',
            label: 'Config',
            icon: 'iconamoon:settings-thin',
            children: (
              <>
                {props.provider === EViewProvider.MOE && (
                  <MoeSetting {...props} />
                )}
                {props.provider === EViewProvider.KOMAREV && (
                  <KomarevSetting {...props} />
                )}
              </>
            ),
          },
        ]}
      />
    </>
  );
};

export default Setting;
