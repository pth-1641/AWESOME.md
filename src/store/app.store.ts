import { create } from 'zustand';

interface AppState {
  sections: any[];
  sectionId: string | null;
  addSection: (sectionType: unknown) => void;
  focusOnSection: (id: string) => void;
  editSection: (id: any) => void;
}

export const useAppStore = create<AppState>((set) => ({
  sections: [],
  sectionId: null,

  addSection: (section: unknown) =>
    set((state) => ({
      sections: [...state.sections, section],
    })),
  focusOnSection: (id: string) =>
    set((state) => ({
      sectionId:
        state.sections.find((section) => section.id === id)?.id || null,
    })),
  editSection: (setting: any) =>
    set((state) => ({
      sections: state.sections.map((section) =>
        section.id !== setting.id ? section : setting
      ),
    })),
}));
