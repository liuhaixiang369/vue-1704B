<template>
    <div>
        详情
        {{detail}}
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
          
        }
    },
    computed:{
       ...mapState(['detail'])
    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>