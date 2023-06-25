<template>
  <div
    class="flex flex-col border-r border-gray-400 rounded-sm bg-slate-300 divide-y divide-gray-500"
    :class="'w-3/12'"
  >
    <div class="flex flex-row justify-between items-center">
      <span class="p-3">Migrations</span>
    </div>
    <div class="flex flex-grow">
      <ul role="list" class="divide-y divide-gray-400 w-full">
        <li
          v-for="(migration, index) in migrations"
          :key="index"
          class="flex gap-x-4 py-5 p-2 cursor-pointer"
          :class="{
            'bg-gray-100': index == activeIndex,
            'hover:bg-slate-200': index != activeIndex
          }"
          @click="onClickProjectListItem(migration, index)"
        >
          {{ migration }}
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import { PlusIcon, TableCellsIcon, RectangleGroupIcon } from '@heroicons/vue/24/solid'
export default {
  components: {
    PlusIcon,
    TableCellsIcon,
    RectangleGroupIcon
  },
  data() {
    return {
      migrations: [],
      activeIndex: -1
    }
  },
  methods: {
    onClickProjectListItem(project, index) {
      this.activeIndex = index
    }
  }
}
</script>