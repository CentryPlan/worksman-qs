<template>
    <div id="logo" class="flex flex-row text-2xl font-bold text-yellow-400">
    <img :class="logosize" alt="Vue logo" src="@/assets/imgs/logos/favicon.svg"><span :class="text_adjust">QS</span><span :class="reg_adjust">&reg;</span>
    </div>
</template>
<script>
export default {
    name: 'logo',
    props:['size'],
    data() {
        return{
            text_adjust: null,
            reg_adjust: null
        }
    },
    computed: {
        logosize(){
            if (this.size == 'large'){
                this.text_adjust = "mt-5"
                this.reg_adjust = "mt-6 text-lg text-green-400 font-bold"
                return "w-32"
            }else if (this.size == 'medium'){
                this.text_adjust = "mt-1"
                this.reg_adjust = "mt-2 text-lg text-green-400 font-bold"
                return "w-16"
            }else if (this.size == 'small'){
                this.text_adjust = "mt-1 text-lg"
                this.reg_adjust = "mt-1 text-sm text-green-400 font-bold"
                return "w-10"
            }else {
                this.text_adjust = "mt-1 text-sm"
                this.reg_adjust = "mt-1 text-sm text-green-400 font-bold"
             return "w-8"
            }
        }
    }
}
</script>