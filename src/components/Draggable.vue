<template>
  <div style="top: 45px; left: 0; right: 0; bottom: 0; position:absolute;">
    <vue-draggable-resizable v-for="field in fields" class="draggable" :w="100" :h="30" :minh="10" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true">
      <div class="object-selector-modal" v-if="field.showObjectSelector">
        <v-select
          placeholder="Select an object"
          v-model="field.object"
          @blur="field.showObjectSelector = !field.showObjectSelector"
          :options="['contact',
                    'form.beneficiary.first_name',
                    'form.beneficiary.middle_name',
                    'form.beneficiary.last_name',
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
      <a class="add-object-button" v-on:click="field.showObjectSelector = !field.showObjectSelector">
        <icon name="chevron-circle-down"></icon>
      </a>
      <p class="field-label">
        {{ field.object }}
      </p>

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
    border: 2px solid #000080;
  }
  .add-object-button {
    cursor: pointer;
    color: #909090 !important;
    margin-left: 2px;
    padding-top: 5px;
  }
  .object-selector-modal {
    padding: 30px;
    background: #fafafa;
    box-shadow:0 0 10px rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 450px;
    top: -120px;
    left: -3px;
  }
  .field-label {
    font-size: 12px;
    color: rgb(144, 144, 144);
    display: inline;
    padding-left: 5px;
  }
</style>