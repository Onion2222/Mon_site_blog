<template>
    <router-link :to="'/articles/' + url">
        <div id="Article" >
            <img :src="`${image}`">
            <h1>{{titre}}</h1>
            <a>{{description}}</a>
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
                    this.date=article.birthtime; //a adapter
                    this.titre=article.preview.titre;
                    this.description=article.preview.description;
                    this.author=article.author;
                    this.image="./Articles/"+article.name+"/"+article.preview.url_img; //a fair si pas image
                    console.log("======================>",this.url);
                    
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
    width: 200px;
    height: 300px;
    background-color: #bfcace52;
    border-radius: 2px;
    border-top-left-radius: 20px;
    margin-right: 15px;
    margin-bottom: 15px;
    overflow:hidden;
    word-wrap: break-word;
    text-overflow: ellipsis;
    box-shadow: rgba(0, 0, 0, 0.75) 4px 4px;
    transition: transform 250ms;
}
#Article:hover {
    transform: translateY(-10px);
}

#Article > img{
  /*max-width:100%;*/
  max-height: 150px;
  object-fit: cover;
  margin: 0 auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

#Article > h1 {
  display: block;
  margin: 10px;
}

#Article > a {
  display: block;
  margin: 10px;
}


</style>