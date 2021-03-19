<template>
  <br /><br /><br /><br /><br /><br /><br /><br /><br />
  <section class="boxes1">
    <h1 class="textCenter" id="h11">
      <b><u>Welcome to Adriane M.</u></b>
    </h1>
    <p id="fontSizeP">
      We have all flowers you can think of, and if we don't have it in our store
      we can order them for you!
    </p>
    <button>Click here to go to our main page</button>
    <br><br>
  </section>
  <br /><br />
  <img id="picture1" src="../public/assets/background.jpeg" alt="Flower Shop" />
  <br><br><br><br><br><br><br><br><br>
  <footer>
    <section class="footer">
      <p>
        &#169; 2021 Adriane M.<br />
        Email:
        <a href="mailto:AdrianeM@gmail.com">AdrianeM@gmail.com</a
        ><br />
        Phone: <a href="tel:+12088545633">(208)-854-5633</a><br />
        2275 Hightop Rd, Meridian, Idaho 83642
      </p>
    </section>
  </footer>
</template>

<script>
import HelloWorldVue from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld: HelloWorldVue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html {
  background-image: url("./assets/background3.jpg");
  background-size: cover;
}
button {
  color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(0, 0, 0);
  border-radius: 4px;
  padding: 0 15px;
  cursor: pointer;
  height: 32px;
  font-size: 14px;
  transition: all 0.2s ease-in-out;
}
button:hover {
  box-shadow: 1px 1px teal, 2px 2px teal, 3px 3px teal;
  transform: translateX(-3px);
}
#picture1 {
  height: 65vh;
}
#h11 {
  font-size: 60px;
}
.boxes1 {
  margin: 20px 250px 20px 250px;
  background-color: rgb(164, 226, 226);

  padding: 5px 5px 5px 5px;
  border-color: teal;
  border-style: solid;
}
#fontSizeP {
  font-size: x-large;
}

.footer {
  padding-top: 5px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: teal;
  color: black;
  text-align: center;
}
.footer > p > a:link,
a:active {
  color: black;
}
</style>
