<template>
  <TransitionRoot as="template" :show="isOpen" :static="true" @click="() => null">
    <Dialog :static="true" as="div" class="relative z-10" @click="() => null">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="() => null" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="flex justify-center items-center w-screen h-screen">
              <slot>px-4 pb-4 pt-5 sm:my-8 sm:w-full sm:max-w-sm sm:p-6</slot>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
    import { ref } from 'vue'
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
    export default {
        components: {
            TransitionRoot,
            Dialog,
            TransitionChild,
            DialogPanel
        },
        props:{
            isOpen: {
                type: Boolean,
                default: ()=>{
                    return ref(false);
                }
            }
        },
        data(){
            return {}
        },
        methods: {
            onClose(){
                this.$emit('close');
            }
        }

    }
</script>