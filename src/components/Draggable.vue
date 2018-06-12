<template>
  <div style="top: 45px; left: 0; right: 0; bottom: 0; position:absolute;">
    <vue-draggable-resizable v-for="field in fields" class="draggable" :w="100" :h="30" :minh="10" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true">
      <div class="object-selector-modal" v-if="field.showObjectSelector">
        <v-select
          v-model="field.object"
          :options="['contact',
                    'contact.current_address',
                    'contact.mailing_address',
                    'contact.address',
                    'contact.phone_number',
                    'contact.email',
                    'contact.first_name',
                    'contact.last_name',
                    'contact.middle_name',]"
          >
        </v-select>
      </div>
      <a class="add-object-button" v-on:click="field.showObjectSelector = !field.showObjectSelector">+</a>
      {{ field.object }}
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
    border: 3px solid #000080;
  }
  .add-object-button {
    cursor: pointer;
    color: #000080 !important;
  }
  .object-selector-modal {
    padding: 30px;
    background: #fafafa;
    box-shadow:0 0 10px rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 400px;
    top: -120px;
    left: -3px;
  }
</style>