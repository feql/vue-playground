<template>
    <div
      class="flex flex-col border-r border-gray-400 rounded-sm bg-slate-300 divide-y divide-gray-500"
      :class="'w-2/12'"
    >
      <div class="flex flex-row justify-between items-center">
        <span class="p-2 font-bold">Projects</span>
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
            class="flex flex-col gap-x-4 pb-4 p-2 cursor-pointer"
            :class="{
              'bg-gray-100': index == activeIndex,
              'hover:bg-slate-200': index != activeIndex
            }"
            @click="onClickProjectListItem(project, index)"
          >
            <p class="text-md text-center font-semibold leading-6 text-black mt-2 mb-4">{{ project.name }}</p>
            <div class="flex justify-start">
              <img class="h-16 w-16 flex-none rounded-md bg-gray-50" :src="project.imageUrl" alt="" />
              <div class="flex flex-col items-center justify-left ">
                <div class="flex items-left ml-2 items-center">
                  <TableCellsIcon size="20" class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span class="text-xs text-gray-600 pl-1">05 Tables</span>
                </div>
                <div class="flex items-left ml-4 items-center">
                  <RectangleGroupIcon size="20" class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span class="text-xs text-gray-600 pl-1">Multitenant</span>
                </div>
              </div>
            </div>
            <div class="flex-auto mt-2">
              <p class="line-clamp-3 text-sm leading-6 text-gray-800 text-left ">
                {{ project.description }}
              </p>
            </div>
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
      projects: [
        {
          id: 1,
          name: 'Gracio',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          description:
            'We make the future of crypto a reality',
          date: '1d ago',
          dateTime: '2023-03-04T15:54Z',
          isMultiTenant: false
        },
        {
          id: 2,
          name: 'Artboomer',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          description:
            'An online store for artists and enthusiasists',
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