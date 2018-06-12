<template>
  <div>
    <div id="navbar-container">
      <ul id="navbar">
        <li>
          <a>Add Field</a>
        </li>
      </ul>
    </div>
    <div class="page-container">
      <Draggable></Draggable>
      <div class="form-container">
        <img :src="require('./assets/images/form.jpg')" class="footer-img"/>
      </div>
    </div>
  </div>
</template>

<script>

import Draggable from './components/Draggable'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    Draggable
  }
}
</script>

<style>
  #navbar-container {
    width: 100%;
    list-style: none;
    background: #fafafa;
    padding: 10px;
    border-bottom: 1px solid #e1e1e1;
  }
  #navbar {
    list-style: none;
    margin: 0px;
  }
  .page-container {
    width: 100%;
    height: 100vh;
  }
  .form-container {
    text-align: center;
  }
  img {
    width: 80%;
  }
</style>
