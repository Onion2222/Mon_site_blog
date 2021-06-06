<template>
<div>
    <iframe  id="myIframe" width="90%"
    :src="`../Articles/${this.$route.params.path}/index.html`"
    />
</div>
</template>


<script>

export default {
        name: 'Articles',
        props: {
        },
        data() {
            return {

            }
        },
      
        methods: {
        },
        mounted: function() {

          var iframe = document.getElementById("myIframe");
          
          iframe.onload = function(){
            iframe.style.height = (iframe.contentWindow.document.body.scrollHeight+30) + 'px';
          }
            
        },
        unmounted: function() {
        }
    };
</script>

<style lang="scss">


</style>