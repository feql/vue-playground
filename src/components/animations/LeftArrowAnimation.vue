<template>
  <div class="graph__wrapper" >
    <svg width="315px" height="107px" viewBox="0 0 315 107" version="1.1" style="overflow: visible">
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        sketch:type="MSPage"
      >
        <path
          id="Path-1"
          class="path"
          fill="none"
          stroke="#00dffc"
          stroke-width="5"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M1.5,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"
        />

        <path
          class="dashed"
          fill="none"
          stroke="#e30ef7"
          stroke-width="4"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"
        />

        <polyline id="arrow" points="0,-9 18,0 0,9 5,0" fill="#00dffc" >
          <animateMotion rotate="auto" begin="0.9s" dur="1.8s" repeatCount="1" fill="freeze">
            <mpath xlink:href="#Path-1" />
          </animateMotion>
        </polyline>
      </g>
    </svg>
  </div>
</template>

<script>
//https://freefrontend.com/css-arrows/
//https://codepen.io/cpandya/pen/Gevvqg

export default {}
</script>


<style scoped>
.graph__wrapper{
  position: absolute;
  width: 100px;
  /* background-color:green; */
  right: calc(100vw / 2 + 180px);
  top: 190px;
}

.path { 
  stroke-dasharray: 1000; 
  stroke-dashoffset: 1000; 
  animation: dash 3s linear forwards; 
  animation-iteration-count: 1;
  animation-delay: 1s;
}
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
.dashed{
  stroke-dasharray: 5,12;
  
}
#arrow{animation: arrow 2s linear forwards; opacity:0;}
@keyframes arrow {
  to {
    opacity: 1;
  }
}
.ifrm{border:none; width:100%;margin-top:50px;}
</style>
