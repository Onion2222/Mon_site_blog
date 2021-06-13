<template >
<div id=mainArticle>
<aside v-show="this.ArticleExiste">
  <button>Liste des articles</button>
  <button>Partager...</button>
</aside>


<div v-show="this.ArticleExiste!=undefined" v-if="this.ArticleExiste" id="myIframeDiv">
  <iframe  id="myIframe"  scrolling="no"  @load="iframeLoad"
  :src="`../Ressources/Articles/${this.$route.params.path}/index.html`"
  />
</div>

<div v-show="this.ArticleExiste!=undefined" v-else>
  <h1>Erreur, article non trouvé...</h1>
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
      ArticleExiste:undefined
    }
  },

  methods: {
    iframeLoad: function(){
      var iframe = document.getElementById("myIframe");
      iframe.style.height = (iframe.contentWindow.document.body.scrollHeight+100) + 'px';
    },
    exist: async function(){
      return await fetch("http://"+window.location.hostname+":8080/backend/list",{})
                  .then(response => response.json())
                  .then(data => {
                    if (data.articles.find(article=> article.name==this.$route.params.path)){
                      console.log("trouvé !")
                      return true;
                    }else{
                      console.log("non trouvé !")
                      return false;
                    }    
                  })
    }
  },
  mounted: async function() {
    this.ArticleExiste=await this.exist();
  },
  unmounted: function() {
  }
};
</script>

<style lang="scss">

#mainArticle{
  display: flex;
  flex-direction: row;
}
#myIframeDiv{
  width:100%;
  overflow: hidden;
}

iframe{
  background-color: rgba(255, 255, 255, 0.322);
  display: block;
  width:90%;
  height: 0;
  right:0;
  border: 0;
}
aside{
  width:10%;
  display: flex;
  flex-direction: column;
}


</style>