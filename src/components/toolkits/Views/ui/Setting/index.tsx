import { useSectionProps } from '../../../../../hooks';
import { useAppStore } from '../../../../../store/app.store';
import CustomInput from '../../../../common/CustomInput';
import CustomSelect from '../../../../common/CustomSelect';
import CustomTabs from '../../../../common/CustomTabs';
import { IViewsSetting } from '../../default';
import { EViewProvider } from '../../views.enum';
import MoeSetting from './Moe';
import HitsSetting from './Hits';
import VisitCounterSetting from './Visit';
import VisitProCounterSetting from './VisitPro';
import { EAlign } from '../../../../../enums/share.enum';

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
                  onChange={(username) =>
                    editSection({
                      ...props,
                      username,
                    })
                  }
                />
                <CustomSelect
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
                <CustomSelect
                  label="Align"
                  value={props.align}
                  options={Object.values(EAlign)}
                  onChange={(align) =>
                    editSection({
                      ...props,
                      align,
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
                {props.provider === EViewProvider.HITS && (
                  <HitsSetting {...props} />
                )}
                {props.provider === EViewProvider.VISIT && (
                  <VisitCounterSetting {...props} />
                )}
                {props.provider === EViewProvider.VISIT_PRO && (
                  <VisitProCounterSetting {...props} />
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
