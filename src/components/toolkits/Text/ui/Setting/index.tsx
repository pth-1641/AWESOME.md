import { useSectionProps } from '../../../../../hooks';
import { useAppStore } from '../../../../../store/app.store';
import CustomSelect from '../../../../common/CustomSelect';
import CustomTextarea from '../../../../common/CustomTextarea';
import { ITextSetting } from '../../default';
import { ETextProvider } from '../../text.enum';
import TextSetting from './Text';
import TypingSetting from './Typing';
import CapsuleSetting from './Capsule';
import CustomTabs from '../../../../common/CustomTabs';

const Setting = ({ id }: { id: string }) => {
  const props = useSectionProps<ITextSetting>(id);
  const { editSection } = useAppStore();

  if (!props) return null;

  return (
    <>
      <CustomTabs
        items={[
          {
            key: 'provider',
            label: 'Providers',
            icon: 'fluent:slide-text-20-regular',
            children: (
              <>
                <CustomSelect
                  className="mt-0"
                  label="Provider"
                  value={props.provider}
                  options={Object.values(ETextProvider)}
                  onChange={(provider) =>
                    editSection({
                      ...props,
                      provider,
                    })
                  }
                />
                <CustomTextarea
                  label="Content"
                  value={props.value}
                  onChange={(value) =>
                    editSection({
                      ...props,
                      value,
                    })
                  }
                />
              </>
            ),
          },
          {
            key: 'setting',
            label: 'Settings',
            icon: 'system-uicons:settings',
            children: (
              <>
                {props.provider === ETextProvider.TEXT && (
                  <TextSetting {...props} />
                )}
                {props.provider === ETextProvider.TYPING && (
                  <TypingSetting {...props} />
                )}
                {props.provider === ETextProvider.CAPSULE && (
                  <CapsuleSetting {...props} />
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
