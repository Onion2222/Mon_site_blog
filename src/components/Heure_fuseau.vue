<template>
        <span>{{heure}}</span>
</template>

<script>

    export default {
        name: 'Heure',
        props: {
            fuseau: String
        },
        data() {
            return {
                heure: undefined,
                options:{
                    timeZone: this.fuseau
                }
            }
        },
      
        methods: {
            start: function() {
                this.interval = setInterval(this.updateHour, 1000);
            },
            stop: function() {
                clearInterval(this.interval);
            },
            updateHour: function() {
                this.heure=(new Date()).toLocaleTimeString('fr-FR', this.options).substring(0,5);
            }
        },
        mounted: function() {
            this.start();
            
        },
        unmounted: function() {
            this.stop();
        }
    };



 

</script>


<style scoped lang="scss">


</style>