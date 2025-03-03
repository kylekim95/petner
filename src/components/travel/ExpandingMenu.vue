<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';

export interface ExpandingMenuItemData {
  id: number;
  bgImage: string;
  title: string;
  content: string;
}
interface ExpandingMenuProps {
  itemData: ExpandingMenuItemData[];
}

const props = defineProps<ExpandingMenuProps>();
const focusedId = ref(0);
const prevFocusedId = ref(0);
const menuItemElement = useTemplateRef<HTMLDivElement[]>('menuItemElements');
const menuItemElementTitle = useTemplateRef<HTMLSpanElement[]>('menuItemElementTitles');
const menuItemElementTitle2 = useTemplateRef<HTMLSpanElement[]>('menuItemElementTitles2');

const menuItemElementContent = useTemplateRef<HTMLSpanElement[]>('menuItemElementContents');
const menuItemElementContent2 = useTemplateRef<HTMLSpanElement[]>('menuItemElementContents2');

function OnExpandEnd(e: TransitionEvent) {
  if (e.propertyName === 'width') {
    if (menuItemElement.value && menuItemElement.value[focusedId.value] === e.target) {
      if (e.target instanceof HTMLDivElement) {
        if (menuItemElementTitle.value) {
          const spanElement = menuItemElementTitle.value[focusedId.value] as HTMLSpanElement;
          spanElement.classList.remove('opacity-0');
          spanElement.classList.add('opacity-100');
        }
        if (menuItemElementContent.value) {
          const spanElement = menuItemElementContent.value[focusedId.value] as HTMLSpanElement;
          spanElement.classList.remove('opacity-0');
          spanElement.classList.add('opacity-100');
        }
      }
    }
    if (menuItemElement.value && menuItemElement.value[prevFocusedId.value] === e.target) {
      if (e.target instanceof HTMLDivElement) {
        if (menuItemElementTitle2.value) {
          const spanElement = menuItemElementTitle2.value[prevFocusedId.value] as HTMLSpanElement;
          spanElement.classList.remove('opacity-0');
          spanElement.classList.add('opacity-100');
        }
        if (menuItemElementContent2.value) {
          const spanElement = menuItemElementContent2.value[prevFocusedId.value] as HTMLSpanElement;
          spanElement.classList.remove('opacity-0');
          spanElement.classList.add('opacity-100');
        }
      }
    }
  }
}
function OnExpandStart(e: TransitionEvent) {
  if (menuItemElement.value && menuItemElement.value[prevFocusedId.value] === e.target) {
    if (e.target instanceof HTMLDivElement) {
      if (menuItemElementTitle.value) {
        const spanElement = menuItemElementTitle.value[prevFocusedId.value] as HTMLSpanElement;
        spanElement.classList.add('opacity-0');
        spanElement.classList.remove('opacity-100');
      }
      if (menuItemElementContent.value) {
        const spanElement = menuItemElementContent.value[prevFocusedId.value] as HTMLSpanElement;
        spanElement.classList.add('opacity-0');
        spanElement.classList.remove('opacity-100');
      }
    }
  }
  if (menuItemElement.value && menuItemElement.value[focusedId.value] === e.target) {
    if (e.target instanceof HTMLDivElement) {
      if (menuItemElementTitle2.value) {
        const spanElement = menuItemElementTitle2.value[focusedId.value] as HTMLSpanElement;
        spanElement.classList.add('opacity-0');
        spanElement.classList.remove('opacity-100');
      }
      if (menuItemElementContent2.value) {
        const spanElement = menuItemElementContent2.value[focusedId.value] as HTMLSpanElement;
        spanElement.classList.add('opacity-0');
        spanElement.classList.remove('opacity-100');
      }
    }
  }
}
function OnMouseEnter(e: Event, id: number) {
  if (focusedId.value === id) return;
  prevFocusedId.value = focusedId.value;
  focusedId.value = id;
}
</script>

<template>
  <div class="container w-100 h-100 d-flex gap-1 position-relative">
    <div
      v-for="item in props.itemData"
      :key="item.id"
      class="container h-100 rounded p-2"
      :class="focusedId === item.id ? 'flex-fill' : 'col-2'"
      style="
        transition: all 0.5s ease-in-out;
        background-blend-mode: multiply;
        background-color: rgb(0, 0, 0, 0.5);
      "
      :style="{ backgroundImage: `url(${item.bgImage})` }"
      ref="menuItemElements"
      @mouseenter="(e) => OnMouseEnter(e, item.id)"
      @transitionend="(e) => OnExpandEnd(e)"
      @transitionstart="(e) => OnExpandStart(e)"
    >
      <div class="p-2 position-absolute bottom-0">
        <span
          class="horizontal-text-title text-gray-1"
          :class="item.id === focusedId ? 'opacity-100' : 'opacity-0'"
          ref="menuItemElementTitles"
          >{{ item.title }}</span
        >
        <br />
        <span
          class="horizontal-text-content text-gray-1"
          :class="item.id === focusedId ? 'opacity-100' : 'opacity-0'"
          ref="menuItemElementContents"
          >{{ item.content }}</span
        >
      </div>
      <div class="p-2 d-flex">
        <span
          class="vertical-text-title text-gray-1"
          :class="item.id === focusedId ? 'opacity-0' : 'opacity-100'"
          ref="menuItemElementTitles2"
          >{{ item.title }}</span
        >
        <span
          class="vertical-text-content text-gray-6"
          :class="item.id === focusedId ? 'opacity-0' : 'opacity-100'"
          ref="menuItemElementContents2"
          >{{ item.content }}</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.horizontal-text-title {
  font-size: 48px;
  font-family: 'Paperlogy-8ExtraBold';
  transition: all 0.3s;
}
.horizontal-text-content {
  font-size: 24px;
  font-family: 'Paperlogy-5Medium';
  transition: all 0.3s;
}
.vertical-text-title {
  font-size: 20px;
  font-family: 'Paperlogy-8ExtraBold';
  transition: all 0.3s;
  letter-spacing: 0.25rem;
  writing-mode: vertical-lr;
  text-orientation: upright;
}
.vertical-text-content {
  font-size: 20px;
  font-family: 'Paperlogy-5Medium';
  transition: all 0.3s;
  letter-spacing: 0.25rem;
  writing-mode: vertical-lr;
  text-orientation: upright;
}
</style>
