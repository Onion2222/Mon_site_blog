<template>
  <div id="template">
  <Background_image_fade :images_prop="['im1.jpg', 'im2.jpg', 'im3.jpg']" :delai_prop="5000"/>

  <main>

    <section>
      <h2 style="display: inline-block">Derniers Articles:</h2><button class="asText" v-on:click="this.forceRefresh=!this.forceRefresh">&nbsp;&nbsp;🔄</button>
      <div id=derniers_articles>
        <ArticlePreview :index="0" :refresh="forceRefresh"></ArticlePreview >
        <ArticlePreview :index="1" :refresh="forceRefresh"></ArticlePreview >
        <ArticlePreview :index="2" :refresh="forceRefresh"></ArticlePreview >
        
        <router-link to="/Articles" tag="div" id="linkToArticles"><h1>>Autres<br>articles...</h1></router-link>
      </div>
    </section>

    <aside>
      <div id="Heure">
        <h2>Fuseaux Horaire</h2>
        <tr>
          <td>Troyes</td>
          <td><Heure class="Time" fuseau="Europe/Paris"/></td>
        </tr>
        <tr>
          <td style="padding-right: 15px">Kerguelen</td>
          <td><Heure class="Time" fuseau="Indian/Kerguelen"/></td>
        </tr>
      </div>
      <br/>
      <h2>Carte</h2>
      <iframe 
        width="100%"
        height="150"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://www.google.com/maps/embed/v1/view?key=AIzaSyCMW9rtjsZIunBs_INOWR_xogyUtdfy-Xg&center=-49.30478628676841,69.49135204153774&zoom=7"
        loading="lazy"
        style="border: 1px solid black">
      </iframe>
      <h2>Me contacter</h2>
      <a><u>Mail:</u><br>
      arthurperrin.22@gmail.com<br>
      <u>Postale:</u><br>
      BLABLABLA</a>
    </aside>

  </main>

  </div>
</template>


<script>

import Background_image_fade from '../components/Background_image_fade.vue'
import Heure from '../components/Heure_fuseau.vue'
import ArticlePreview from '../components/PreviewArticle'
export default {
  components: { Background_image_fade, Heure, ArticlePreview },
  name: 'Home',
  data() {
            return {
              forceRefresh:false
            }
  },
  methods: {

  },
  mounted : function(){
  }
}





</script>




<style lang="scss">



main {
    display: flex;
    /*flex-direction: row;
    flex-wrap: wrap;
    padding-top: 30px;
    align-items: flex-start;*/
    display: flex;
    align-items: stretch;
    height: 100%;

    background-color: #2E34368c;
}

main>section,
main>aside {
    /*background-color: #2E34368c;*/
    color: white;
    font-family:monospace;
    padding: 5px 20px 20px 20px;
    border: 1px solid rgba(0, 0, 0, 0.22) ;
    
}

main>section {
    /*flex-basis: 75%;*/
    width: 80%;
    /*padding: 5px 20px 20px 20px;*/
}


main>aside{
  width: 20%;
  /*flex-basis: auto;*/
  /*padding: 5px 20px 20px 20px;*/
}

.Background_image_fade{
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#Heure > tr > td{
  max-width: 100%;
  /*border: 1px solid rgb(255, 255, 255);*/
}

.Time{
  font-weight: bolder;
  color:coral;
  text-align: right;
}


#derniers_articles{
  display: flex;
  justify-content: left;
  padding-top: 15px;
}


#linkToArticles{
  padding: 10px;
  height: 100%;
  background-color: #bfcace52;
  box-shadow: rgba(0, 0, 0, 0.75) 4px 4px;
  border-radius: 2px;
  border-top-left-radius: 20px;
  margin-right: 15px;
  margin-bottom: 15px;
  transition: transform 250ms;
  text-decoration: none;
  
}
#linkToArticles:hover {
    transform: translateY(-10px);
}
#linkToArticles > h1 {
  color:coral;
}

.asText {
    background:none;
    border:none;
    margin:0;
    padding:0;
    cursor: pointer;
}




</style>