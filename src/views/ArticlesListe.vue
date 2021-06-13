<template>
  
  <h1>ARTICLES LISTE</h1>

  <div id=liste_articles v-for="(input, index) in ListeArticle" v-bind:key="index">
        <ArticlePreview :index="index" refresh="forceRefresh"></ArticlePreview >
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