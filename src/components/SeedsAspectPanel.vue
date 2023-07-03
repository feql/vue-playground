<template>
  <div
    class="flex flex-col border-r border-gray-400 rounded-sm bg-slate-300 divide-y divide-gray-500"
    :class="'w-7/12'"
  >
    <div class="flex flex-row justify-between items-center">
      <span class="p-2 font-bold">Seeding</span>
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
          Add a Table Seeding
        </button>
      </div>
    </div>
    <div class="flex flex-grow flex-row">
      <div class="w-4/12">
        <ul role="list" class="divide-y divide-gray-300 w-full py-10">
          <li
            v-for="(seed, tableName) in seeds"
            :key="tableName"
            class="flex gap-x-4 py-2 p-2 cursor-pointer  ml-5 text-sm "
            :class="{
              'bg-slate-200': tableName != activeKey,
              'bg-[#f0f0f0]': tableName == activeKey,
              'text-slate-900 font-bold': tableName == activeKey,
              'hover:bg-slate-200': tableName != activeKey,
              'rounded-tl-md': tableName == 0, 
              'rounded-bl-md': tableName == (seeds.length-1), 
              'shadow-md':  tableName == (seeds.length-1),
            }"
            @click="onClickSeedListItem(seed, tableName)"
          >
            {{ tableName }} 
          </li>
        </ul>
      </div>
      <div class="w-8/12 h-full bg-slate-900 flex flex-col text-white">
        <div>
          <v-ace-editor
            v-model:value="codeEditorContent"
            @init="editorInit"
            lang="javascript"
            theme="monokai"
            style="height: Calc(100vh - 145px)" />
        </div>
        <div class="bg-[#f0f0f0] pl-10 flex flex-row ">
          <div class="flex flex-row flex-grow items-center justify-between">
            <div class="flex flex-row flex-grow items-center">
              
            </div>
            <div class="flex flex-row items-center">
              <button
                type="button"
                class="mr-2 my-2.5 ml-2 inline-flex items-center gap-x-1.5 rounded-sm px-2.5 py-1.5 text-xs font-semibold text-slate-300 shadow-md bg-zinc-800 hover:bg-zinc-900  hover:text-slate-200"
              >
                <TrashIcon size="20" class="-ml-0.5 h-3 w-3" aria-hidden="true" />
                Remove
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import ace from 'ace-builds';
import modeJavascriptUrl from 'ace-builds/src-noconflict/mode-javascript?url';
ace.config.setModuleUrl('ace/mode/javascript', modeJavascriptUrl);

import { PlusIcon, TableCellsIcon, RectangleGroupIcon, BarsArrowUpIcon, MagnifyingGlassIcon, PlayIcon, TrashIcon } from '@heroicons/vue/24/solid'
import { VAceEditor } from 'vue3-ace-editor';

