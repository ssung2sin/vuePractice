<template>
  <div class="container">
    <h1>영화정보</h1>
    <!-- 속성에 값을 바인딩 할때 속성앞에 : 붙이기 -->
    <!-- <h3 class="bg-yellow" :style="textRed">{{ title }}</h3> 
    <p>{{year}}</p>
    <p>{{category}}</p> -->
    <div v-for="(movie, i) in data" :key="i" class="item">
      <figure>
        <img :src="`/assets/${movie.title}.jpg`" :alt="movie.title" />
        <!-- 속성 안 변수는 {{}} 이거 쓰지 않음!-->
      </figure>
      <div class="info">
        <h3 class="bg-yellow">{{ movie.title }}</h3>
        <p>{{ movie.year }}</p>
        <p>{{ movie.category }}</p>
        <button @click="$emit('increaseLike',i)">좋아요</button>
        <span>{{ movie.like }}</span>
        <!-- v-on=>@ -->
        <p>
          <button @click="$emit('openModal',i)">상세보기</button>  
          <!-- $emit('여기값은 받아오는 거', 이다음 건 넘기는 값) -->
        </p>
        <!-- 값 넘겨줄 때 :변수명="넘겨줄데이터" 인데 두 값을 일치시킨다. -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "MoviesComponent",
    props: {
      data: Array,
      isModal: Boolean,
      increaseLike: Function,
    }
}
</script>
<style>
.container {
  padding: 20px;
}
</style>