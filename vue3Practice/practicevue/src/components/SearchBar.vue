<template>
  <div class="search-box">
    <!--@input="inputText = $event.target.value" 이거와 v-model은 같음 -->
    <input class="search-input" type="search" v-model="inputText" placeholder="검색어 입력" />
    <button @click=hendleSearch>검색</button>
  </div>
</template>
<script>
export default {
  name: "SearchBarComponent",
  data(){
    return{
        inputText : '',
    }
  },
  props:{
    data:Array,
  },
  methods:{
    searchFilterText(name){
      const findName = this.data.filter(movie=>{
          return movie.title.includes(name);
      })
      if(findName.length==0){
        alert("일치하는 영화가 없습니다.");
        return false;
      }
      return true;
    },
    hendleSearch(){
      if(this.searchFilterText(this.inputText)){
        this.$emit('searchMovie',this.inputText);
      }
    }
  }
};
</script>
<style>
.search-box {
  padding: 10px;
  display: flex;
  justify-content: center;
}

.search-box input {
  padding: 5px 10px;
}

.search-box button {
  margin: 0;
}
</style>