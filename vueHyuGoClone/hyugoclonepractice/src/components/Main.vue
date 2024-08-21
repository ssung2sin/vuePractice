<template>
  <form class="box" style="align: center">
    <h1>What are you looking for?</h1>
    <br />
    <button class="searchbtn" type="button" @click="setMap">휴게소찾기</button>
    <br />
  </form>
  <div class="map_wrap map-close" id="map_wrap">
    <div id="map"></div>
    <div id="menu_wrap" class="bg_white">
      <div class="option">
        <input
          type="text"
          placeholder="검색 할 휴게소 입력"
          id="keyword"
          name="hugesoname"
          size="20"
        />
        <button id="searchbtn2" type="button" @click="qwer">검색하기</button>
        <button class="btn btn-danger" id="mapbtn_x" @click="mapOut">X</button>
        <br />
        <b>검색결과</b>
      </div>
      <hr />

      <div class="alist">
        <table></table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MainComponent",
  data() {
    return {
      flag : false,
    };
  },

  props: {
    express: Array,
  },

  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=22179c33e47c2c799350e105808d903c&libraries=services";
      document.head.appendChild(script);
    }
  },

  methods: {
    setMap() {
      document.getElementsByClassName("map_wrap").innerHTML = "";
      console.log("클릭");
      document
        .getElementsByClassName("map_wrap")[0]
        .classList.remove("map-close");
      this.initMap();
      this.addPin();
    },
    initMap() {
      const mapContainer = document.getElementById("map"); // 지도를 표시할 div
      const option = {
        center: new kakao.maps.LatLng(36.4196, 127.84205), // 지도의 중심좌표
        level: 13, // 지도의 확대 레벨

        disableDoubleClickZoom: true, //지도더블클릭확대 막기
      };
      this.map = new kakao.maps.Map(mapContainer, option);
      this.map.setZoomable(false);
    },
    mapOut() {
      document.getElementsByClassName("map_wrap")[0].classList.add("map-close");
    },
    addPin() {
      const geocoder = new kakao.maps.services.Geocoder();
      this.express.forEach(item => {
        geocoder.addressSearch(item.b_addr, (result, status) => {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            const marker = new kakao.maps.Marker({
              map: this.map,
              position: coords,
            });

            const content = `
              <div style="width:150px;text-align:center;padding:6px 0;">
                <b>${item.b_name}</b><br>
                <img src="save/${item.image}" style="width:100%; height:70px"><br>
                <b>${item.b_hp}</b><br>
                <b>${item.s_hp}</b>
              </div>
            `;
            const infowindow = new kakao.maps.InfoWindow({
              content: content,
            });

            kakao.maps.event.addListener(marker, 'mouseover', () => {
              infowindow.open(this.map, marker);
            });
            kakao.maps.event.addListener(marker, 'mouseout', () => {
              infowindow.close();
            });
            kakao.maps.event.addListener(marker, 'click', () => {
              if (this.map.getLevel() === 4) {
                const myid = item.b_id;
                location.href = `/subPage.jsp?id=${myid}`;
              }
              this.map.setLevel(4);
              this.map.panTo(marker.getPosition());
            });

          }
        });
      });
    },
    relayout() {
      this.map.relayout();
    },
  },
};
</script>
<style>
/*///////////////////////////////////////////////////////////////////////*/
/*맵 css*/
#map {
  position: absolute;
  border-radius: 40px;
  margin-left: 23%;

  width: 50%;
  height: 90%;
}

#map.input {
  align-self: center;
}
/*///////////////////////////////////////////////////////////////////////*/
/*맵 검색 리스트 css */
#menu_wrap {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 20%;
  height: 90%;
  margin: 10px 0 30px 10px;
  padding: 5px;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.7);
  z-index: 1;
  font-size: 14pt;
  border-radius: 10px;
  font-family: Dongle;
}
.map-close {
  display: none;
}
#keyword {
  background-color: #fff;
  padding: 3px;
  border-radius: 25px 0 0 25px;
}
#searchbtn2 {
  background-color: orange;
  padding: 3px;
  border-radius: 0 25px 25px 0;
  color: #fff;
  margin-left: -6px;
}
.mapbtn_x {
  border-radius: 100px;
}
/*///////////////////////////////////////////////////////////////////////*/
/*메인 휴게소찾기버튼 css */
form.box {
  width: 500px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
}

form.box h1 {
  font-weight: normal;
}

form.box input {
  border: none;
}

.searchbtn {
  width: 13vh;
  height: 5vh;
  background-color: orange;
  padding: 1vh;
  border-radius: 2.5vh;
  color: #fff;
  margin-left: -6px;
}
.mapbtn_x {
  border-radius: 3px;
}
/*///////////////////////////////////////////////////////////////////////*/
</style>