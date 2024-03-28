import { useAppStore } from '../../../../../store/app.store';
import { hexToOpacity } from '../../../../../utils';
import CustomColorPicker from '../../../../common/CustomColorPicker';
import CustomSelect from '../../../../common/CustomSelect';
import CustomSwitch from '../../../../common/CustomSwitch';
import { IQuoteSetting } from '../../default';
import { EJokeTheme } from '../../quote.enum';

const Setting = (props: IQuoteSetting) => {
  const { editSection } = useAppStore();

  return (
    <>
      <div class="grid grid-cols-2 gap-x-5">
        <CustomSwitch
          className="mt-0"
          isActive={props.quoteJokes.hideBorder}
          label="Hide Border"
          onChange={(hideBorder) =>
            editSection({
              ...props,
              quoteJokes: {
                ...props.quoteJokes,
                hideBorder,
              },
            })
          }
        />
        <CustomSwitch
          className="mt-0"
          isActive={props.quoteJokes.customTheme}
          label="Custom theme"
          onChange={(customTheme) =>
            editSection({
              ...props,
              quoteJokes: {
                ...props.quoteJokes,
                customTheme,
              },
            })
          }
        />
      </div>
      {props.quoteJokes.customTheme ? (
        <>
          <CustomColorPicker
            initOpacity={hexToOpacity(props.quoteJokes.bgColor.slice(-2))}
            value={props.quoteJokes.bgColor}
            label="Background Color"
            onChange={(bgColor) =>
              editSection({
                ...props,
                quoteJokes: {
                  ...props.quoteJokes,
                  bgColor,
                },
              })
            }
          />
          <CustomColorPicker
            initOpacity={hexToOpacity(props.quoteJokes.borderColor.slice(-2))}
            value={props.quoteJokes.borderColor}
            label="Border Color"
            onChange={(borderColor) =>
              editSection({
                ...props,
                quoteJokes: {
                  ...props.quoteJokes,
                  borderColor,
                },
              })
            }
          />
          <CustomColorPicker
            initOpacity={hexToOpacity(props.quoteJokes.qColor.slice(-2))}
            value={props.quoteJokes.qColor}
            label="Question Color"
            onChange={(qColor) =>
              editSection({
                ...props,
                quoteJokes: {
                  ...props.quoteJokes,
                  qColor,
                },
              })
            }
          />
          <CustomColorPicker
            initOpacity={hexToOpacity(props.quoteJokes.aColor.slice(-2))}
            value={props.quoteJokes.aColor}
            label="Answer Color"
            onChange={(aColor) =>
              editSection({
                ...props,
                quoteJokes: {
                  ...props.quoteJokes,
                  aColor,
                },
              })
            }
          />
          <CustomColorPicker
            initOpacity={hexToOpacity(props.quoteJokes.textColor.slice(-2))}
            value={props.quoteJokes.textColor}
            label="Normal Text Color"
            onChange={(textColor) =>
              editSection({
                ...props,
                quoteJokes: {
                  ...props.quoteJokes,
                  textColor,
                },
              })
            }
          />
          <CustomColorPicker
            initOpacity={hexToOpacity(props.quoteJokes.codeColor.slice(-2))}
            value={props.quoteJokes.codeColor}
            label="Code Color"
            onChange={(codeColor) =>
              editSection({
                ...props,
                quoteJokes: {
                  ...props.quoteJokes,
                  codeColor,
                },
              })
            }
          />
        </>
      ) : (
        <CustomSelect
          label="Theme"
          value={props.quoteJokes.theme}
          options={Object.values(EJokeTheme)}
          onChange={(theme) =>
            editSection({
              ...props,
              quoteJokes: {
                ...props.quoteJokes,
                theme,
              },
            })
          }
        />
      )}
    </>
  );
};

export default Setting;
