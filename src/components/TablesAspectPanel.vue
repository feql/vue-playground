<template>
  <div
    class="flex flex-col border-r border-gray-400 rounded-sm bg-slate-300 divide-y divide-gray-500"
    :class="'w-6/12'"
  >
    <div class="flex flex-row justify-between items-center">
      <span class="p-2">Tables</span>
      <button
        type="button"
        class="mr-2 my-2 inline-flex items-center gap-x-1.5 rounded-sm px-2.5 py-1.5 text-sm font-semibold text-slate-900 shadow-md bg-zinc-100 hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <PlusIcon size="20" class="-ml-0.5 h-5 w-5" aria-hidden="true" />
        Add a Table
      </button>
    </div>
    <div class="flex flex-grow flex-col">
      search&nbsp;bar
      
      <div v-for="(table, index) in tables" :key="index" class="mx-2">
        <table class="min-w-full divide-y divide-gray-300" >
          <thead class="bg-gray-200">
            <tr>
              <th scope="col" colspan="5" class="py-1 pl-2 pr-2 rounded-tl-md text-left text-lg font-semibold border-b border-gray-300 ">
                {{table.name}} <small class="ml-10 text-gray-400 font-normal text-xs" v-if="table.description && table.description.length > 0">-  {{table.description}}</small>
              </th>
              <th scope="col" class="relative rounded-tr-md text-right border-b border-gray-300">
                <button
                  type="button"
                  class="mr-1 my-1 inline-flex items-center gap-x-1.5 rounded-sm px-2.5 py-1 text-xs font-semibold text-slate-900 shadow-md bg-zinc-100 hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <PlusIcon size="10" class="-ml-0.5 h-3 w-3" aria-hidden="true" />
                  Column
                </button>
              </th>
            </tr>
            <tr>
              <th scope="col" class="py-1 px-2 text-left text-sm font-semibold text-gray-900 w-[250px]">column</th>
              <th scope="col" class="py-1 px-2 text-left text-sm font-semibold text-gray-900 w-[100px]">data type</th>
              <th scope="col" class="py-1 px-1 text-left text-sm font-semibold text-gray-900 text-center w-[50px]">length</th>
              <th scope="col" class="py-1 px-2 text-left text-sm font-semibold text-gray-900 w-[150px]">default</th>
              <th scope="col" class="py-1 px-2 text-left text-sm font-semibold text-gray-900 w-[260px]">description</th>
              <th scope="col" class="py-1 px-2 text-left text-sm w-[50px]">
                <span class="sr-only">Edit</span>
              </th> 
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-white">
            <tr v-for="(column,index) in table.columns" :key="index">
              <td class="whitespace-nowrap py-1 px-2 text-sm font-medium text-gray-900 w-[250px]">
                <div class="flex flex-row justify-between items-center">
                  <div class="flex flex-row ">
                    {{ column?.name }}
                    <StarIcon size="10" class="ml-0.5 h-2 w-2 text-red-200" aria-hidden="true" v-if="column?.isEngineColumn" />
                  </div>
                </div>
              </td>
              <td class="whitespace-nowrap py-1 px-2 text-sm text-gray-500">{{ column?.type }}</td>
              <td class="whitespace-nowrap py-1 pl-2 pr-5 text-sm text-gray-500 text-right">{{ column?.length }}</td>
              <td class="whitespace-nowrap py-1 px-2 text-sm text-gray-500">{{ column?.defaultValue }}</td>
              <td class="py-1 px-2 text-gray-500">
                <div class="max-w-[260px] text-xs">
                  {{ column?.description }}
                </div>
              </td>
              <td class="relative whitespace-nowrap py-1 pl-3 pr-4 text-right text-sm font-medium  w-[50px]">
                <a href="#" class="text-indigo-600 hover:text-indigo-900"
                  v-if="column?.isEngineColumn"
                  >Edit</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
import { PlusIcon, TableCellsIcon, RectangleGroupIcon, StarIcon } from '@heroicons/vue/24/solid'
export default {
  components: {
    PlusIcon,
    TableCellsIcon,
    RectangleGroupIcon,
    StarIcon
  },
  data() {
    return {
      tables: [{
        name: "user",
        description: "this table is awesome",
        columns: [
          {
            name: "id",
            hiveType: "pk",
            type: "primary key",
            isEngineColumn: true
          },
          {
            name: "name",
            hiveType: "vcnn",
            type: "string",
            length: 30,
            isEngineColumn: true
          },
          {
            name: "email",
            hiveType: "vcnn",
            type: "string",
            length: 30,
            isEngineColumn: true
          },
          {
            name: "tenant_of",
            hiveType: "vcnn",
            type: "string",
            length: 30,
            isEngineColumn: true,
            description: "to what database under the multitenant architecture does this user belong?"
          },
        ]
      }],
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