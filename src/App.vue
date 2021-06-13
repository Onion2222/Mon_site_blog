<template>
      <header id="MyHeader">
        <!-- logo avec lien vers ma page d'acceil -->
        <!-- <titre-effect delai_prop="150" replacement_prop="_" titre_prop="ELECTR'\ONION"/> -->
        <router-link id="HeaderTitre" to="/">
            <span style="color:#00FF00">Onion@Kerguelen</span>
            <span style="color:#09AD55">:</span>
            <span style="color:#5555FF">~{{decodeURI(this.$route.path) }}</span>
            <span style="color:#09AD55">$&nbsp;<span class="blinkText">█</span></span></router-link>
            <!-- navigation -->
        <nav>


            <!-- list item one -->
            <li>
                <router-link to="/">Accueil</router-link>
            </li>
            <li>
                <router-link to="/articles">Articles</router-link>
            </li>
            <!-- list item two -->
            <li>
                <router-link to="/photos">Photos</router-link>
            </li>
            <!-- list item three -->
            <li>
                <router-link to="/cartes">Cartes</router-link>
            </li>
            <!--
            <li>
               <router-link to="/About">About</router-link>
            </li>-->
        </nav>
    </header>



    

    <router-view/>


    



    <footer id=MyFooter>
        <p>
            <small>
                <a>- Par <router-link style="color:#19e13b" to="/About">Arthur Perrin</router-link>, avec ces petites mains et <a style="color:#19e13b" href="https://vuejs.org/">vue.js</a> -</a>
            </small>
        </p>
    </footer>



</template>


<script>
export default {
  name: 'App'
}
</script>



<style lang="scss">
body {
    margin: 0;
    background-color: #2E3436;
}

/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}*/


#MyHeader,#MyFooter{
    z-index: 10;
}


#MyHeader {
    display: flex;
    background-color: #2E34368c; /*var(--main-bg-headfoot);*/
    position: sticky;
    top: 0;
    justify-content: space-between;
    align-items: center;
}

#MyHeader > #HeaderTitre {
    text-decoration: none;
    padding-right: 2vw;
    padding-left: 1vw;
    margin-top: 0px;
    margin-bottom: 2px;
    margin-top:2px;
    font-family: monospace;
    font-size: 1.5em;
    text-shadow: #0000008c 1px 1px;
}

#MyHeader > nav {
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    list-style-type: none;
    font-size: 1em;
}

#MyHeader > nav > li > a {
    float: right;
    border-left: 2px solid #bbb;
    display: block;
    color: white;
    text-shadow: rgba(0, 0, 0, 0.25) 1px 1px;
    text-align: center;
    padding: 5px 5px;
    text-decoration: none;
    font-family: monospace;
}

#MyHeader > nav > li a:hover:not(.active) {
    background-color: rgba(255, 255, 255, 0.25);
}

#MyHeader > nav > a:hover {
    color: white;
}



#MyFooter {
    position: relative;
    background-color: #2E34368c;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: center;
    font-family: monospace;
    color:rgb(15, 100, 190);
    font-size: 1em;
    text-shadow: 1px 1px black;
}

#MyFooter>p {
    padding: 0;
    margin: 0;
}

.blinkText {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {

    0%{     opacity: 1;    }
    49%{    opacity: 1; }
    60%{    opacity: 0; }
    99%{    opacity: 0;  }
    100%{   opacity: 1;    }
}



</style>
