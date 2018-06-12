<template>
  <div style="top: 0; left: 0; right: 0; bottom: 0; position:absolute">
    <vue-draggable-resizable :w="100" :h="10" :minh="10" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true">
      <p>New Field</p>
    </vue-draggable-resizable>
  </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'

export default {
  data: function () {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0
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
    }
  }
}
</script>