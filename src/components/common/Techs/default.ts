import { ETechProvider } from "./tech.enum";

export interface ITechSetting {
  icons: string[];
  settings: {
    provider: ETechProvider;
  };
}

export const techSetting: ITechSetting = {
  icons: [],
  settings: {
    provider: ETechProvider.DEVICONS,
  },
};
