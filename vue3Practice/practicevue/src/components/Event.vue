<template>
  <div class="event" :class="{block: isClose}">
    <p>{{ text }}</p>
    <button @click="isClose=true">X</button>
  </div>
</template>
<script>
export default {
  name: "EventComponent",
  props: {
    text: String,
  },
  data(){
    return{
        isClose: false
    }
  }
};
</script>
<style>
.event {
  background: #444;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
  font-size: small;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.block{
    display: none;
}

.event p {
  margin: 0;
}

.event button {
  margin: 0;
}
</style>