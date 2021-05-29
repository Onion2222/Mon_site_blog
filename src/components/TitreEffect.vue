<template>
        <span id=titre>{{titre}}</span>
</template>

<script>

    export default {
        name: 'TitreEffect',
        props: {
            titre_prop: String,
            delai_prop: Number,
            replacement_prop: String
        },
        data() {
            return {
                titre: this.titre_prop,
                current_titre: '',
                index: 0,
                interval: undefined,
                delai: this.delai_prop,
                replacement: this.replacement_prop
            }
        },
      
        methods: {
            start: function() {
                this.interval = setInterval(this.changeString, this.delai);
            },
            stop: function() {
                clearInterval(this.interval);
            },
            changeString: function() {
                console.log(this.index+"/"+this.current_titre.length+"/"+this.current_titre);
                if(!(this.index==this.current_titre.length)){
                
                    this.titre = this.current_titre.substr(0, this.index) + this.replacement + this.current_titre.substr(this.index + 1, this.current_titre.length);
                }else{
                    this.titre = this.current_titre;
                }
                this.index = (this.index + 1) % (this.current_titre.length+1);
            }
        },
        mounted: function() {
            console.log("mounted");
            this.current_titre = this.titre;
            this.start();
            
        },
        unmounted: function() {
            this.stop();
        }
    };



 

</script>


<style scoped lang="scss">


</style>