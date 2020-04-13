import {Model, Collection} from 'vue-mc'
const Url = 'http://' + location.hostname + ':5984/wkm_projects/'


export class Project extends Model {
        // default attributes that defines the "empty" state.
        defaults() {
            return {
                _id: null,
                name: "",
                address: {
                    parish: ""
                },
                status: {
                    active: false
                }

            }
        }
        // Attribute Mutations.
        mutations() {
            return {
                _id: (id) => String(id) || null,
                name: String,
                address: {
                    parish: String
                },
                status: {
                    active: Boolean
                }                
            }
        }
        // Attribute Validation
        validation() {
            return {
                _id: String.and(required),
                name: String.and(required),
                address: {
                    parish: String
                },
                status: {
                    active: boolean
                }
            }
        }
        routes() {
            return {
                fetch: url + '{_id}?include_docs=true',
                save: url + '{_id}'
            }
        }


} // project-model end

// Project Collection
export class ProjectList extends Collection {
    
        // The Collection's Model
        model() {
            return  projectModel.Project

            }
        defaults() {
                return {
                    orderBy: 'name'
                }
        }
            // Route Config
        routes() {
                const url = Url + '_all_docs?include_docs=true'
                return {
                    fetch: url
                }
        }
        get project() {
                return this.sum('status.active')
        }
        get active() {
                return this.sum('status.active')
        }
        
}


