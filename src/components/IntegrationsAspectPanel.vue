<template>
  <div
    class="flex flex-col border-r border-gray-400 rounded-sm bg-slate-300 divide-y divide-gray-500"
    :class="'w-7/12'"
  >
    <div class="flex flex-row justify-between items-center">
      <span class="p-2 font-bold">Integrated Services</span>
      <div class="flex flex-row items-center gap-x-3 ">
        <div>
          
        </div>
        <button
          type="button"
          class="mr-2 my-2.5 inline-flex items-center gap-x-1.5 rounded-sm px-2.5 py-1.5 text-xs font-semibold text-slate-900 shadow-md bg-zinc-100 hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <PlusIcon size="20" class="-ml-0.5 h-4 w-4" aria-hidden="true" />
          Add a Service
        </button>
      </div>
    </div>
    <div class="flex flex-grow flex-row">
      <div class="w-4/12">
        <ul role="list" class="divide-y divide-gray-300 w-full py-10">
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
        <div>
          <v-ace-editor
            v-model:value="queryCodeEditorContent"
            @init="editorInit"
            lang="javascript"
            theme="monokai"
            style="height: 300px" />
        </div>
        <div class="bg-[#f0f0f0] pl-10 flex flex-row ">
          <div class="flex flex-row flex-grow items-center justify-between border-b border-b border-b-slate-400">
            <div class="flex flex-row flex-grow items-center">
              <span class="mr-2 bg-zinc-800 text-xs px-2.5 py-1.5 rounded-sm text-slate-300 font-bold">
                Save Changes
              </span>
              <button
                type="button"
                class="mr-2 my-2.5 ml-2 inline-flex items-center gap-x-1.5 rounded-sm px-2.5 py-1.5 text-xs font-semibold text-slate-300 shadow-md bg-zinc-800 hover:bg-zinc-900  hover:text-slate-200"
              >
                <PlayIcon size="20" class="-ml-0.5 h-4 w-4" aria-hidden="true" />
                Execute Test
              </button>
            </div>
            <div class="flex flex-row items-center">
              <button
                type="button"
                class="mr-2 my-2.5 ml-2 inline-flex items-center gap-x-1.5 rounded-sm px-2.5 py-1.5 text-xs font-semibold text-white shadow-md bg-red-800 hover:bg-red-900  hover:text-white"
              >
                <PencilIcon size="20" class="-ml-0.5 h-3 w-3" aria-hidden="true" />
                Delete Service
              </button>
            </div>
            
          </div>
          
        </div>
        <div>
          <v-ace-editor
            v-model:value="resultsCodeEditorContent"
            @init="editorInit"
            lang="javascript"
            theme="monokai"
            style="height: 300px" />
        </div>
        <div class="pl-10 flex flex-row items-center flex-grow">
          <span class="text-xs">Service Name: <b>MailChimp Email Server</b></span>
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