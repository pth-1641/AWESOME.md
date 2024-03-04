import { create } from 'zustand';
import { EToolkitType } from '../enums/share.enum';

interface AppState {
  sections: any[];
  sectionId: string | null;
  addSection: (section: any) => void;
  focusOnSection: (id: string) => void;
  editSection: (id: any) => void;
}

export const useAppStore = create<AppState>((set) => ({
  sections: [],
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
}));
