import { objectToUrl } from ".";
import { IViewsSetting } from "../components/toolkits/Views/default";
import {
  EHitsViewType,
  EViewProvider,
  EVisitProIcon,
  EVisitProTheme,
} from "../components/toolkits/Views/views.enum";

const moeCounterUrl = (setting: IViewsSetting) => {
  return `https://count.getloli.com/get/@${setting.username}?theme=${setting.moeCounter.theme}`;
};

const hitsCounterUrl = (setting: IViewsSetting) => {
  return `https://hits.sh/github.com/${setting.username}/hits.svg?${objectToUrl(
    {
      ...setting.hitsCounter,
      view:
        setting.hitsCounter.viewType === EHitsViewType.TODAY
          ? "today-total"
          : "total",
    },
    { omit: ["viewType"] }
  )}`;
};

const visitCounterUrl = (setting: IViewsSetting) => {
  return `https://visit-counter.vercel.app/counter.png?${objectToUrl({
    ...setting.visitCounter,
    page: setting.username,
    ta: ` ${setting.visitCounter.ta.trim()}`,
    tb: `${setting.visitCounter.tb.trim()} `,
  }).replace(/\%23/g, "")}`;
};

const visitCounterProUrl = (setting: IViewsSetting) => {
  return `https://visitcount.itsvg.in/api?id=${setting.username}&${objectToUrl(
    {
      ...setting.visitProCounter,
    },
    {
      omit: [
        setting.visitProCounter.color === EVisitProTheme.RANDOM ? "color" : "",
        setting.visitProCounter.icon === EVisitProIcon.RANDOM ? "icon" : "",
      ],
    }
  )}`;
};

const viewToMarkdown = (setting: IViewsSetting) => {
  let url = "";
  switch (setting.provider) {
    case EViewProvider.HITS:
      url = hitsCounterUrl(setting);
      break;
    case EViewProvider.MOE:
      url = moeCounterUrl(setting);
      break;
    case EViewProvider.VISIT:
      url = visitCounterUrl(setting);
      break;
    case EViewProvider.VISIT_PRO:
      url = visitCounterProUrl(setting);
      break;
  }
  return `<div align="${setting.align}">
    <img src="${url}" />
</div>`;
};

export { moeCounterUrl, hitsCounterUrl, visitCounterUrl, visitCounterProUrl };
export default viewToMarkdown;
