import PouchDB from 'pouchdb';
import axios from 'axios';

const db = new PouchDB('wkm_projects')
const Url = 'http://' + location.hostname + ':5984/wkm_projects/'

export default {
    state: {
        projects: [],
        conflicts: [],
        projects_count: 0,
        conflicts_count: 0
    },
    mutations: {
        //SETS
        SET_PROJECTS(state, projects) {
            state.projects = projects
        },
        SET_PROJECTS_COUNT(state, count) {
            state.projects_count = count
        },
        SET_CONFLICTS(state, conflicted) {
            state.conflicts = conflicted
        },
        SET_CONFLICTS_COUNT(state, count) {
            state.conflicts_count = count
        }

    },
    actions: {
        // GETS
        async getProjects(context){
            
            const url = Url + '_all_docs?include_docs=true'
            axios.get(url).then(response => {
                console.log(response)
                context.commit('SET_PROJECTS', response.data.rows)
                context.commit('SET_PROJECTS_COUNT', response.data.total_rows)
            }).catch(error => {
                console.log(error)
            })

        },
        async getConflictedProjects(context){
            
            const url = Url + 'conflict_test/_all_docs?include_docs=true&conflicts=true'
            axios.get(url).then(response => {
                console.log(response)
                context.commit('SET_CONFLICTS', response.data.rows)
                context.commit('SET_CONFLICTS_COUNT', response.data.total_rows)
            }).catch(error => {
                console.log(error)
            })

        }
    },
    getters: {
        projects: state => state.projects,
        projectscount: state => state.projects_count,
        // conflicted projects
        conflicts: state => state.conflicts,
        conflictscount: state => state.conflicts_count
    }

}