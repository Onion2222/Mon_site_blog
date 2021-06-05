<template>
        
        <transition-group name="fade">
            <img :key="1" class="BackgroundImage" id="BackgroundImageTop" v-if="showTop" v-bind:src="require(`@/assets/${imageTop}`)" v-bind:style="{ zIndex: zindexTop  }">
            <img :key="2" class="BackgroundImage" id="BackgroundImageBot" v-if="showBot" v-bind:src="require(`@/assets/${imageBot}`)" v-bind:style="{ zIndex: zindexBot  }">
        </transition-group>
    
</template>

<script>

    export default {
        name: 'Background_image_fade',
        props: {
            images_prop: Array,
            delai_prop: Number
        },
        data() {
            return {
                listimage: this.images_prop,
                index: 0,
                imageTop: this.images_prop[0],
                imageBot: this.images_prop[1],
                intervalChgtBackground: undefined,
                showTop: true,
                showBot: false,
                etat: true,
                zindexTop: -10,
                zindexBot: -11,
                delai: this.delai_prop
            }
        },
      
        methods: {
            next: function() {
                this.index = (this.index + 1) % this.listimage.length;
                if (this.etat) {
                    this.imageBot = this.listimage[this.index];
                    this.showBot = true;

                    this.showTop = false;
                    this.zindexTop -= 2;
                } else {
                    this.imageTop = this.listimage[this.index];
                    this.showTop = true;

                    this.showBot = false;
                    this.zindexBot -= 2;
                }
                this.etat = !this.etat;
            },
            startSlide: function() {
                this.intervalChgtBackground = setInterval(this.next, this.delai);
            },
            stopSlide: function() {
                clearInterval(this.intervalChgtBackground);
            }
        },
        mounted: function() {
            console.log("back_fade mounted");
            this.startSlide();
        },
        unmounted: function() {
            this.stopSlide();
        }
    };



 

</script>


<style scoped lang="scss">
.BackgroundImage {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    
    object-fit: cover;
}



.fade-leave-active {
    transition: opacity 1.5s;
}

.fade-leave-to {
    opacity: 0;
}

</style>