<template>
  
  <Background_image_fade :images_prop="['im1.jpg', 'im2.jpg', 'im3.jpg']" :delai_prop="5000"/>

  <main>

    <section>
      <h2 style="display: inline-block">Derniers Articles:</h2><button class="asText" v-on:click="updateArticles">&nbsp;&nbsp;🔄</button>
      <div id=derniers_articles>
        <article class="Article" v-html="articles[0]"></article>
        <article class="Article" v-html="articles[1]"></article>
        <article class="Article" v-html="articles[2]"></article>
        <article class="Article" ><router-link id="linkToArticles" to="/Articles"><h1>>Autres<br>articles</h1></router-link></article>
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

</template>

<script>

import Background_image_fade from '../components/Background_image_fade.vue'
import Heure from '../components/Heure_fuseau.vue'
export default {
  components: { Background_image_fade, Heure },
  name: 'Home',
  data() {
            return {
            articles:["<a>Chargement<a/>"," "," "]
            }
  },
  methods: {
    renderArticle : function(index) {
      fetch("http://"+window.location.hostname+":8081?content=preview&index="+index,{

      }).then(result => {
        result.text().then(data => {

          this.articles[index]=data;
        })

      })
    },
    updateArticles: function(){
      for (let i = 0; i < 3; i++) {
        this.articles[i]="<a id=chargement>Chargement...<a/>"
        this.renderArticle(i);
      }
    }
  },
  mounted : function(){
    this.updateArticles();
  }
}





</script>




<style lang="scss">
main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 30px;
    align-items: flex-start;
}

main>section,
main>aside {
    background-color: #2E34368c;
    color: white;
    border-radius: 5px;
    font-family:monospace;
}

main>section {
  
    flex-basis: 70%;
    padding: 5px 20px 20px 20px;
}

main>aside {
  flex-basis: 20%;
    
}
main>aside{
  padding: 5px 20px 20px 20px;
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

#derniers_articles > article{
  width: 25%;
  max-height: 200px;
  background-color: #bfcace52;
  border-radius: 10px;
  margin-right: 2%;
  overflow:hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
  
}

#derniers_articles > article > img{
  max-width:100%;
  max-height:100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
#derniers_articles > article > h1 {
  display: block;
  margin: 10px;
}
#derniers_articles > article > a {
  display: block;
  margin: 10px;
}

#linkToArticles{
  width:100%;
  height: 100%;
  text-decoration: none;
  color:white;
}

.asText {
    background:none;
    border:none;
    margin:0;
    padding:0;
    cursor: pointer;
}

</style>