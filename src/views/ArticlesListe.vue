<template>
    <h1>Tout les articles:</h1>
  <div id="mainListeArticles">
    <div id=liste_articles v-for="(input, index) in ListeArticle" v-bind:key="index">
          <ArticlePreview :index="index"></ArticlePreview >
    </div>
  </div>
  
</template>


<script>
  
import ArticlePreview from '../components/PreviewArticle'
  export default {
    components: { ArticlePreview },
      name: 'ArticleListe',
      data() {
          return {
              ListeArticle:[]
          }
      },
      methods: {
          updateListe: async function(){
              await fetch("http://"+window.location.hostname+":8080/backend/list",{})
              .then(response => response.json())
              .then(data => {
                  this.ListeArticle=data.articles;
              })
          },
          fillListeArticle: function(){
            for (let index = 0; index <this.ListeArticle.length; index++) {
              // <ArticlePreview :index="0" :refresh="forceRefresh"></ArticlePreview >
              
            }
            
          }
      },
      mounted: async function() {
        await this.updateListe();
        console.log("nb_articles",this.ListeArticle.length);
        this.fillListeArticle();
      },
      unmounted: function() {
      }
  };



 

</script>

<style lang="scss">
#mainListeArticles{

  background-color:slategray;
  border: tan 5px  solid;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
}

#liste_articles{
  justify-content: left;
  padding-top: 15px;
  flex-flow: column;
  flex-direction: column;
}
</style>