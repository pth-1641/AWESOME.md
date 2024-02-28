import { useMemo } from 'preact/hooks';
import { useAppStore } from '../../../../../store/app.store';
import CustomColorPicker from '../../../../common/CustomColorPicker';
import CustomSelect from '../../../../common/CustomSelect';
import { DEFAULT_TYPING_COLOR, ITextSetting } from '../../default';
import {
  ECapsuleAnimation,
  ECapsuleBackgroundType,
  ECapsuleSection,
  ECapsuleTheme,
  ECapsuleType,
} from '../../text.enum';
import CustomSwitch from '../../../../common/CustomSwitch';
import CustomInputNumber from '../../../../common/CustomInputNumber';
import { hexToOpacity, isInEnum } from '../../../../../utils';

const Capsule = (props: ITextSetting) => {
  const { editSection } = useAppStore();

  const isCustomGradient = useMemo(
    () =>
      props.capsule.backgroundType === ECapsuleBackgroundType.CUSTOM_GRADIENT,
    [props.capsule.backgroundType]
  );

  return (
    <>
      <CustomSelect
        label="Theme"
        value={props.capsule.backgroundType}
        options={[
          ...Object.values(ECapsuleTheme),
          ...Object.values(ECapsuleBackgroundType),
        ]}
        onChange={(backgroundType) =>
          editSection({
            ...props,
            capsule: {
              ...props.capsule,
              backgroundType,
              color:
                backgroundType === ECapsuleBackgroundType.CUSTOM_GRADIENT
                  ? DEFAULT_TYPING_COLOR.repeat(2)
                  : DEFAULT_TYPING_COLOR,
            },
          })
        }
      />
      {isCustomGradient && (
        <CustomColorPicker
          value={props.capsule.color.slice(-9)}
          initOpacity={hexToOpacity(props.capsule.color.slice(-2))}
          onChange={(color) =>
            editSection({
              ...props,
              capsule: {
                ...props.capsule,
                color: isCustomGradient
                  ? props.capsule.color.slice(0, 9) + color
                  : color,
              },
            })
          }
        />
      )}
      {[
        ECapsuleBackgroundType.CUSTOM_COLOR,
        ECapsuleBackgroundType.CUSTOM_GRADIENT,
      ].includes(props.capsule.backgroundType as ECapsuleBackgroundType) && (
        <CustomColorPicker
          value={props.capsule.color.slice(0, 9)}
          initOpacity={
            isCustomGradient
              ? hexToOpacity(props.capsule.color.slice(7, 9))
              : hexToOpacity(props.capsule.color.slice(-2))
          }
          onChange={(color) =>
            editSection({
              ...props,
              capsule: {
                ...props.capsule,
                color: isCustomGradient
                  ? color + props.capsule.color.slice(-9)
                  : color,
              },
            })
          }
        />
      )}
      {isInEnum(ECapsuleBackgroundType, props.capsule.backgroundType) && (
        <CustomColorPicker
          label="Text Color"
          className="mt-4"
          initOpacity={hexToOpacity(props.capsule.fontColor.slice(-2))}
          value={props.capsule.fontColor}
          onChange={(fontColor) =>
            editSection({
              ...props,
              capsule: {
                ...props.capsule,
                fontColor,
              },
            })
          }
        />
      )}
      <CustomSelect
        label="Image"
        value={props.capsule.type}
        options={Object.values(ECapsuleType)}
        onChange={(type) =>
          editSection({
            ...props,
            capsule: {
              ...props.capsule,
              type,
            },
          })
        }
      />
      <CustomSelect
        label="Position"
        value={props.capsule.section}
        options={Object.values(ECapsuleSection)}
        onChange={(section) =>
          editSection({
            ...props,
            capsule: {
              ...props.capsule,
              section,
            },
          })
        }
      />
      <CustomSelect
        label="Animation"
        value={props.capsule.animation}
        options={Object.values(ECapsuleAnimation)}
        onChange={(animation) =>
          editSection({
            ...props,
            capsule: {
              ...props.capsule,
              animation,
            },
          })
        }
      />
      <div class="grid mt-4 grid-cols-2 gap-y-4 gap-x-5">
        <CustomInputNumber
          value={props.capsule.height}
          label="Height"
          onChange={(height) =>
            editSection({
              ...props,
              capsule: {
                ...props.capsule,
                height,
              },
            })
          }
        />
        <CustomInputNumber
          value={props.capsule.fontSize}
          label="Font size"
          onChange={(fontSize) =>
            editSection({
              ...props,
              capsule: {
                ...props.capsule,
                fontSize,
              },
            })
          }
        />
        <CustomInputNumber
          value={props.capsule.fontAlign}
          label="Align X"
          onChange={(fontAlign) =>
            editSection({
              ...props,
              capsule: {
                ...props.capsule,
                fontAlign,
              },
            })
          }
        />
        <CustomInputNumber
          value={props.capsule.fontAlignY}
          label="Align Y"
          onChange={(fontAlignY) =>
            editSection({
              ...props,
              capsule: {
                ...props.capsule,
                fontAlignY,
              },
            })
          }
        />
        <CustomInputNumber
          value={props.capsule.rotate}
          label="Rotate"
          min={0}
          max={360}
          onChange={(rotate) =>
            editSection({
              ...props,
              capsule: {
                ...props.capsule,
                rotate,
              },
            })
          }
        />
      </div>
      <CustomSwitch
        className="mt-4"
        isActive={props.capsule.enableStroke}
        label="Stroke"
        onChange={(enableStroke) =>
          editSection({
            ...props,
            capsule: {
              ...props.capsule,
              enableStroke,
            },
          })
        }
      />
      {props.capsule.enableStroke && (
        <div class="flex items-center justify-between gap-5 mt-4">
          <CustomColorPicker
            label="Color"
            value={props.capsule.stroke}
            onChange={(stroke) =>
              editSection({
                ...props,
                capsule: {
                  ...props.capsule,
                  stroke,
                },
              })
            }
          />
          <CustomInputNumber
            label="Width"
            value={props.capsule.strokeWidth}
            onChange={(strokeWidth) =>
              editSection({
                ...props,
                capsule: {
                  ...props.capsule,
                  strokeWidth,
                },
              })
            }
          />
        </div>
      )}
    </>
  );
};

export default Capsule;
