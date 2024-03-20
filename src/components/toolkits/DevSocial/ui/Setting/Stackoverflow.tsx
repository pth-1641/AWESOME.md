import { useAppStore } from '../../../../../store/app.store';
import CustomInput from '../../../../common/CustomInput';
import CustomSelect from '../../../../common/CustomSelect';
import { IDevSocialSetting } from '../../default';
import {
  EStackoverflowLayout,
  EStackoverflowTheme,
} from '../../dev-social.enum';

const Stackoverflow = (props: IDevSocialSetting) => {
  const { editSection } = useAppStore();

  return (
    <>
      <CustomInput
        label="User ID"
        value={props.stackoverflowStats.userID}
        onChange={(userID) =>
          editSection({
            ...props,
            stackoverflowStats: {
              ...props.stackoverflowStats,
              userID,
            },
          })
        }
      />
      <CustomSelect
        label="Theme"
        value={props.stackoverflowStats.theme}
        options={Object.values(EStackoverflowTheme)}
        onChange={(theme) =>
          editSection({
            ...props,
            stackoverflowStats: {
              ...props.stackoverflowStats,
              theme,
            },
          })
        }
      />
      <CustomSelect
        label="Layout"
        value={props.stackoverflowStats.layout}
        options={Object.values(EStackoverflowLayout)}
        onChange={(layout) =>
          editSection({
            ...props,
            stackoverflowStats: {
              ...props.stackoverflowStats,
              layout,
            },
          })
        }
      />
    </>
  );
};

export default Stackoverflow;
