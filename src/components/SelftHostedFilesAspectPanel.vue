<template>
  <div
    class="flex flex-col border-r border-gray-400 rounded-sm bg-slate-300 divide-y divide-gray-500"
    :class="'w-7/12'"
  >
    <div class="flex flex-row justify-between items-center">
      <span class="px-2 py-3 font-bold">SELF HOSTED FILES</span>
      <div class="flex flex-row items-center gap-x-3 ">
        <div>
          <div class="flex items-center rounded-sm shadow-md bg-zinc-100 mr-2 ">
            <div class="relative flex flex-grow items-stretch focus-within:z-10">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                <MagnifyingGlassIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-zinc-100 block w-full  rounded-none rounded-l-sm border-0 py-0.5 pl-8 text-gray-900  placeholder:text-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                style="margin-left: 0px;"
                placeholder="..."
              />
            </div>
            <div class="flex flex-row items-center px-1 ">
              <input id="filter-post-methods" aria-describedby="filter-post-methods" name="show-posts-methods" type="checkbox" class="h-4 w-4 rounded-sm border-gray-300 text-indigo-600 cursor-pointer focus-outline-none " />
              <label for="filter-post-methods" class="font-medium text-gray-900 px-1 text-xs cursor-pointer">Images</label>
            </div>
            <div class="flex flex-row items-center px-1 ">
              <input id="filter-get-methods" aria-describedby="filter-get-methods" name="show-gets-methods" type="checkbox" class="h-4 w-4 rounded-sm border-gray-300 text-indigo-600 cursor-pointer focus-outline-none " />
              <label for="filter-get-methods" class="font-medium text-gray-900 px-1 text-xs cursor-pointer">Docs</label>
            </div>
            <div class="flex flex-row items-center px-1 ">
              <input id="filter-update-methods" aria-describedby="filter-update-methods" name="show-updates-methods" type="checkbox" class="h-4 w-4 rounded-sm border-gray-300 text-indigo-600 cursor-pointer focus-outline-none " />
              <label for="filter-update-methods" class="font-medium text-gray-900 px-1 text-xs cursor-pointer">Videos</label>
            </div>
            <div class="flex flex-row items-center px-1 ">
              <input id="filter-delete-methods" aria-describedby="filter-delete-methods" name="show-deletes-methods" type="checkbox" class="h-4 w-4 rounded-sm border-gray-300 text-indigo-600 cursor-pointer focus-outline-none " />
              <label for="filter-delete-methods" class="font-medium text-gray-900 px-1 text-xs cursor-pointer">Audio</label>
            </div>
            <div class="flex flex-row items-center px-1 ">
              <input id="filter-delete-methods" aria-describedby="filter-delete-methods" name="show-deletes-methods" type="checkbox" class="h-4 w-4 rounded-sm border-gray-300 text-indigo-600 cursor-pointer focus-outline-none " />
              <label for="filter-delete-methods" class="font-medium text-gray-900 px-1 text-xs cursor-pointer">Other</label>
            </div>
            <button
              type="button"
              class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-1 pr-2 py-1.5 text-xs font-semibold text-gray-900 hover:bg-zinc-200 cursor-pointer"
            >
              <BarsArrowUpIcon class="-ml-0.5 h-4 w-4 text-gray-400" aria-hidden="true" />
              Sort
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-grow flex-row">
      <div class="w-4/12">
        <div class="flex justify-between items-center py-2">
            <div class="ml-5 p-2">
                <span class="font-bold">13</span> Files
            </div>
            <div class="font-bold p-2">20 GB</div>
        </div>
        <ul role="list" class="divide-y divide-gray-300 w-full py-4 pt-0">
          <li
            v-for="(query, index) in queries"
            :key="index"
            class="flex gap-x-4 py-2 p-2 cursor-pointer  ml-5 text-sm "
            :class="{
              'bg-slate-200': index != activeIndex,
              'bg-[#f0f0f0]': index == activeIndex,
              'text-slate-900 font-bold': index == activeIndex,
              'hover:bg-slate-200': index != activeIndex,
              'rounded-tl-md': index == 0, 
              'rounded-bl-md': index == (queries.length-1), 
              'shadow-md':  index == (queries.length-1),
            }"
            @click="onClickQueryListItem(query, index)"
          >
            {{ query.name }} 
          </li>
        </ul>
      </div>
      <div class="w-8/12 h-full bg-slate-900 flex flex-col text-white">
        <div class="bg-[#f0f0f0]">
            File Preview
        </div>
        <div class="flex-grow p-10 flex-col">
            <div class="">
                File Details
            </div>
            <div class="">
            </div>
            <div class="flex justify-between">
                <button
                    type="button"
                    class="my-2.5 inline-flex items-center gap-x-1.5 rounded-sm px-2.5 py-1.5 text-xs font-semibold text-slate-300 shadow-md bg-purple-800 hover:bg-purple-900  hover:text-purple-200"
                >
                    <PlayIcon size="20" class="-ml-0.5 h-4 w-4" aria-hidden="true" />
                    Download
                </button>
                <button
                    type="button"
                    class="my-2.5 ml-2 inline-flex items-center gap-x-1.5 rounded-sm px-2.5 py-1.5 text-xs font-semibold text-slate-300 shadow-md bg-red-800 hover:bg-red-900  hover:text-slate-200"
                >
                    <PlayIcon size="20" class="-ml-0.5 h-4 w-4" aria-hidden="true" />
                    Delete File
                </button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { PlusIcon, TableCellsIcon, RectangleGroupIcon, BarsArrowUpIcon, MagnifyingGlassIcon, PlayIcon, PencilIcon } from '@heroicons/vue/24/solid'

export default {
  components: {
    PlusIcon,
    TableCellsIcon,
    RectangleGroupIcon,
    BarsArrowUpIcon, 
    MagnifyingGlassIcon,
    PlayIcon,
    PencilIcon
  },
  data() {
    return {
      queries: [
        {
          id: 1,
          name: 'users list',
          queryObject: {},
          method: 'get',
          hasErrors: false,
          results: {},
          errors: [],
          lastExecutedOn: ''
        },
        {
          id: 2,
          name: 'add users',
          queryObject: {},
          method: 'post',
          hasErrors: false,
          results: {},
          errors: [],
          lastExecutedOn: ''
        },
        {
          id: 2,
          name: 'remove users',
          queryObject: {},
          method: 'delete',
          hasErrors: false,
          results: {},
          errors: [],
          lastExecutedOn: ''
        }
      ],
      activeIndex: -1,
      queryCodeEditorContent: "{\n/*Write your query here*/\n}",
      resultsCodeEditorContent: "\n/*Query results are displayed here*/\n"
    }
  },
  methods: {
    onClickQueryListItem(query, index) {
      this.activeIndex = index
    }
  }
}
</script>