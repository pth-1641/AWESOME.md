import { useAppStore } from '../../../../../store/app.store';
import CustomColorPicker from '../../../../common/CustomColorPicker';
import CustomInput from '../../../../common/CustomInput';
import CustomInputNumber from '../../../../common/CustomInputNumber';
import CustomSwitch from '../../../../common/CustomSwitch';
import { ITextSetting } from '../../default';

const Typing = (props: ITextSetting) => {
  const { editSection } = useAppStore();

  return (
    <>
      <CustomInput
        value={props.typing.font}
        label="Font"
        className="mb-4"
        subtitle="Name from Google Fonts"
        onChange={(font) =>
          editSection({
            ...props,
            typing: {
              ...props.typing,
              font,
            },
          })
        }
      />
      <CustomColorPicker
        value={props.typing.color}
        label="Color"
        onChange={(color) =>
          editSection({
            ...props,
            typing: {
              ...props.typing,
              color,
            },
          })
        }
      />
      <CustomColorPicker
        className="mt-4"
        value={props.typing.background}
        label="Background"
        initOpacity={0}
        onChange={(background) =>
          editSection({
            ...props,
            typing: {
              ...props.typing,
              background,
            },
          })
        }
      />
      <div class="grid mt-4 grid-cols-2 gap-x-5">
        <CustomSwitch
          label="Repeat"
          isActive={props.typing.repeat}
          onChange={(repeat) =>
            editSection({
              ...props,
              typing: {
                ...props.typing,
                repeat,
              },
            })
          }
        />
        <CustomSwitch
          label="Multiline"
          isActive={props.typing.multiline}
          onChange={(multiline) =>
            editSection({
              ...props,
              typing: {
                ...props.typing,
                multiline,
              },
            })
          }
        />
      </div>
      <div class="grid grid-cols-2 gap-x-5 gap-y-4 mt-4">
        <CustomInputNumber
          label="Font size"
          value={props.typing.fontSize}
          onChange={(fontSize) =>
            editSection({
              ...props,
              typing: {
                ...props.typing,
                fontSize,
              },
            })
          }
        />
        <CustomInputNumber
          label="Duration"
          min={1}
          value={props.typing.duration}
          onChange={(duration) =>
            editSection({
              ...props,
              typing: {
                ...props.typing,
                duration,
              },
            })
          }
        />
        <CustomInputNumber
          label="Wait"
          value={props.typing.pause}
          onChange={(pause) =>
            editSection({
              ...props,
              typing: {
                ...props.typing,
                pause,
              },
            })
          }
        />
        <CustomInputNumber
          label="Width"
          value={props.typing.width}
          onChange={(width) =>
            editSection({
              ...props,
              typing: {
                ...props.typing,
                width,
              },
            })
          }
        />
        <CustomInputNumber
          label="Height"
          value={props.typing.height}
          onChange={(height) =>
            editSection({
              ...props,
              typing: {
                ...props.typing,
                height,
              },
            })
          }
        />
      </div>
    </>
  );
};

export default Typing;
