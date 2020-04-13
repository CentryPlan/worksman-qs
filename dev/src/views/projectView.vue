<template>
    <div class="project">
        <p class="text-sm text-red-500 p-5 m-5 border border-red-300" v-if="ui.message.error">{{ui.message.error}}</p>
        <p class="text-sm text-green-500 p-5 m-5 border border-green-300" v-if="ui.message.success">{{ui.message.success}}</p>
       number {{x(10)}}

    </div>
</template>
<script>
import { BasicModel, Model, ObjectModel } from "objectmodel"
const NumModel = BasicModel(Number)

export default {
    data(){
        return {
            ui: {
                message: {
                    error: null,
                    success: null
                }
            }
        }
    },
    methods:{
        x(x){
            return NumModel(x)
        }
    }

    
}
</script>