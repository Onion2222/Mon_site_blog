<template>
  
  <Background_image_fade :images_prop="['im1.jpg', 'im2.jpg', 'im3.jpg']" :delai_prop="5000"/>




  <main>

    <section>
      <h2>
        Derniers Articles
      </h2>
      
      <div>
        <article>
          <h2>
            Titre de mon article
          </h2>
          <p>
            Texte de mon article.
          </p>
        </article>
        <article>
          <h2>
            Titre de mon article
          </h2>
          <p>
            Texte de mon article.
          </p>
        </article>
      </div>
    </section>

    <aside>
      <div id="Heure">
        <h2>Fuseaux Horaire</h2>
        <tr>
          <td>Troyes</td>
          <td><Heure class="Time" fuseau="Europe/London"/></td>
        </tr>
        <tr>
          <td style="padding-right: 15px">Kerguelen</td>
          <td><Heure class="Time" fuseau="Indian/Kerguelen"/></td>
        </tr>
      </div>
    </aside>

  </main>

</template>

<script>

import Background_image_fade from '../components/Background_image_fade.vue'
import Heure from '../components/Heure_fuseau.vue'
export default {
  components: { Background_image_fade, Heure },
  name: 'Home',
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
main>aside>#Heure {
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
main>aside>#Heure{
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

.Time{
  font-weight: bolder;
  color:coral;
}



</style>