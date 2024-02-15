import { MAX_LANGUAGE_COUNT } from '../../../../../constants';
import { useAppStore } from '../../../../../store/app.store';
import CustomInputNumber from '../../../../common/CustomInputNumber';
import CustomSelect from '../../../../common/CustomSelect';
import CustomSwitch from '../../../../common/CustomSwitch';
import { IStatsSetting } from '../../default';
import { EGithubReadmeStatsTheme, ELanguageLayout } from '../../stats.enum';

const Languages = (props: IStatsSetting) => {
  const { editSection } = useAppStore();

  return (
    <>
      <CustomSwitch
        isActive={props.languages.active}
        label="Active"
        vertical={false}
        onChange={(active) =>
          editSection({
            ...props,
            languages: {
              ...props.languages,
              active,
            },
          })
        }
      />
      <CustomSelect
        className="my-4"
        label="Layout"
        value={props.languages.layout}
        options={Object.values(ELanguageLayout)}
        onChange={(layout) =>
          editSection({
            ...props,
            languages: {
              ...props.languages,
              layout,
            },
          })
        }
      />
      <CustomInputNumber
        label="Langs Count"
        min={1}
        max={MAX_LANGUAGE_COUNT}
        value={props.languages.langCount}
        onChange={(langCount) =>
          editSection({
            ...props,
            languages: {
              ...props.languages,
              langCount,
            },
          })
        }
      />
      <CustomSelect
        className="mb-4"
        label="Theme"
        value={props.languages.theme}
        options={Object.values(EGithubReadmeStatsTheme)}
        onChange={(theme) =>
          editSection({
            ...props,
            languages: {
              ...props.languages,
              theme,
            },
          })
        }
      />

      <div class="grid grid-cols-2 gap-2">
        <CustomSwitch
          isActive={props.languages.border}
          label="Hide Border"
          onChange={(border) =>
            editSection({
              ...props,
              languages: {
                ...props.languages,
                border,
              },
            })
          }
        />
        <CustomSwitch
          isActive={props.languages.animation}
          label="Animation"
          onChange={(animation) =>
            editSection({
              ...props,
              languages: {
                ...props.languages,
                animation,
              },
            })
          }
        />
        <CustomSwitch
          isActive={props.languages.hideTitle}
          label="Hide Title"
          onChange={(hideTitle) =>
            editSection({
              ...props,
              languages: {
                ...props.languages,
                hideTitle,
              },
            })
          }
        />
        <CustomSwitch
          isActive={props.languages.progressBar}
          label="Progress Bars"
          onChange={(progressBar) =>
            editSection({
              ...props,
              languages: {
                ...props.languages,
                progressBar,
              },
            })
          }
        />
      </div>
    </>
  );
};

export default Languages;
