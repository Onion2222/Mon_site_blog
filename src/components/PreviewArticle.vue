<template>
    <router-link :to="'/articles/' + url">
        <div id="Article" >
            <img :src="`${image}`">
            <div id="dataArticle">
                <h1>{{titre}}</h1>
                <small>Par <strong>{{auteur}}</strong> le <strong>{{date}}</strong></small>
                <!-- <a>{{description}}</a> -->
            </div>
        </div>
    </router-link>
</template>

<script>

    export default {
        name: 'ArticlePreview',
        props: {
            mode: String,
            index: Number,
            refresh: Boolean
        },
        data() {
            return {
                Vmode:   this.mode,
                Vindex:  this.index,
                url:"erreur",
                image:"",
                titre:"Chargement...",
                description:"",
                auteur:"",
                date:""
            }
        },
        watch: { 
            refresh: function() {
                this.titre="Chargement..."
                this.url="erreur";
                this.image="";
                this.description="";
                this.auteur="";
                this.date="";
                this.updateArticles();
            }
        },
            
        methods: {
            updateArticles: function(){
                fetch("http://"+window.location.hostname+":8080/backend/list",{})
                .then(response => response.json())
                .then(data => {
                    let article=data.articles[this.Vindex];
                    this.url=article.name;
                    this.date=new Date(article.birthtime).toLocaleDateString(); //a adapter
                    this.titre=article.preview.titre;
                    this.description=article.preview.description;
                    this.auteur=article.preview.auteur;
                    this.image="./Ressources/Articles/"+article.name+"/"+article.preview.url_img; //a fair si pas image                    
                })
            }
            
        },
        mounted: function() {
            this.updateArticles();
            
        },
        unmounted: function() {
        }
    };



 

</script>


<style scoped lang="scss">

a{
    text-decoration: none;
    color:white;
}

#Article{
    width: 175px;
    height: 200px;
    background-color: #bfcace52;
    border-radius: 2px;
    border-top-left-radius: 15px;
    margin-right: 15px;
    margin-bottom: 15px;
    overflow:hidden;
    box-shadow: rgba(0, 0, 0, 0.75) 4px 4px;
    transition: transform 250ms;
    position: relative;
    display: flex;
}

#Article > img{
  /*max-width:100%;*/
  position: absolute;
  left: 0;
  top: 0;
  max-height: 100%;
  object-fit: cover;
  margin: 0 auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}


#dataArticle{
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 5;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 0px;
    padding-bottom: 5px;
    text-shadow: black 1px 1px;
    align-self: flex-end;
    line-height: 0.9;
    width:100%;
}

#dataArticle > small{
    margin-top:0px;
}
#dataArticle > h1{
    margin-bottom:5px;
    margin-top:5px;
}

#Article:hover {
    transform: rotate(5deg); /*translateY(-10px);*/
}

</style>