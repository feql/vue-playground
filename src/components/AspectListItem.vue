<template>
    <li  class="flex flex-col py-4 gap-x-4 bg-gray-100">
        <div class="flex flex-row justify-between items-end " v-if="aspect.type=='text'">
            <div class="ml-2 flex flex-row items-center">
                <slot name="icon"></slot>
                <span class="ml-1 text-sm font-bold">{{aspect.title}}</span>
            </div>
            <button
                type="button"
                class="mr-2  inline-flex items-center gap-x-1.5 rounded-sm px-2.5 py-1 text-xs  text-slate-900 shadow-md bg-zinc-100 hover:bg-zinc-200 "
            >
                <PencilSquareIcon size="20" class="h-3 w-3" aria-hidden="true" />
                Edit
            </button>
        </div>
        <div class="m-2 p-2 rounded-sm cursor-pointer text-sm bg-[#e5e5e55c] gap-x-2 flex flex-row justify-between items-start" v-if="aspect.type=='text'">
            <div class="overflow-x-hidden break-words "> 
                {{aspect.value}}
            </div>
            <div>
                <Square2StackIcon size="20" class="h-5 w-5" aria-hidden="true" />
            </div>
        </div>
        <div class="flex flex-row justify-between items-end " v-if="aspect.type=='boolean'">
            <div class="ml-2 flex flex-row items-center">
                <slot name="icon"></slot>
                <span class="ml-1 text-sm font-bold">{{aspect.title}}</span>
            </div>
            <div class="mr-2">
                <Switch />
            </div>
        </div>
    </li>
</template>


<script>
import { PencilSquareIcon, Square2StackIcon, RectangleGroupIcon } from '@heroicons/vue/24/solid'
import Switch from './Switch.vue'

export default {
  components: {
    PencilSquareIcon,
    Square2StackIcon,
    RectangleGroupIcon,
    Switch
  },
  props: {
    aspect: {
        type: Object,
        default: function(){
            return {
                title: "",
                type: "text",
                value: ""
            }
        }
    }
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>