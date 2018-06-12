<template>
  <div>
    <div id="navbar-container">
      <ul id="navbar">
        <li>
          <a>Add Field</a>
        </li>
      </ul>
    </div>
    <Draggable></Draggable>
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
</style>
