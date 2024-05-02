import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Icon } from '@iconify/react';
import { EToolkitType } from '../enums/share.enum';
import { useAppStore } from '../store/app.store';
import DevSocialPreview from './toolkits/DevSocial/ui/Preview';
import IconPreview from './toolkits/Icon/ui/Preview';
import ImagePreview from './toolkits/Image/ui/Preview';
import QuotePreview from './toolkits/Quote/ui/Preview';
import StatsPreview from './toolkits/Stats/ui/Preview';
import TextPreview from './toolkits/Text/ui/Preview';
import ViewsPreview from './toolkits/Views/ui/Preview';

export const PreviewUI = () => {
  const { sections, swapSection } = useAppStore();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: any) => {
    if (!sections.length) return;
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = sections.findIndex(
        (section) => section.id === active.id
      );
      const newIndex = sections.findIndex((section) => section.id === over.id);
      swapSection(arrayMove(sections, oldIndex, newIndex));
    }
  };

  return (
    <div class="flex-1 amd-border p-5 flex flex-col gap-3 overflow-auto">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={sections}
          strategy={verticalListSortingStrategy}
        >
          {sections.map((section) => (
            <RenderedSection key={section.id} section={{ ...section }} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

const RenderedSection = ({ section }: { section: any & { id: string } }) => {
  const { sectionId, focusOnSection, removeSection } = useAppStore();

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: section.id, transition: null });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      class={`border rounded-md p-4 hover:border-emerald-400 cursor-pointer group relative ${
        sectionId === section.id ? 'border-emerald-400' : 'border-white/15'
      }`}
      onMouseDown={() => focusOnSection(section.id)}
      ref={setNodeRef}
      {...(attributes as any)}
      {...listeners}
      style={style}
    >
      <span
        class={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 inline-block p-1.5 border rounded-full bg-primary border-white/15 duration-100 group-hover:opacity-100 ${
          sectionId === section.id ? 'opacity-100' : 'opacity-0'
        }`}
        onMouseDown={() => removeSection(section.id)}
      >
        <Icon icon="mynaui:trash-one" />
      </span>
      <div class="overflow-auto">
        {section.type === EToolkitType.TEXT && <TextPreview id={section.id} />}
        {section.type === EToolkitType.TECH && <IconPreview id={section.id} />}
        {section.type === EToolkitType.SOCIAL && (
          <IconPreview id={section.id} />
        )}
        {section.type === EToolkitType.STATS && (
          <StatsPreview id={section.id} />
        )}
        {section.type === EToolkitType.VIEWS && (
          <ViewsPreview id={section.id} />
        )}
        {section.type === EToolkitType.IMAGE && (
          <ImagePreview id={section.id} />
        )}{' '}
        {section.type === EToolkitType.MEME && <ImagePreview id={section.id} />}
        {section.type === EToolkitType.QUOTE && (
          <QuotePreview id={section.id} />
        )}
        {section.type === EToolkitType.DEV_SOCIAL && (
          <DevSocialPreview id={section.id} />
        )}
      </div>
    </div>
  );
};
