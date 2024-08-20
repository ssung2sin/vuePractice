<template>
    <div>
        <div class="modal" v-if="isModal">
        <div class="inner">
          <h3>{{ data[selectedMovie].title}}</h3>
          <p>영화 상세정보</p>
          <button @click="$emit('closeModal')">닫기</button> 
          <!-- 변수 변경을 원할때 $emit('')을 작성-->
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name: "ModalComponent",
    props: { //props 쓸 경우 데이터이름 : 자료형 으로 작성
        data: Array,
        selectedMovie: Number,
        isModal: Boolean,
    },
}
</script>
<style>
    .modal{
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal .inner{
    background: #fff;
    width: 80%;
    padding: 20px;
    border-radius: 10px;
  }
</style>