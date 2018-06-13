<template>
  <div>
    <div id="navbar-container">
      <ul id="navbar">
        <li>
          <a class="navbar-item" v-on:click="addField('field')">
            <icon class="lower-by-2" name="align-left"></icon>
            Field
          </a>
          <a class="navbar-item" v-on:click="addField('checkbox')">
            <icon class="lower-by-1" name="check-square"></icon>
            Checkbox
          </a>
          <a class="navbar-item" v-on:click="addField('field')">
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
        <img :src="require('./assets/images/form2.jpg')" class="footer-img"/>
        <!--<iframe :src="require('./assets/images/i360.jpg')" width="100%" height="100%">-->
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
    addField: function(type){
      var position = window.pageYOffset;
      console.log(position)
      this.fields.push({
        showObjectSelector: false,
        object: "",
        number: position,
        type: type
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
    position:fixed;
    z-index:1;
  }
  #navbar {
    list-style: none;
    margin: 0px;
  }
  .page-container {
    width: 100%;
    position:relative;
    min-height: 100%;
    background: #fafafa;
    padding-top: 50px;
  }
  .form-container {
  }
  img {
    width: 1000px;
    box-shadow:0 0 10px rgba(0, 0, 0, 0.5);
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
