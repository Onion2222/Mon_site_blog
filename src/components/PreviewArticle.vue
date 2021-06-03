<template>
    <div id="Article">
        <img :src="`${image}`">
        <h1>{{titre}}</h1>
        <a>{{description}}</a>
    </div>
</template>

<script>

    export default {
        name: 'ArticlePreview',
        props: {
            mode: String,
            index: Number
        },
        data() {
            return {
                Vmode:   this.mode,
                Vindex:  this.index,
                url:"",
                image:"",
                titre:"",
                description:"",
                auteur:"",
                date:""
            }
        },
      
        methods: {
            
            
        },
        mounted: function() {
            fetch("http://"+window.location.hostname+":8080/backend/list",{})
                .then(response => response.json())
                .then(data => {
                    let article=data.articles[this.Vindex];
                    this.url=article.url+article.name;
                    this.date=article.birthtime; //a adapter

                    this.titre=article.preview.titre;
                    this.description=article.preview.description;
                    this.author=article.author;
                    this.image="./Articles/"+article.name+"/"+article.preview.url_img; //a fair si pas image
                    console.log("====>imgurl:",this.image);

                })
        
        },
        unmounted: function() {
        }
    };



 

</script>


<style scoped lang="scss">

#Article{
  width: 25%;
  max-height: 200px;
  background-color: #bfcace52;
  border-radius: 10px;
  margin-right: 2%;
  overflow:hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
  
}

#Article > img{
  max-width:100%;
  max-height:100%;
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