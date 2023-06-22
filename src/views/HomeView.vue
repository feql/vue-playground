<template>
  <div class="flex flex-row w-screen justify-center h-full">
    <div
      class="flex flex-col border-r border-gray-400 rounded-sm bg-slate-300 divide-y divide-gray-500"
      :class="'w-3/12'"
    >
      <div class="flex flex-row justify-between items-center">
        <span class="p-2">Projects</span>
        <button
          type="button"
          class="mr-2 my-2 inline-flex items-center gap-x-1.5 rounded-sm px-2.5 py-1.5 text-sm font-semibold text-slate-900 shadow-md bg-zinc-100 hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <PlusIcon size="20" class="-ml-0.5 h-5 w-5" aria-hidden="true" />
          Create Project
        </button>
      </div>
      <div class="flex flex-grow ">
        <ul role="list" class="divide-y divide-gray-400 w-full">
          <li
            v-for="(project, index) in projects"
            :key="project.id"
            class="flex gap-x-4 py-5 p-2 cursor-pointer"
            :class="{
              'bg-gray-100': index == activeIndex,
              'hover:bg-slate-200': index != activeIndex
            }"
            @click="onClickProjectListItem(project, index)"
          >
            <img class="h-16 w-16 flex-none rounded-md bg-gray-50" :src="project.imageUrl" alt="" />
            <div class="flex-auto">
              <div class="flex items-baseline justify-between gap-x-4">
                <p class="text-sm font-semibold leading-6 text-black">{{ project.name }}</p>
                <p class="flex-none text-xs text-gray-600">
                  <time :datetime="project.dateTime">{{ project.date }}</time>
                </p>
              </div>
              <p class="line-clamp-1 text-sm leading-6 text-gray-800">
                {{ project.description }}
              </p>
              <div class="flex items-center justify-left gap-x-4">
                <div class="flex items-left gap-x-1">
                  <TableCellsIcon size="20" class="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span class="text-sm text-gray-600">05 Tables</span>
                </div>
                <div class="flex items-left gap-x-1">
                  <RectangleGroupIcon size="20" class="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span class="text-sm text-gray-600">Multitenant</span>
                </div>

                
              </div>
            </div>
          </li>
        </ul>
      </div>
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
      projects: [
        {
          id: 1,
          name: 'Akili',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          description:
            'Asset management system by Mpola fintech',
          date: '1d ago',
          dateTime: '2023-03-04T15:54Z',
          isMultiTenant: false
        },
        {
          id: 2,
          name: 'Akili',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          description:
            'Asset management system by Mpola fintech',
          date: '1d ago',
          dateTime: '2023-03-04T15:54Z',
          isMultiTenant: false
        }
      ],
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

