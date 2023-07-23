<template>
  <MainLayout>
    <div class="flex flex-row w-screen justify-center h-full ">
      <ProjectsPanel @select-project="onProjectSelected" />
      <ProjectAspectsPanel
        @on-navigate="onNavigateAspect" 
        v-if="selectedProjectIndex > -1"
      />
      <!-- dynamic column panels -->
      <TablesAspectPanel v-if="currentAspectKey == 'tables'"/>
      <QueriesAspectPanel v-if="currentAspectKey == 'queries'"/>
      <MigrationsAspectPanel v-if="currentAspectKey == 'migrations'"/>
      <SeedsAspectPanel v-if="currentAspectKey == 'seeds'"/>
      <ServerFunctionsAspectPanel v-if="currentAspectKey == 'functions'"/>
      <SelftHostedFilesAspectPanel v-if="currentAspectKey == 'files'"/>
      <IntegrationsAspectPanel v-if="currentAspectKey == 'integrations'"/>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from '../components/MainLayout.vue'
import ProjectsPanel from '../components/ProjectsPanel.vue'
import ProjectAspectsPanel from '../components/ProjectAspectsPanel.vue'
import TablesAspectPanel from '../components/TablesAspectPanel.vue'
import QueriesAspectPanel from '../components/QueriesAspectPanel.vue'
import MigrationsAspectPanel from '../components/MigrationsAspectPanel.vue'
import SeedsAspectPanel from '../components/SeedsAspectPanel.vue'
import ServerFunctionsAspectPanel from '../components/ServerFunctionsAspectPanel.vue'
import SelftHostedFilesAspectPanel from '../components/SelftHostedFilesAspectPanel.vue'
import IntegrationsAspectPanel from '../components/IntegrationsAspectPanel.vue'


export default {
  components: {
    MainLayout,
    ProjectsPanel,
    ProjectAspectsPanel,
    TablesAspectPanel,
    QueriesAspectPanel,
    MigrationsAspectPanel,
    SeedsAspectPanel,
    ServerFunctionsAspectPanel,
    SelftHostedFilesAspectPanel,
    IntegrationsAspectPanel
  },
  data() {
    return {
      currentAspectKey: "",
      selectedProject: null,
      selectedProjectIndex: -1,
    }
  },
  methods: {
    onNavigateAspect(eventData){
        this.currentAspectKey = eventData.aspectKey;
    },
    onProjectSelected(selection){
      this.selectedProject = {... selection.project};
      this.selectedProjectIndex = selection.index;
    }
  }
}
</script>

