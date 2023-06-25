<template>
  <div class="flex flex-row w-screen justify-center h-full">
    <ProjectsPanelVue />
    <ProjectAspectsPanelVue />
  </div>
</template>

<script>
import ProjectAspectsPanelVue from '../components/ProjectAspectsPanel.vue'
import ProjectsPanelVue from '../components/ProjectsPanel.vue'

export default {
  components: {
    ProjectsPanelVue,
    ProjectAspectsPanelVue
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

