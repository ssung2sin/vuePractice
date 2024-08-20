<template>
  <Navbar />
  <Event :text="text"/>
  <SearchBar />
  <movies
    :data="data"
    :isModal="isModal"
    @increaseLike="increaseLike($event)"
    @openModal="isModal=true;selectedMovie=$event"
   />
  <Modal
        :data="data"
        :isModal="isModal"
        :selectedMovie="selectedMovie"
        @i="i"
        @closeModal="isModal=false"
  /> 
  <hr>
  <!-- <p v-for="item in foods" :key="item">{{item}}</p>  -->
  <!-- 만약 변수를 만들고 사용하지 않았을 경우 오류가 발생, 그 이유는 ESLint가 코드 품질을 검사하는 과정에서 사용되지 않은 변수를 감지하고 경고를 띄우는 것  -->
</template>

<script>
  import { data } from './assets/movies'; //영화 데이터를 불러오고 data() 안에 data: data 해줘야 호출가능!
  import Navbar from './components/Navbar';
  import Event from './components/Event';
  import Modal from './components/Modal';
  import Movies from './components/Movies';
  import SearchBar from './components/SearchBar'

  export default{ //vue 문법
    name: 'App', //App.vue라는 컴포넌트를 사용하고있다.
    data(){ //문서에 표시될 변수를 정의 (상태변수 state value) / 자주변경되는 값 정리
      return{
        isModal: false,
        //foods: ["김밥","순대","만두", "떡국"],
        data: data,
        selectedMovie : 0,
        text: "NETFLEX 강렬한 운명의 드라마, 경기크리쳐",
      }
    },
    methods: {
        increaseLike(i) {
          this.data[i].like++;
        },
    },
    components: {
      Navbar: Navbar, //불러온 이름 그래도 사용하는것이 관례
      Event: Event,
      Modal: Modal,
      Movies: Movies,
      SearchBar: SearchBar,
    }
  }
</script>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
  }
  
  body{
    max-width: 768px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1,h2,h3{
    margin-bottom: 1rem;
  }

  p{
    margin-bottom: 0.5rem;
  }

  button{
    margin-right: 10px;
    margin-top: 1rem;
  }

  .item{
    width: 100%;
    border: 1px solid #ccc;
    display: flex;
    margin-bottom: 20px;
    padding: 1rem;
  }

  .item figure{
    width: 30%;
    margin-right: 1rem;
  }

  .item img{
    width: 100%;
  }

  .item .info{
    width: 100%;
  }

</style>
