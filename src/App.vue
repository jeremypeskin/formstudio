<template>
  <div>
    <div id="navbar-container">
      <ul id="navbar">
        <li>
          <a class="navbar-item" v-on:click="addField">
            <icon class="lower-by-2" name="align-left"></icon>
            Field
          </a>
          <a class="navbar-item">
            <icon class="lower-by-1" name="check-square"></icon>
            Checkbox
          </a>
          <a class="navbar-item">
            <icon class="lower-by-2" name="list"></icon>
            Select
          </a>
        </li>
      </ul>
    </div>
    <div class="page-container">
      <Draggable
        :fields="fields"
        >
      </Draggable>
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
      fields:[]
    }
  },
  methods: {
    addField: function(){
      this.fields.push({
        showObjectSelector: false,
        object: ""
      })
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
    width: 1000px;
    position: absolute;
    top: 45px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: -1;
  }
  .navbar-item {
    margin-right: 40px;
    cursor:pointer;
  }
  .lower-by-2 {
    margin-bottom: -2px;
  }
  .lower-by-1 {
    margin-bottom: -1px;
  }
  .fa-icon {
    width: auto;
    height: .95em;
  }
</style>
