<template>
  <div style="top: 45px; left: 0; right: 0; bottom: 0; position:absolute;">
    <vue-draggable-resizable v-for="field in fields" class="draggable" :w="100" :h="30" :minh="10" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true">
      <div class="object-selector-modal" v-if="field.showObjectSelector">
        <select></select>
      </div>
      <a class="add-object-button" v-on:click="field.showObjectSelector = !field.showObjectSelector">+</a>
    </vue-draggable-resizable>
  </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'

export default {
  props: {
    fields: Array
  },
  data: function () {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    }
  },
  methods: {
    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag: function (x, y) {
      this.x = x
      this.y = y
    },
  }
}
</script>

<style>
  .draggable {
    border: 3px solid #42c2f6;
  }
  .add-object-button {
    cursor: pointer;
    color: #42c2f6 !important;
  }
  .object-selector-modal {
    padding: 30px;
    background: #fafafa;
    box-shadow:0 0 10px rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 300px;
    top: -100px;
    left: -3px;
  }
</style>