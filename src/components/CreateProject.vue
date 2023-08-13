<template>
  <Modal :isOpen="showCreateProjectFormModal">
    <div
      class="relative transform overflow-hidden rounded-sm bg-slate-300 shadow-xl transition-all w-4/12 self-start mt-10"
    >
      <div class="flex flex-col border border-gray-400 rounded-sm divide-y divide-gray-500">
        <div class="flex flex-row justify-between items-center">
          <span class="p-2 font-bold">Create New BaaS Project</span>
          <button
            type="button"
            class="mr-2 my-2 inline-flex items-center gap-x-1.5 rounded-sm px-2.5 py-1.5 text-sm font-semibold text-slate-900 shadow-md bg-zinc-100 hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            @click="onClose"
          >
            <XMarkIcon size="20" class="-ml-0.5 h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div class="flex flex-col flex-grow py-5">
          <div class="flex flex-row p-2 justify-between items-center w-full gap-x-2">
            <label for="name" class="whitespace-nowrap font-bold">Project Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autocomplete="name"
              required=""
              class="relative block w-full rounded-sm border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400"
              placeholder="the name of the project ..."
              v-model="formData.name.value"
            />
          </div>
          <div class="flex flex-row p-2 justify-between items-center w-full gap-x-2">
            <label for="name" class="whitespace-nowrap mr-4 self-start font-bold">Description</label>
            <textarea
              id="name"
              name="name"
              type="text"
              autocomplete="name"
              required=""
              class="relative block w-full rounded-sm border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400"
              placeholder="briefly describe your BaaS project"
              v-model="formData.description.value"
            ></textarea>
          </div>
          <div class="flex flex-row p-2 justify-between items-center w-full gap-x-2">
            <label for="name" class="whitespace-nowrap self-start font-bold">Is Multitenant </label>
            <div class="text-left flex-grow">
              <Switch
                v-model="formData.isMultitenat.value"
                :class="switchClass(formData.isMultitenat.value)"
              >
                <SwitchSlider :enabled="formData.isMultitenat.value" />
              </Switch>
            </div>
          </div>
          <div class="flex flex-col w-full" v-if="formData.isMultitenat.value == false">
            <div class="font-bold">
              Default Super Admin
            </div>
            <div class="flex flex-row p-2 justify-between items-center w-full gap-x-2">
              <label for="super-admin-email" class="whitespace-nowrap font-bold">Email Address</label>
              <input
                id="super-admin-email"
                name="super-admin-email"
                type="text"
                autocomplete="email"
                :required="formData.isMultitenat.value==false"
                class="ml-1 relative block w-full rounded-sm border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400"
                placeholder="the super admin's email address ..."
                v-model="formData.superAdminEmail.value"
              />
            </div>

            <div class="flex flex-row p-2 justify-between items-center w-full gap-x-2">
              <label for="super-admin-country" class="whitespace-nowrap font-bold">Country</label>
              <select
                id="super-admin-country"
                name="super-admin-country"
                :required="formData.isMultitenat.value==false"
                class="max-w-[340px] relative block w-full rounded-sm border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400"
                placeholder="the super admin's country ..."
                v-model="formData.superAdminCountry.value"
              >
                <option v-for="(country, index) in  countries" :key="index" class="text-capitalised" :value="country">{{country}}</option>
              </select>
            </div>

            <div class="flex flex-row p-2 justify-between items-center w-full gap-x-2">
              <label for="super-admin-phone-number" class="whitespace-nowrap font-bold">Phone Number</label>
              <input
                id="super-admin-phone-number"
                name="super-admin-phone-number"
                type="text"
                autocomplete="phonenumber"
                :required="formData.isMultitenat.value==false"
                class=" relative block w-full rounded-sm border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400"
                placeholder="the super admin's phone number ..."
                v-model="formData.superAdminPhoneNumber.value"
              />
            </div>

            <div class="flex flex-row p-2 justify-between items-center w-full gap-x-2">
              <label for="super-admin-passwrd" class="whitespace-nowrap font-bold">Password</label>
              <input
                id="super-admin-password"
                name="super-admin-password"
                type="text"
                :required="formData.superAdminPassword.value==false"
                class="max-w-[340px] relative block w-full rounded-sm border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400"
                placeholder="the super admin's password ..."
                v-model="formData.superAdminPassword.value"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-between items-center">
          <button
            type="button"
            class="mx-2 my-2 inline-flex items-center gap-x-1.5 rounded-sm px-2.5 py-1.5 text-sm font-semibold text-slate-900 shadow-md bg-zinc-100 hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            @click="onClose"
          >
            <XMarkIcon size="20" class="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Cancel
          </button>

          <button
            type="button"
            class="mr-2 my-2 inline-flex items-center gap-x-1.5 rounded-sm px-2.5 py-1.5 text-sm font-bold text-slate-100 shadow-md bg-indigo-700 hover:bg-indigo-600 "
            @click="onSubmit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </Modal>
