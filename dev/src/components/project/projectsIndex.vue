<template>
  <div class="project-index flex flex-col overflow-y-auto" v-if="projects">
   

    <div class="card bg-white flex flex-col border border-gray-400 p-5 w-1/2 rounded-md cursor-pointer" v-for="project of projects" :key="project.id" @click="getProject(project.id)">
        <ul>
            <li>{{project.id}}</li>
            <li>{{project.key.name}}</li>
             <li>Author {{project.key.meta_data.author}}</li>
             <li>Created {{new Date(project.key.meta_data.created).toDateString()}}</li>
            <li>Updated {{new Date(project.key.meta_data.updated).toDateString()}}</li>

        </ul>
     
    </div>

  

  </div>
</template>

<script>
// @ is an alias to /src
import {mapGetters} from 'vuex'


export default {
  name: 'projects-index',
  
  computed:{
    ...mapGetters({
      projects: 'projects',
      
    })
  },
  methods: {
    async getProject(id){
      this.$store.dispatch('getProject', id)
      
    }
  }
}
</script>
