<template>
  <div
    class="flex flex-col border-r border-gray-400 rounded-sm bg-slate-300 divide-y divide-gray-500"
    :class="'w-3/12'"
  >
    <div class="flex flex-row justify-between items-center">
      <span class="px-2 py-3 font-bold">Aspects</span>
    </div>
    <div class="flex flex-grow flex-col">
      <div class="px-2">
        <div class="sm:hidden">
          <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
          <select
            id="tabs"
            name="tabs"
            class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base sm:text-sm"
          >
            <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
              {{ tab.name }}
            </option>
          </select>
        </div>
        <div class="hidden sm:block">
          <div class="border-b border-gray-200">
            <nav class="-mb-px flex space-x-8" aria-label="Tabs">
              <a
                v-for="tab in tabs"
                :key="tab.name"
                :href="tab.href"
                :class="[
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                ]"
                :aria-current="tab.current ? 'page' : undefined"
                >{{ tab.name }}</a
              >
            </nav>
          </div>
        </div>
      </div>
      <ul role="list" class="flex-grow flex-nowrap h-[0px] overflow-y-auto divide-y divide-gray-200 w-full  bg-red-400" style="heights: 0px;">
        <AspectListItem  v-for="(aspect, aspectKey) in aspectsRef" :key="aspectKey" 
            :aspect="aspect"  
            @on-navigate="e => onNavigateAspect(e, aspectKey)" >
          <template v-slot:icon>
            {{index}}
            <GlobeEuropeAfricaIcon size="20" class="h-4 w-4 text-gray-400" aria-hidden="true" />
          </template>
        </AspectListItem>
      </ul>
    </div>
  </div>
</template>


<script>
import {
  KeyIcon,
  Square2StackIcon,
  GlobeEuropeAfricaIcon,
  RectangleGroupIcon,
  CircleStackIcon,
  TableCellsIcon,
  ChevronRightIcon
} from '@heroicons/vue/24/solid'
import AspectListItem from './AspectListItem.vue'

export default {
  components: {
    KeyIcon,
    Square2StackIcon,
    GlobeEuropeAfricaIcon,
    RectangleGroupIcon,
    CircleStackIcon,
    AspectListItem,
    TableCellsIcon,
    ChevronRightIcon,
  },
  data() {
    return {
      tabs: [
        { name: 'Development', href: '#', current: true },
        { name: 'Staging', href: '#', current: false },
        { name: 'Production', href: '#', current: false }
      ],
      aspectsRef: {
        isAutoCreateTables: {
          title: 'Auto Creates Tables',
          type: 'boolean',
          value: 'https://gitlab.com/graciao-gracia/beeapp'
        },
        isMultitenant: {
          title: 'Has Multi-Tenance',
          type: 'boolean',
          value: 'https://gitlab.com/graciao-gracia/beeapp'
        },
        selectedDatabase: {
          title: 'Selected Database',
          type: 'text',
          value: 'akili-sabrina-spur'
        },
        tables: {
          title: 'Tables',
          type: 'navigational',
          value: ''
        },
        queries: {
          title: 'Queries Sandbox',
          type: 'navigational',
          value: ''
        },
        functions: {
          title: 'Server Side Functions',
          type: 'navigational',
          value: ''
        },
        files: {
          title: 'Self Hosted Files',
          type: 'navigational',
          value: ''
        },
        seeds: {
          title: 'Seeds',
          type: 'navigational',
          value: ''
        },
        baseUrl: {
          title: 'Base URL',
          type: 'text',
          value: 'https://gitlab.com/graciao-graciao/beeapp'
        },
        jwToken: {
          title: 'Auth Token',
          type: 'text',
          value:
            'TghgifvBX8JjKDaHABHZrwN_EyxYAn7_HBf_AShBAOWDyU09f2-ESz78gDxA7OrX4aCY0ukAWmsRhgdLEr4AYCIAAAAAAAAAAAAAAAAAAAAXUh4/d=1/excm=at/rs=AHGWq9D278f2kIyU2SwEP8IGgp2m_uyW1w'
        },
        phpMyAdmin: {
          title: 'Php MyAdmin',
          type: 'text',
          value: ''
        },
        migrations: {
          title: 'Migrations',
          type: 'navigational',
          value: ''
        },
        integrations: {
          title: 'Integrated Services',
          type: 'navigational',
          value: 'email, sms, mobile money etc'
        }
      },
    }
  },
  methods: {
    onClickProjectListItem(project, index) {
      this.activeIndex = index
    },
    onNavigateAspect(aspect, aspectKey){
        this.$emit("on-navigate", {
            aspect: aspect,
            aspectKey: aspectKey
        });
    }
  }
}
</script>