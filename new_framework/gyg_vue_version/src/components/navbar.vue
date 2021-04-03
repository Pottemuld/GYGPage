<template>
  <div class="topnav" id="mytopnav">
    <a>Home</a>
    <a>designs</a>
    <a>Contact</a>
    <div class="topnav-centered">
      <a>GIF Your Game - Lasse Fisker</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.topnav {
  position: fixed;
  background-color: #333;
  width: 100%;
  top: 0;
  margin-left: -0.5rem;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 1em 1em;
  text-decoration: none;
  font-size: 100%;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #048fc5;
  color: white;
}

.topnav-right {
  float: right;
}

.topnav-centered a {
  float: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>