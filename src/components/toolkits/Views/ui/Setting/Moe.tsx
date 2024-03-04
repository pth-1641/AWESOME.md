import { useAppStore } from '../../../../../store/app.store';
import CustomSelect from '../../../../common/CustomSelect';
import { IViewsSetting } from '../../default';
import { EMoeTheme } from '../../views.enum';

const Moe = (props: IViewsSetting) => {
  const { editSection } = useAppStore();

  return (
    <>
      <CustomSelect
        label="Theme"
        options={Object.values(EMoeTheme)}
        value={props.moeCounter.theme}
        onChange={(theme) =>
          editSection({
            ...props,
            moeCounter: {
              ...props.moeCounter,
              theme,
            },
          })
        }
      />
    </>
  );
};

export default Moe;
