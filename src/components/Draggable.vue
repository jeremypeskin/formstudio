<template>
  <div style="position:absolute; top:0; left:0; margin-top:50px">
    <vue-draggable-resizable v-for="field in fields" class="draggable" :w="100" :h="30" :minh="10" v-on:dragging="onDrag" v-on:resizing="onResize" :y="field.number">

      <div class="populate-modal" v-if="field.showPopulator">
        <v-select
        v-if="field.object.type==='contact'"
        placeholder="Select a contact"
        :options='contacts'
        >
        </v-select>
        <v-select
        v-if="field.object.type==='address'"
        placeholder="Select an address"
        :options='addresses'
        >
        </v-select>
        <v-select
        v-if="field.object.type==='phone'"
        placeholder="Select a phone number"
        :options='phone_numbers'
        >
        </v-select>
      </div>

      <div class="object-selector-modal" v-if="field.showObjectSelector">
        <v-select
        label="name"
        placeholder="Select an object"
        v-model="field.object"
        :options='objects'
        >
        </v-select>
      </div>


      <a class="add-object-button" v-on:click="field.showObjectSelector = !field.showObjectSelector">
        <icon name="chevron-circle-down"></icon>
      </a>
      <div class="field" v-if="field.type == 'field'">
        <input class="field-label" :placeholder='field.object.name'/>
        <a v-on:click="field.showPopulator = !field.showPopulator">
          <icon v-if="field.object.type=='contact'" class='populateIcon' name="user"></icon>
        </a>
        <a v-on:click="field.showPopulator = !field.showPopulator">
          <icon v-if="field.object.type=='address'" class='populateIcon' name="address-book"></icon>
        </a>
        <a v-on:click="field.showPopulator = !field.showPopulator">
          <icon v-if="field.object.type=='phone'" class='populateIcon' name="phone"></icon>
        </a>
      </div>
      <div class="checkbox" v-if="field.type == 'checkbox'">
        <input type="checkbox" />
      </div>
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
      contacts: [
        'Add New Contact+',
        'John Doe',
        'Jane Doe',
        'Philip Cross'
      ],
      addresses: [
        'Add New Address+',
        '1920 Kater St, Philadelphia PA 10032',
        '142 W. 81st St, New York NY 10012',
        '210 Rosemary Rd. Toronto, ON M5N 1P7'
      ],
      phone_numbers: [
        'Add New Phone Number+',
        '212 545 2233',
        '434 111 2211',
        '555 234 1211'
      ],
      objects: [
      {
        name:'contact',
        type:''
        },
      {
        name:'form.beneficiary.first_name',
        type:'contact'
      },
      {
        name:'form.beneficiary.middle_name',
        type:'contact'
      },
      {
        name:'form.beneficiary.last_name',
        type:'contact'
      },
      {
        name:'contact.current_address',
        type:'address'
        },
      {
        name:'contact.mailing_address',
        type:'address'
      },
      {
        name:'contact.address',
        type:'address'
      },
      {
        name:'contact.phone_number',
        type:'phone'
      },
      {
        name:'contact.email',
        type:'email'
      },
      {
        name:'contact.first_name',
        type:'contact'
      },
      {
        name:'contact.last_name',
        type:'contact'
      },
      {
        name:'contact.middle_name',
        type:'contact'
      }
      ]
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
  .field {
    border: 2px solid #000080;
    height: 100%;
  }
  .add-object-button {
    cursor: pointer;
    color: #e1e1e1  !important;
    position: absolute;
    left: -15px;
    top: 5px;
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
  .populate-modal {
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
    color: black;
    display: inline;
    padding-left: 5px;
    width: 100%;
    height: 101%;
  }
  .populateIcon {
    position: absolute;
    right: 10px;
    top: 7px;
    color: #909090;
  }
</style>