<template>
  
  <Background_image_fade :images_prop="['im1.jpg', 'im2.jpg', 'im3.jpg']" :delai_prop="5000"/>

  <main>

    <section>
      <h2>
        Derniers Articles
      </h2>
        
      <div id=derniers_articles>
        <article id="Article1" v-html="articles[1]"></article>
        <article id="Article2" v-html="articles[1]"></article>
      </div>
    </section>

    <aside>
      <div id="Heure">
        <h2>Fuseaux Horaire</h2>
        <tr>
          <td>Troyes/Compiègne</td>
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
            articles:[" "," "," "]
            }
  },
  methods: {
    renderArticle : function(index) {
      //console.log("===>"+window.location.hostname+":8081");

      fetch("http://"+window.location.hostname+":8081?content=preview&index="+index,{

      }).then(result => {
        result.text().then(data => {

          //console.log("RESULT=>"+data);

          console.log("(((((((=>"+data);
          this.articles[index]=data;
          console.log("(((((((=>"+this.articles[index]);
        })
        //result.json().then(function(data){console.log(data);return data});

      })
    }
  },
  mounted : function(){
    this.renderArticle(1);
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
    align-items: stretch;
}

main>section,
main>aside {
    background-color: #2E34368c;
    color: white;
    border-radius: 20px;
    font-family:monospace;
}

main>section {
  
    flex-basis: 75%;
    padding: 5px 20px 20px 20px;
}

main>aside {
  flex-basis: 15%;
    
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
  width: 100%;
  /*border: 1px solid rgb(255, 255, 255);*/
}

.Time{
  font-weight: bolder;
  color:coral;
  text-align: right;
}


#derniers_articles{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding-top: 30px;
  align-items: stretch;
  flex-basis: auto;
}

#derniers_articles > article{
  width: 20%;
  background-color: #bfcace8c;
  border-radius: 20px;
  padding: 5px 20px 20px 20px;
}

#derniers_articles > article > img{
  max-width:100%;
  max-height:100%;
}

</style>