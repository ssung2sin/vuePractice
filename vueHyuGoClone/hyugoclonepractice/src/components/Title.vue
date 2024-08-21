<template lang="">
    <section class="container">
    <h5>
      <span id="login">로그인</span>
      <span id="register">회원가입</span>
    </h5>
    <span id="mypage">마이페이지</span>
    <span id="admin">관리자</span>
    <h1 id="titlepage">HG</h1>
    <div id="myadmin"></div>
   </section>
</template>
<script>
export default {
  name: "TitleComponent",
};
</script>
<style>
.container h5 {
  color: white;
  position: absolute;
  right: 3%;
  top: 40%;
  font-size: 2vh;
  cursor: pointer;
}
.container h1 {
  font-family: Wallpoet;
  font-size: 10vh;
  color: gold;
  position: absolute;
  top: 4%;
  bottom: 4%;
  left: 3%;
  cursor: pointer;
}
#myadmin {
  position: absolute;
  margin-left: 30vh;
  margin-top: 5vh;
  width: 3vh;
  height: 3vh;
}
h5 > span {
  margin-right: 2vh;
}
</style>