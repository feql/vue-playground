<template>
  <div class="flex flex-row w-screen justify-center h-full bg-red-400">
    <ProjectsPanel />
    <ProjectAspectsPanel
      @on-navigate="onNavigateAspect" 
    />
    <!-- dynamic column panels -->
    <TablesAspectPanel v-if="currentAspectKey == 'tables'"/>
    <QueriesAspectPanel v-if="currentAspectKey == 'queries'"/>
    <MigrationsAspectPanel v-if="currentAspectKey == 'migrations'"/>
    <SeedsAspectPanel v-if="currentAspectKey == 'seeds'"/>
    <ServerFunctionsAspectPanel v-if="currentAspectKey == 'functions'"/>
  </div>
</template>

<script>
import ProjectsPanel from '../components/ProjectsPanel.vue'
import ProjectAspectsPanel from '../components/ProjectAspectsPanel.vue'
import TablesAspectPanel from '../components/TablesAspectPanel.vue'
import QueriesAspectPanel from '../components/QueriesAspectPanel.vue'
import MigrationsAspectPanel from '../components/MigrationsAspectPanel.vue'
import SeedsAspectPanel from '../components/SeedsAspectPanel.vue'
import ServerFunctionsAspectPanel from '../components/ServerFunctionsAspectPanel.vue'


export default {
  components: {
    ProjectsPanel,
    ProjectAspectsPanel,
    TablesAspectPanel,
    QueriesAspectPanel,
    MigrationsAspectPanel,
    SeedsAspectPanel,
    ServerFunctionsAspectPanel
  },
  data() {
    return {
      currentAspectKey: "",
    }
  },
  methods: {
    onNavigateAspect(eventData){
        this.currentAspectKey = eventData.aspectKey;
    }
  }
}
</script>

