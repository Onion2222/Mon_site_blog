<template>
  
  <Background_image_fade :images_prop="['im1.jpg', 'im2.jpg', 'im3.jpg']" :delai_prop="5000"/>




  <main>

    <section>
      <h2>
        Titre de ma section
      </h2>
      <p>
        Texte de ma section. Avec des articles liés :
      </p>
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
      <p>
        Texte sans rapport direct.
      </p>
    </aside>

  </main>

</template>

<script>

import Background_image_fade from '../components/Background_image_fade.vue'
export default {
  components: { Background_image_fade },
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
main>aside {
    background-color: rgba(0, 0, 0, 0.385);
    color: white;
    border-radius: 20px;
}

main>section {
    flex-basis: 70%;
    padding: 20px;
}

main>aside {
    flex-basis: 20%;
    padding: 20px;
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

</style>