export default {
  components: {
    PlusIcon,
    TableCellsIcon,
    RectangleGroupIcon,
    BarsArrowUpIcon, 
    MagnifyingGlassIcon,
    PlayIcon,
    TrashIcon,
    VAceEditor
  },
  data() {
    return {
      seeds: {
        "configs": [
            {
                "name": "Main Configuration",
                "company_name": "My Company",
                "is_active": 1,
                "decimal_places": 2,
                "logo": "",
                "city": "My City",
                "country": "My Country",
                "phone": "My Phone Number",
                "fax": "My Fax Number",
                "email": "companyemail@gmail.com",
                "address": "Plot 1 My Street",
                "website": "http:\/\/www.plotx.com",
                "onboarding_step1_branches": "pending",
                "onboarding_step2_sites": "pending",
                "onboarding_step3_system_users": "pending",
                "onboarding_step4_chart_of_accounts": "pending",
                "onboarding_step5_asset_categories": "pending",
                "onboarding_step6_upload_assets": "pending"
            }
        ],
        "stores": [
            {
                "name": "shelf"
            }
        ],
        "stockout_categories": [
            {
                "name": "sale",
                "description": "saling of products, affects both sales and quantitites",
                "auto_record_sales": 1,
                "transfers_stock": 0
            },
            {
                "name": "stock transfer",
                "description": "moving products from one store to another, affects only quantitites",
                "auto_record_sales": 0,
                "transfers_stock": 1
            },
            {
                "name": "remove only",
                "description": "removing products from the store, affects only quantitites",
                "auto_record_sales": 0,
                "transfers_stock": 0
            },
            {
                "name": "reconciliation",
                "description": "applied during reconciliation of stock count",
                "auto_record_sales": 0,
                "transfers_stock": 0
            }
        ],
        "expense_categories": [
            {
                "name": "stockin",
                "description": "money, spent on purchase of goods\/products"
            },
            {
                "name": "allowances",
                "description": "operations allowances"
            }
        ],
        "countries": [
            {
                "name": "uganda",
                "code2": "UG",
                "code3": "UGA",
                "status": "active"
            }
        ],
        "roles": [
            {
                "name": "Asset Manager",
                "description": ""
            },
            {
                "name": "Head Of Accounts",
                "description": ""
            },
            {
                "name": "Store Manager",
                "description": ""
            },
            {
                "name": "Company Staff",
                "description": "A general company staff"
            }
        ],
        "branches": [
            {
                "name": "Main Branch",
                "location": ""
            }
        ],
        "sites": [
            {
                "_fk_branch_id": "branches@0",
                "name": "Main site",
                "location": "The main officee building",
                "remarks": "default site"
            }
        ],
        "departments": [
            {
                "name": "Marketing",
                "description": ""
            },
            {
                "name": "Sales",
                "description": ""
            },
            {
                "name": "Finance",
                "description": ""
            },
            {
                "name": "Operations",
                "description": ""
            },
            {
                "name": "Human Resource",
                "description": ""
            },
            {
                "name": "IT",
                "description": ""
            },
            {
                "name": "Management",
                "description": ""
            }
        ],
        "categories": [
            {
                "debit_account_id": 0,
                "credit_account_id": 0,
                "name": "Permanent Buildings",
                "useful_years": 40,
                "description": "UBID - Unique Building Identifier is a key used to uinquely identify buidlings ",
                "identifier": "UBID",
                "short_name": "Prm. Buildings"
            },
            {
                "debit_account_id": 0,
                "credit_account_id": 0,
                "name": "Temporary Buildings",
                "useful_years": 3,
                "description": "UBID - Unique Building Identifier is a key used to uinquely identify buidlings",
                "identifier": "UBID",
                "short_name": "Tmp. Buildings"
            },
            {
                "debit_account_id": 0,
                "credit_account_id": 0,
                "name": "Land",
                "useful_years": -1,
                "description": "Land doesnot depreciate",
                "identifier": "Plot Number",
                "short_name": "Land"
            },
            {
                "debit_account_id": 0,
                "credit_account_id": 0,
                "name": "Computer Equipment",
                "useful_years": 3,
                "description": "",
                "identifier": "Serial Number",
                "short_name": "Cmp. Eqpment"
            },
            {
                "debit_account_id": 0,
                "credit_account_id": 0,
                "name": "Office Equipment",
                "useful_years": 3,
                "description": "",
                "identifier": "Tag Number",
                "short_name": "Off. Eqpment"
            },
            {
                "debit_account_id": 0,
                "credit_account_id": 0,
                "name": "Office Fixtures and Fittings",
                "useful_years": 5,
                "description": "",
                "identifier": "Tag Number",
                "short_name": "Off. Fixtures"
            },
            {
                "debit_account_id": 0,
                "credit_account_id": 0,
                "name": "Security and Safety Equipment",
                "useful_years": 3,
                "description": "",
                "identifier": "Tag Number",
                "short_name": "Sec. Eqpment"
            },
            {
                "debit_account_id": 0,
                "credit_account_id": 0,
                "name": "Motor Vehicles",
                "useful_years": 5,
                "description": "",
                "identifier": "Number Plate",
                "short_name": "Vehicles"
            },
            {
                "debit_account_id": 0,
                "credit_account_id": 0,
                "name": "Workshop Equipment",
                "useful_years": 3,
                "description": "",
                "identifier": "Tag Number",
                "short_name": "Wk. Eqpment"
            },
            {
                "debit_account_id": 0,
                "credit_account_id": 0,
                "name": "Software Acquired Externally",
                "useful_years": 3,
                "description": "Software purchased from vendors",
                "identifier": "Liscence Number",
                "short_name": "Ext. Sftware"
            },
            {
                "debit_account_id": 0,
                "credit_account_id": 0,
                "name": "Internally Developed Software",
                "useful_years": 6,
                "description": "When an establishment builds its own software",
                "identifier": "Liscence Number",
                "short_name": "Int. Sftware"
            },
            {
                "debit_account_id": 0,
                "credit_account_id": 0,
                "name": "Liscences and Rights, Copyrights ",
                "useful_years": 3,
                "description": "And also Other Intangible assets",
                "identifier": "Liscence Number",
                "short_name": "Liscences"
            }
        ]
      },
      activeKey: "",
      codeEditorContent: "<?php\n/*Select a function from the left*/\n?>",
      
    }
  },
  methods: {
    onClickSeedListItem(seed, tableName) {
      this.codeEditorContent = JSON.stringify(this.seeds[tableName]);
      this.activeKey = tableName;
    }
  }
}
</script>