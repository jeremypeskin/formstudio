<template>
  <div>
    <div id="navbar-container">
      <ul id="navbar">
        <li class="navbar-item">
          <input placeholder='Untitled Form'/>
        </li>
        <li class="navbar-item">
          <a v-on:click="addField('field')">
            <icon class="lower-by-2" name="align-left"></icon>
            Field
          </a>
        </li>
        <li class="navbar-item">
          <a v-on:click="addField('field')">
            <icon class="lower-by-2" name="align-left"></icon>
            Textarea
          </a>
        </li>
        <li class="navbar-item">
          <a v-on:click="addField('checkbox')">
            <icon class="lower-by-1" name="check-square"></icon>
            Checkbox
          </a>
        </li>
        <li class="navbar-item">
          <a v-on:click="addField('field')">
            <icon class="lower-by-2" name="list"></icon>
            Select
          </a>
        </li>
        <li class="navbar-item">
          <button class="btn-green">PUBLISH</button>
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
        showPopulator: false,
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
  #navbar li {
    display:inline-block;
  }
  .page-container {
    background: #fafafa;
    padding-top: 50px;
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
  .btn-green {
    background: #60d3c2;
    border: 1px solid #60d3c2;
    color: white;
  }
</style>
