import { useAppStore } from '../../../../../store/app.store';
import CustomSelect from '../../../../common/CustomSelect';
import CustomSwitch from '../../../../common/CustomSwitch';
import { IStatsSetting } from '../../default';
import {
  EStreakStatsLocale,
  EStreakStatsMode,
  EStreakStatsTheme,
} from '../../stats.enum';

const Streak = (props: IStatsSetting) => {
  const { editSection } = useAppStore();

  return (
    <>
      <CustomSelect
        label="Theme"
        options={Object.values(EStreakStatsTheme)}
        value={props.streak.theme}
        className="mt-4"
        onChange={(theme) =>
          editSection({
            ...props,
            streak: {
              ...props.streak,
              theme,
            },
          })
        }
      />
      <CustomSelect
        label="Language"
        options={Object.values(EStreakStatsLocale)}
        value={props.streak.lang}
        className="mt-4"
        onChange={(lang) =>
          editSection({
            ...props,
            streak: {
              ...props.streak,
              lang,
            },
          })
        }
      />
      <CustomSelect
        label="Mode"
        options={Object.values(EStreakStatsMode)}
        value={props.streak.mode}
        className="mt-4"
        onChange={(mode) =>
          editSection({
            ...props,
            streak: {
              ...props.streak,
              mode,
            },
          })
        }
      />
      <div class="grid grid-cols-2 gap-2">
        <CustomSwitch
          isActive={props.streak.hideBorder}
          label="Hide Border"
          onChange={(hideBorder) =>
            editSection({
              ...props,
              streak: {
                ...props.streak,
                hideBorder,
              },
            })
          }
        />
        <CustomSwitch
          isActive={props.streak.hideContribs}
          label="Hide Contribs"
          onChange={(hideContribs) =>
            editSection({
              ...props,
              streak: {
                ...props.streak,
                hideContribs,
              },
            })
          }
        />
        <CustomSwitch
          isActive={props.streak.hideCurrentStreak}
          label="Hide Current"
          onChange={(hideCurrentStreak) =>
            editSection({
              ...props,
              streak: {
                ...props.streak,
                hideCurrentStreak,
              },
            })
          }
        />
        <CustomSwitch
          isActive={props.streak.hideLongestStreak}
          label="Hide Longest"
          onChange={(hideLongestStreak) =>
            editSection({
              ...props,
              streak: {
                ...props.streak,
                hideLongestStreak,
              },
            })
          }
        />
        <CustomSwitch
          isActive={props.streak.animation}
          label="Animation"
          onChange={(animation) =>
            editSection({
              ...props,
              streak: {
                ...props.streak,
                animation,
              },
            })
          }
        />
      </div>
    </>
  );
};

export default Streak;
