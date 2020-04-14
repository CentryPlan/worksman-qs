<template>
  <div class="home lg:flex sm:flex-row">
   

    <div class="card bg-gray-100 flex flex-col border border-gray-400 p-5 w-1/4 rounded-md overflow-y-auto">
      <div class="flex">
        <Logo size="sm"/>
        <button class="bg-green-500 text-teal-200 px-2 py-2 rounded-md" @click="loadProjects">Load Projects</button>
      </div>
       <a href="https://couchdb.apache.org/" target="-blank"><img class="w-32 h-18 " src="@/assets/imgs/pngs/couchdb.png"/></a>
      <a href="http://localhost:5984/_utils" target="-blank"><img class="w-32 h-18 " src="@/assets/imgs/pngs/couchdb.png"/></a>

    </div><!-- Left User Interface -->  
    <!-- Data Display --> 
    <div class="flex flex-col border border-gray-400 p-5 w-3/4 ml-1 mr-10 mb-5 rounded-md overflow-y-auto">
     <projectsIndex />
     
        <div class="projects bg-red-500 mt-10 rounded-lg">
      <p class="bg-white m-5 p-5">CONFLICTING PROJECTS {{ conflictscount }}</p>
      <project v-for="project in conflicts" :project="project" :key="project._id"></project>
    </div>
    
    </div>

  

  </div>
</template>

<script>
// @ is an alias to /src
import {mapGetters} from 'vuex'
import Logo from '@/components/ui/logo.vue'
import projectsIndex from '@/components/project/projectsIndex.vue'

export default {
  name: 'Home',
  components: {  
    Logo,
    projectsIndex
  },
  
  mounted() {
    this.$store.dispatch('getProjects')
  },
  computed:{
    ...mapGetters({
      projects: 'projects',
      count: 'projectscount',
      conflicts: 'conflicts',
      conflictscount: 'conflictscount'
    })
  },
  methods: {
    async loadProjects(){
      this.$store.dispatch('getProject', 'PD84773')
      
    }
  }
}
</script>
