<template>
<div id=mainArticle>
  <aside>
    <button>retour</button>
    <button>partager</button>
  </aside>

  <div id="myIframeDiv">
      <iframe  id="myIframe"  scrolling="no"
      :src="`../Articles/${this.$route.params.path}/index.html`"
      />
  </div>
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
            iframe.style.height = (iframe.contentWindow.document.body.scrollHeight+100) + 'px';
          }
            
        },
        unmounted: function() {
        }
    };
</script>

<style lang="scss">

#mainArticle{
  display: flex;
  flex-direction: row;
  border: 1px dotted green;
}
#myIframeDiv{
  width:100%;
  border: 1px dotted blue;
}

iframe{
  
  display: block;
  width:90%;
  right:0;
  border: 1px dotted red;
}
aside{
  width:10%;
  display: flex;
  flex-direction: column;
}


</style>