</template>


<script>
import { XMarkIcon } from '@heroicons/vue/24/solid'
import Modal from './Modal.vue'
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'
import SwitchSlider from './SwitchSlider.vue'
import { switchClass } from '../utils'
import feq from '@feql/feq'



let getFormData = function () {
  return {
    name: {
      errors: [],
      value: '',
      isValid: null,
      validations: {}
    },
    description: {
      errors: [],
      value: '',
      isValid: null,
      validations: {}
    },
    isMultitenat: {
      errors: [],
      value: ref(true),
      isValid: null,
      validations: {}
    },
    superAdminEmail: {
      errors: [],
      value: '',
      isValid: null,
      validations: {}
    },
    superAdminCountry: {
      errors: [],
      value: '',
      isValid: null,
      validations: {}
    },
    superAdminPhoneNumber: {
      errors: [],
      value: '',
      isValid: null,
      validations: {}
    },
    superAdminPassword: {
      errors: [],
      value: 'Qwerty@feq#2015',
      isValid: null,
      validations: {}
    }
  }
}

export default {
  components: {
    Modal,
    XMarkIcon,
    Switch,
    SwitchSlider
  },
  data() {
    return {
      showCreateProjectFormModal: false,
      formData: getFormData(),
      countries: [
        "uganda"
      ]
    }
  },
  watch: {
    'formData.isMultitenat.value': function(value){
      if(value === true){
        //remove validations for superadmin
        this.formData.superAdminEmail = {
          errors: [],
          value: this.formData.superAdminEmail.value,
          isValid: false,
          validations: {},
        };
        this.formData.superAdminCountry = {
          errors: [],
          value: this.formData.superAdminCountry.value,
          isValid: false,
          validations: {},
        };
        this.formData.superAdminPhoneNumber = {
          errors: [],
          value: this.formData.superAdminPhoneNumber.value,
          isValid: false,
          validations: {},
        };
        this.formData.superAdminPassword = {
          errors: [],
          value: this.formData.superAdminPassword.value,
          isValid: false,
          validations: {},
        };
      }else{
        //todo: 
        //add validations for superadim fields
      }
    }
  },
  methods: {
    switchClass,
    onClose() {
      this.showCreateProjectFormModal = false
      this.$emit('close')
    },
    onSubmit(){
      let vm = this;
      const query = { 
        _box: {
          name: vm.formData.name.value,
          description: vm.formData.description.value,
          is_multitenat: vm.formData.isMultitenat.value,
          super_admin_email: vm.formData.superAdminEmail.value,
          super_admin_country: vm.formData.superAdminCountry.value,
          super_admin_phone_number: vm.formData.superAdminPhoneNumber.value,
          super_admin_password: vm.formData.superAdminPassword.value,
        },
        _f_br: "create_new_project"
      };
      feq.post(query)
      .then((res)=>{
        localStorage.setItem("token", res._f_login.token);
        localStorage.setItem("user", JSON.stringify(res._f_login.user));
        localStorage.setItem("config", JSON.stringify(res._f_login.config));
        vm.$router.push(`/studio`);
        vm.formData = getFormData();
      }).catch((errors)=>{
        console.log('errors login', errors);
      });
    }
  },
  mounted() {
    this.showCreateProjectFormModal = true
  }
}
</script>