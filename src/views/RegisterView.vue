<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  -->
  <div
    class="flex min-h-full flex-1 justify-between items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-slate-800"
  >
    <div class="left-animations-side text-2xl w-[400px] flex justify-end self-start">
      <div class="example-1 w-[200px] text-left text-gray-400" v-if="visibleScenes.indexOf(1)>=0">
        <span class="text-sm text-gray-200">get all engineers:</span>
        <span class="type" style="--n: 50"><br />{<br />&nbsp;engineers:{}<br />}</span>
      </div>

      <LeftArrowAnimation v-if="visibleScenes.indexOf(2)>=0 || visibleScenes.indexOf(6)>=0" />

      <div class="example-1 w-[300px] text-left text-gray-400" v-if="visibleScenes.indexOf(5)>=0">
        <span class="text-sm text-gray-200">get all engineers with their skills:</span>
        <span class="type" style="--n: 60"
          ><br />{<br />&nbsp;engineers:{<br />&nbsp;&nbsp;skills:{}<br />&nbsp;}<br />}</span
        >
      </div>

      <div class="example-1 w-[300px] text-left text-gray-400" v-if="visibleScenes.indexOf(9)>=0">
        <span class="text-sm text-gray-200">get types with the engineers:</span>
        <span class="type" style="--n: 60"
          ><br />{<br />&nbsp;types:{<br />&nbsp;&nbsp;engineers:{}<br />&nbsp;}<br />}</span
        >
      </div>

      
    </div>

    <div class="w-full max-w-sm min-w-sm w-[700px] space-y-10">
        <div class="flex flex-col justify-center  items-center absolute top-5">
            <div class="text-gray-700 mr-2">
                Jump To Example:
            </div>
            <div class="flex flex-row justify-left items-center gap-x-2">
                <div 
                    v-for="(example, index) in [1,5,9]"
                    :key="index"
                    class="rounded-full w-5 h-5 cursor-pointer flex justify-center items-center p-4 hover:bg-[#e30ef773]" 
                    :class="{'bg-[#e30ef717] text-gray-600': !(visibleScenes.indexOf(example)>=0), 'bg-[#e30ef7] text-white font-bold': visibleScenes.indexOf(example)>=0 }"
                    @click="onGoToExample(index+1)"
                    >
                    {{index+1}} 
                </div> 
            </div>
        </div>
      <div>
        <img class="mx-auto h-20 w-auto" :src="logo" alt="fql logo" />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
          Create account to get started
        </h2>
      </div>
      <form class="space-y-6" action="#" method="POST">
        <div class="relative -space-y-px rounded-sm shadow-sm">
          <div
            class="pointer-events-none absolute inset-0 z-10 rounded-sm ring-1 ring-inset ring-gray-300"
          />
          <div>
            <label for="email-address" class="sr-only">Company / Organisation Name</label>
            <input
              id="company-name"
              name="company-name"
              type="text"
              autocomplete="name"
              required=""
              class="relative block w-full rounded-t-sm border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400"
              placeholder="Company / Organisation Name"
              v-model="formData.companyName.value"
            />
          </div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              class="relative block w-full rounded-t-sm border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400"
              placeholder="Email address"
              v-model="formData.email.value"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              class="relative block w-full rounded-b-sm border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400"
              placeholder="Password"
              v-model="formData.password.value"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Comfirm Password</label>
            <input
              id="comfirm-password"
              name="comfirm-password"
              type="password"
              autocomplete="current-password"
              required=""
              class="relative block w-full rounded-b-sm border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400"
              placeholder="Comfirm Password"
              v-model="formData.comfirmPassword.value"
            />
          </div>
        </div>

        <div>
          <button
            type="button"
            class="flex w-full justify-center rounded-sm bg-fql px-3 py-1.5 text-sm font-semibold leading-6 text-white bg-fql-hover"
            @click="onSubmit"
          >
            Signup 
          </button>
        </div>

        <div class="flex items-center justify-between">
          <div class="text-sm leading-6">
            &nbsp;
          </div>

          <p class="text-left text-sm leading-6x text-gray-300">
            Already have an account?
            {{ ' ' }}
            <a href="/" class="font-semibold text-purple-300 hover:text-indigo-400"
              >Login
            </a>
          </p>
        </div>
      </form>
    </div>

    <div class="right-animations-side text-2xl w-[400px] flex justify-start self-start">
        <div class="example-1 w-[500px] text-left text-gray-400" v-if="visibleScenes.indexOf(3)>=0">
            <span class="text-sm text-gray-200">results:</span>
            <span class="type2 text-sm" style="--n: 200"
            ><br />{<br />&nbsp;engineers:[<br />&nbsp;&nbsp;&nbsp;{<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id:
            31,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: "Nyola Mike",<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contact:
            "+2567 4270 1442"<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type_id: 1<br />&nbsp;&nbsp;&nbsp;},<br />&nbsp;&nbsp;&nbsp;{<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id:
            30,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: "Nomis Wilson",<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contact:
            "+2567 5072 3856"<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type_id: 3<br />&nbsp;&nbsp;&nbsp;}<br />&nbsp;]<br />}</span
            >
        </div>

        <div class="example-1 w-[500px] text-left text-gray-400" v-if="visibleScenes.indexOf(7)>=0">
            <span class="text-sm text-gray-200">results:</span>
            <span class="type2 text-sm" style="--n: 280"
            ><br />{<br />&nbsp;engineers:[<br />&nbsp;&nbsp;&nbsp;{<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id:
            31,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: "Nyola Mike",<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;skills: [<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{id:1, name: "reactjs"},<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{id:2, name: "elixir"},<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{id:3, name: "vuejs"}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contact:
            "+2567 4270 1442"<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type_id: 1<br />&nbsp;&nbsp;&nbsp;},<br />&nbsp;&nbsp;&nbsp;{<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id:
            30,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: "Nomis Wilson",<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br />&nbsp;&nbsp;&nbsp;}<br />&nbsp;]<br />}</span
            >
        </div>
    </div>
  </div>
</template>


<script>
import logo from '../assets/logo.png'
import LeftArrowAnimation from '../components/animations/LeftArrowAnimation.vue'
import feq from '@feql/feq'

let getFormData = function(){
  return {
    companyName: {
      errors: [],
      value: "",
      isValid: null,
      validations: {
        required: "Company name is required",
        maxLength: {
          value: 150,
          error: "Cannot be more than 150 letters"
        },
        minLength: {
          value: 5,
          error: "Atleast 5 letters are required"
        }
      }
    },
    email: {
      errors: [],
      value: "",
      isValid: null,
      validations: {
        required: "Email address is required",
        maxLength: {
          value: 60,
          error: "Cannot be more than 60 letters"
        },
        minLength: {
          value: 5,
          error: "Atleast 5 letters are required"
        },
        emailFormat: "Invalid email address"
      }
    },
    password: {
      errors: [],
      value: "",
      isValid: null,
      validations: {
        required: {
          trim: false,
          error: "Password is required"
        },
        maxLength: {
          value: 15,
          trim: false,
          error: "Cannot be more than 15 letters"
        },
        minLength: {
          value: 6,
          trim: false,
          error: "Atleast 6 letters are required"
        }
      }
    },
    comfirmPassword: {
      errors: [],
      value: "",
      isValid: null,
      validations: {
        required: {
          trim: false,
          error: "Confirmation password is required"
        },
        maxLength: {
          value: 15,
          trim: false,
          error: "Cannot be more than 15 letters"
        },
        minLength: {
          value: 6,
          trim: false,
          error: "Atleast 6 letters are required"
        },
        sameAs: {
          value: 'password',
          error: "The two passwords are not the same"
        }
      }
    }
  }
}


export default {
  components: {
    LeftArrowAnimation
  },
  data() {
    return {
      logo: logo,
      visibleScenes: [],
      scenes: [],
      nextScene: 0,
      timeOut: null,

      errors: [],
      formData: getFormData(),
      isFormSubmitting: false,
    }
  },
  methods: {
    playNext: function () {
      var vm = this
      var nextSceneIndex = vm.nextScene
      if (nextSceneIndex > vm.scenes.length - 1) {
        nextSceneIndex = 0
      }
      var scene = vm.scenes[nextSceneIndex]
      scene.action()
      vm.timeOut = setTimeout(function () {
        vm.nextScene += 1
        vm.playNext()
      }, scene.duration)
      
    },
    onGoToExample: function(num){
        var vm = this;
        clearTimeout(vm.timeOut);
        vm.timeOut = null;
        vm.visibleScenes = [];
        if(num == 1){
            vm.nextScene = 0;
        }else if(num == 2){
            vm.nextScene = 4;
        }else if(num == 3){
            vm.nextScene = 9;
        }
        vm.playNext();
    },
    onSubmit: function(){
      let vm  = this;
      const query = { 
        _f_register: {
          app_name: vm.formData.companyName.value,
          name: vm.formData.companyName.value,
          email: vm.formData.email.value,
          country: "",
          phone_number: "",
          password: vm.formData.password.value
        } 
      };
      feq.post(query)
      .then((res)=>{
        console.log('results', res);
        vm.$router.push(`/activate?email=${vm.formData.email}`);
        vm.formData = getFormData();
      }).catch((errors)=>{
        console.log('errors registering', errors);
      });
    }
  },
  mounted() {

    var vm = this
    vm.scenes = [
      {
        name: 'get all engineers',
        action: function () {
          vm.visibleScenes = [1];
        },
        duration: 3500
      },
      {
        name: 'show left arrow',
        action: function () {
          vm.visibleScenes = [1,2];
        },
        duration: 3500
      },
      {
        name: 'show results of get all engineers',
        action: function () {
          vm.visibleScenes = [1,2,3];
        },
        duration: 22000
      },
      {
        name: 'restart',
        action: function () {
          vm.visibleScenes = [];
          vm.nextScene = 3;
        },
        duration: 100
      },
      {
        name: 'get all engineers with their skills',
        action: function () {
          vm.visibleScenes = [5];
        },
        duration: 5500
      },
      {
        name: 'show left arrow',
        action: function () {
          vm.visibleScenes = [5,6];
        },
        duration: 3500
      },
      {
        name: 'show results of get all engineers with their skills',
        action: function () {
          vm.visibleScenes = [5,6,7];
        },
        duration: 28000
      },
      {
        name: 'restart',
        action: function () {
          vm.visibleScenes = [];
          vm.nextScene = 9;
        },
        duration: 100
      },
      {
        name: 'get types with the engineers',
        action: function () {
          vm.visibleScenes = [9];
        },
        duration: 5500
      },
      {
        name: 'restart',
        action: function () {
          vm.visibleScenes = [];
          vm.nextScene = -1
        },
        duration: 100
      }
    ]
    vm.playNext()
  }
}
</script>

<style>
/* https://dev.to/afif/a-multi-line-css-only-typewriter-effect-3op3 */
.type {
  font-family: monospace;
  color: #0000;
  background: linear-gradient(-90deg, #00dffc 5px, #0000 0) 10px 0, linear-gradient(#00dffc 0 0) 0 0;
  background-size: calc(var(--n) * 1ch) 200%;
  -webkit-background-clip: padding-box, text;
  background-clip: padding-box, text;
  background-repeat: no-repeat;
  animation: b 0.7s infinite steps(1), t calc(var(--n) * 0.2s) steps(var(--n)) forwards;
}

.type2 {
  font-family: monospace;
  color: #0000;
  background: linear-gradient(-90deg, #00dffc 5px, #0000 0) 10px 0, linear-gradient(#00dffc 0 0) 0 0;
  background-size: calc(var(--n) * 1ch) 200%;
  -webkit-background-clip: padding-box, text;
  background-clip: padding-box, text;
  background-repeat: no-repeat;
  animation: b 0.7s infinite steps(1), t calc(var(--n) * 0.1s) steps(var(--n)) forwards;
  line-height: 1;
}

@keyframes t {
  from {
    background-size: 0 200%;
  }
}
@keyframes b {
  50% {
    background-position: 0 -100%, 0 0;
  }
}
</style>