import { useAppStore } from '../../../../../store/app.store';
import CustomCheckbox from '../../../../common/CustomCheckbox';
import CustomSelect from '../../../../common/CustomSelect';
import CustomSwitch from '../../../../common/CustomSwitch';
import { IStatsSetting } from '../../default';
import {
  EAdditionStats,
  EGithubReadmeStatsTheme,
  EHideStats,
  ERankIcon,
} from '../../stats.enum';

const Stats = (props: IStatsSetting) => {
  const { editSection } = useAppStore();

  return (
    <>
      <CustomSwitch
        isActive={props.stats.active}
        label="Active"
        vertical={false}
        onChange={(active) => {
          editSection({
            ...props,
            stats: {
              ...props.stats,
              active,
            },
          });
        }}
      />
      <CustomSelect
        label="Icon"
        options={Object.values(ERankIcon)}
        value={props.stats.rankIcon}
        className="mt-4"
        onChange={(rankIcon) =>
          editSection({
            ...props,
            stats: {
              ...props.stats,
              rankIcon,
            },
          })
        }
      />
      <CustomSelect
        label="Theme"
        options={Object.values(EGithubReadmeStatsTheme)}
        value={props.stats.theme}
        className="mt-4"
        onChange={(theme) =>
          editSection({
            ...props,
            stats: {
              ...props.stats,
              theme,
            },
          })
        }
      />
      <div class="grid grid-cols-2 gap-2">
        <CustomSwitch
          isActive={props.stats.border}
          label="Hide Border"
          onChange={(border) => {
            editSection({
              ...props,
              stats: {
                ...props.stats,
                border,
              },
            });
          }}
        />
        <CustomSwitch
          isActive={props.stats.icon}
          label="Show Icons"
          onChange={(icon) => {
            editSection({
              ...props,
              stats: {
                ...props.stats,
                icon,
              },
            });
          }}
        />
        <CustomSwitch
          isActive={props.stats.rank}
          label="Hide Rank"
          onChange={(rank) => {
            editSection({
              ...props,
              stats: {
                ...props.stats,
                rank,
              },
            });
          }}
        />
        <CustomSwitch
          isActive={props.stats.hideTitle}
          label="Hide Title"
          onChange={(hideTitle) => {
            editSection({
              ...props,
              stats: {
                ...props.stats,
                hideTitle,
              },
            });
          }}
        />
        <CustomSwitch
          isActive={props.stats.animation}
          label="Animation"
          onChange={(animation) => {
            editSection({
              ...props,
              stats: {
                ...props.stats,
                animation,
              },
            });
          }}
        />
      </div>
      <h4 class="mt-4 mb-2">Display options</h4>
      <div class="grid grid-cols-2 gap-x-2 gap-y-3">
        {Object.values(EHideStats).map((opt) => (
          <CustomCheckbox
            label={opt}
            isActive={!props.stats.hideOpts.includes(opt)}
            onChange={(checked) =>
              editSection({
                ...props,
                stats: {
                  ...props.stats,
                  hideOpts: checked
                    ? props.stats.hideOpts.concat(opt)
                    : props.stats.hideOpts.filter((o) => o !== opt),
                },
              })
            }
          />
        ))}
        {Object.values(EAdditionStats).map((opt) => (
          <CustomCheckbox
            label={opt}
            isActive={props.stats.additionOpts.includes(opt)}
            onChange={(checked) =>
              editSection({
                ...props,
                stats: {
                  ...props.stats,
                  additionOpts: checked
                    ? props.stats.additionOpts.concat(opt)
                    : props.stats.additionOpts.filter((o) => o !== opt),
                },
              })
            }
          />
        ))}
      </div>
    </>
  );
};

export default Stats;
