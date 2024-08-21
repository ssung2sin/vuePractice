<template>
  <div class="layout bcblack"></div>
  <div class="layout title"><titleComponent /></div>
  <div class="layout main"><mainComponent 
   :express="express" /></div>
  <div class="layout hgintroduce"><hgintroduce /></div>
  <div class="layout info"></div>
</template>

<script>
import hgintroduce from "./components/Hgintroduce";
import mainComponent from "./components/Main.vue"
import express from "./assets/express.js"
import titleComponent from "./components/Title.vue"

export default {
  name: "App",
  data(){
    return{
     express : express,
    }
  },
  components: {
    hgintroduce: hgintroduce,
    mainComponent: mainComponent,
    titleComponent: titleComponent,
  },

};
</script>

<style>
body {
  background-image: url("assets/image/hgsimage.jpg");
  background-size: 100% 100vh;
  background-attachment: scroll;
  background-repeat: no-repeat;
}

div.bcblack {
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
}

div.layout {
  position: absolute;
}

div.title {
  width: 100%;
  height: 15%;
  text-align: center;
}

div.main {
  width: 70%;
  height: 84%;
  font-size: 2vh;
  margin-left: 15%;
  top: 15%;
}

div.info {
  width: 13%;
  height: 30%;
  line-height: 10px;
  border-radius: 3%;
  right: 1%;
  padding: 20px 10px;
  display: inline-block;
  position: fixed;
  top: 30%;
}

div.hgintroduce {
  width: 100%;
  height: 100%;
  top: 100%;
  background-image: url("assets/image/yellowbackground.jpg");
  background-size: 100% 100vh;
  background-attachment: scroll;
  background-repeat: no-repeat;
}
</style>
