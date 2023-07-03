<template>
  <div
    class="flex flex-col border-r border-gray-400 rounded-sm bg-slate-300 divide-y divide-gray-500"
    :class="'w-7/12'"
  >
    <div class="flex flex-row justify-between items-center">
      <span class="p-2 font-bold">Server Side Functions</span>
      <div class="flex flex-row items-center gap-x-3 ">
        <div>
          <div class="flex items-center rounded-sm shadow-md bg-zinc-100">
            <div class="relative flex flex-grow items-stretch focus-within:z-10">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                <MagnifyingGlassIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                name="function-search-input"
                id="function-search-input"
                class="bg-zinc-100 block w-full  rounded-none rounded-l-sm border-0 py-0.5 pl-8 text-gray-900  placeholder:text-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                style="margin-left: 0px;"
                placeholder="..."
              />
            </div>
            <div class="flex flex-row items-center px-1 ">
              <input id="filter-brf-methods" aria-describedby="filter-brf-methods" name="show-brf-methods" type="checkbox" class="h-4 w-4 rounded-sm border-gray-300 text-indigo-600 cursor-pointer focus-outline-none " />
              <label for="filter-brf-methods" class="font-medium text-gray-900 px-1 text-xs cursor-pointer">BEFORE RETURNS</label>
            </div>
            <div class="flex flex-row items-center px-1 ">
              <input id="filter-others-methods" aria-describedby="filter-others-methods" name="show-others-methods" type="checkbox" class="h-4 w-4 rounded-sm border-gray-300 text-indigo-600 cursor-pointer focus-outline-none " />
              <label for="filter-others-methods" class="font-medium text-gray-900 px-1 text-xs cursor-pointer">OTHERS</label>
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
        <button
          type="button"
          class="mr-2 my-2.5 inline-flex items-center gap-x-1.5 rounded-sm px-2.5 py-1.5 text-xs font-semibold text-slate-900 shadow-md bg-zinc-100 hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <PlusIcon size="20" class="-ml-0.5 h-4 w-4" aria-hidden="true" />
          Add a Function
        </button>
      </div>
    </div>
    <div class="flex flex-grow flex-row">
      <div class="w-4/12">
        <ul role="list" class="divide-y divide-gray-300 w-full py-10">
          <li
            v-for="(fn, index) in functions"
            :key="index"
            class="flex gap-x-4 py-2 p-2 cursor-pointer  ml-5 text-sm "
            :class="{
              'bg-slate-200': index != activeIndex,
              'bg-[#f0f0f0]': index == activeIndex,
              'text-slate-900 font-bold': index == activeIndex,
              'hover:bg-slate-200': index != activeIndex,
              'rounded-tl-md': index == 0, 
              'rounded-bl-md': index == (functions.length-1), 
              'shadow-md':  index == (functions.length-1),
            }"
            @click="onClickQueryListItem(fn, index)"
          >
            {{ fn.name }} 
          </li>
        </ul>
      </div>
      <div class="w-8/12 h-full bg-slate-900 flex flex-col text-white">
        <div>
          <v-ace-editor
            v-model:value="codeEditorContent"
            @init="editorInit"
            lang="php"
            theme="monokai"
            style="height: Calc(100vh - 145px)" />
        </div>
        <div class="bg-[#f0f0f0] pl-10 flex flex-row ">
          <div class="flex flex-row flex-grow items-center justify-between">
            <div class="flex flex-row flex-grow items-center">
              <span class="mr-2 bg-zinc-800 text-xs px-2.5 py-1.5 rounded-sm text-slate-300">
                Is Before Return: <b class="text-slate-100">TRUE</b>
              </span>
            </div>
            <div class="flex flex-row items-center">
              <button
                type="button"
                class="mr-2 my-2.5 ml-2 inline-flex items-center gap-x-1.5 rounded-sm px-2.5 py-1.5 text-xs font-semibold text-slate-300 shadow-md bg-zinc-800 hover:bg-zinc-900  hover:text-slate-200"
              >
                <PencilIcon size="20" class="-ml-0.5 h-3 w-3" aria-hidden="true" />
                Edit Fn Settings
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { PlusIcon, TableCellsIcon, RectangleGroupIcon, BarsArrowUpIcon, MagnifyingGlassIcon, PlayIcon, PencilIcon } from '@heroicons/vue/24/solid'
import { VAceEditor } from 'vue3-ace-editor';

export default {
  components: {
    PlusIcon,
    TableCellsIcon,
    RectangleGroupIcon,
    BarsArrowUpIcon, 
    MagnifyingGlassIcon,
    PlayIcon,
    PencilIcon,
    VAceEditor
  },
  data() {
    return {
      functions: [
        {
          id: 1,
          name: 'delete_items',
          content: "<?php\nfunction !12x12!(){\n/*Write your php server side function logic here*/\n}\n?>",
          hasErrors: false,
          errors: [],
          isBeforeReturn: false
        },
        {
          id: 2,
          name: 'dependence_report',
          content: "<?php\nfunction !12x12!(){\n/*Write your php server side function logic here*/\n}\n?>",
          hasErrors: false,
          errors: [],
          isBeforeReturn: false
        },
        {
          id: 3,
          name: 'process_stock_count',
          content: "<?php\nfunction !12x12!(){\n/*Write your php server side function logic here*/\n}\n?>",
          hasErrors: false,
          errors: [],
          isBeforeReturn: false
        }
      ],
      activeIndex: -1,
      codeEditorContent: "<?php\n/*Select a function from the left*/\n?>",
    }
  },
  methods: {
    onClickQueryListItem(query, index) {
      this.codeEditorContent = query.content.replace("!12x12!", query.name);
      this.activeIndex = index;
    }
  }
}
</script>