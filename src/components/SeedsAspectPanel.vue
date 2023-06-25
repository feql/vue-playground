<template>
  <div
    class="flex flex-col border-r border-gray-400 rounded-sm bg-slate-300 divide-y divide-gray-500"
    :class="'w-3/12'"
  >
    <div class="flex flex-row justify-between items-center">
      <span class="p-2">Seeds</span>
      <button
        type="button"
        class="mr-2 my-2 inline-flex items-center gap-x-1.5 rounded-sm px-2.5 py-1.5 text-sm font-semibold text-slate-900 shadow-md bg-zinc-100 hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <PlusIcon size="20" class="-ml-0.5 h-5 w-5" aria-hidden="true" />
        Add a Seed
      </button>
    </div>
    <div class="flex flex-grow">
      <ul role="list" class="divide-y divide-gray-400 w-full">
        <li
          v-for="(seed, index) in seeds"
          :key="index"
          class="flex gap-x-4 py-5 p-2 cursor-pointer"
          :class="{
            'bg-gray-100': index == activeIndex,
            'hover:bg-slate-200': index != activeIndex
          }"
          @click="onClickProjectListItem(seed, index)"
        >
          {{ seed }}
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
      seeds: [],
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