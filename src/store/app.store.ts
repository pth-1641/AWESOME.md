import { create } from 'zustand';
import { EToolkitType } from '../enums/share.enum';
import { useLocalStorage } from '../hooks';
import { APP_NAME } from '../constants';

interface AppState {
  sections: (any & { id: string })[];
  sectionId: string | null;
  addSection: (section: any) => void;
  focusOnSection: (id: string) => void;
  editSection: (id: any) => void;
  swapSection: (sections: any[]) => void;
  removeSection: (sectionId: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  sections: useLocalStorage.getKeysLike(APP_NAME) || [],
  sectionId: null,

  addSection: <T>(section: T & { id: string; type: EToolkitType }) =>
    set((state) => ({
      sections: [...state.sections, section],
    })),
  focusOnSection: (id: string) =>
    set((state) => ({
      sectionId:
        state.sections.find((section) => section.id === id)?.id || null,
    })),
  editSection: <T>(setting: T & { id: string }) =>
    set((state) => ({
      sections: state.sections.map((section) =>
        section.id !== setting.id ? section : setting
      ),
    })),
  swapSection: (newSections: any[]) => set(() => ({ sections: newSections })),
  removeSection: (sectionId: string) => {
    useLocalStorage.remove(`${APP_NAME}_${sectionId}`);
    set((state) => ({
      sections: state.sections.filter((section) => section.id !== sectionId),
      sectionId:
        state.sectionId === sectionId ? state.sections[0].id : sectionId,
    }));
  },
}));
