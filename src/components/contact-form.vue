<template>
  <div class="contact-form modal-content">
    <h2 v-if="formData.id">Editcontact</h2>
    <h2 v-else>Add new contact</h2>

    <form class="form">
      <div class="row">
        <div class="input-field">
          <input id="name" type="text" class="validate">
          <label for="name">Name</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field">
          <input id="role" type="text" class="validate">
          <label for="role">Role</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field">
          <input id="company" type="text" class="validate">
          <label for="company">Company</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field">
          <input id="street" type="text" class="validate">
          <label for="street">Street</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field">
          <input id="suite" type="text" class="validate">
          <label for="suite">Suite</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field city">
          <input id="city" type="text" class="validate">
          <label for="city">City</label>
        </div>

        <div class="input-field state">
          <input id="state" type="text" class="validate">
          <label for="state">State</label>
        </div>

        <div class="input-field zip">
          <input id="zip" type="text" class="validate">
          <label for="zip">Zip</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field">
          <input id="phone" type="text" class="validate">
          <label for="phone">Phone</label>
        </div>
      </div>
      <div class="form-footer">
        <a class="waves-effect waves-light btn blue">Submit</a>
        <a class="waves-effect waves-light btn grey">Cancel</a>
      </div>

      <!--
      <div class="p-fluid">
        <div class="p-field">
          <label for="inputtext">Name</label>
          <InputText id="inputtext" type="text" v-model="formData.name" />
        </div>

        <div class="p-field">
          <label for="inputtext">Role</label>
          <InputText id="inputtext" type="text" v-model="formData.role" />
        </div>

        <div class="p-field">
          <label for="inputtext">Company</label>
          <InputText id="inputtext" type="text" v-model="formData.company" />
        </div>

        <div class="p-field">
          <label for="inputtext">Street</label>
          <InputText id="inputtext" type="text" v-model="formData.street" />
        </div>

        <div class="p-field suite">
          <label for="inputtext">Suite</label>
          <InputText id="inputtext" type="text" v-model="formData.suite" />
        </div>

        <div class="p-field city">
          <label for="inputtext">City</label>
          <InputText id="inputtext" type="text" v-model="formData.city" />
        </div>

        <div class="p-field state">
          <label for="inputtext">State</label>
          <InputText id="inputtext" type="text" v-model="formData.state" />
        </div>

        <div class="p-field zip">
          <label for="inputtext">Zip</label>
          <InputMask mask="99999" v-model="formData.zip" placeholder="99999" />
        </div>

        <div class="p-field">
          <label for="inputtext">Phone</label>
          <InputMask mask="(999) 999-9999" v-model="formData.phone" placeholder="(999) 999-9999" />
        </div>
      </div>
      <div class="form-footer">
        <Button label="Save" class="btn-submit p-button-raised" @click="save"/>
      </div>
      -->
    </form>
  </div>
</template>

<script>

export default {
  name: 'contact-form',

  components: {
  },

  props: {
    contactData: {
      type: Object,
      default: () => ({})
    }
  },

  emits: ['save'],

  data() {
    return {
      formData: {}
    }
  },

  created() {
    this.formData = this.contactData
  },

  methods: {
    save() {
      if (!this.formData.id) {
        this.formData.id = Date.now().toString(26)
      }
      this.$emit('save', this.formData)
    }
  }
}
</script>

<style lang="scss" scoped>

.contact-form {
  //padding: 1rem;
}

h2 {
  font-size: 1.5rem;
}

.form {
  .input-field {
    &.city {
      @extend .inline;
      width: 60%;
      margin-right: 5%;
    }

    &.state {
      @extend .inline;
      width: 10%;
      margin-right: 5%;
    }

    &.zip {
      @extend .inline;
      width: 20%;
    }
  }

  &-footer {
    text-align: center;

    .btn {
      width: 96px;
      margin: auto .5rem;
    }
  }
}

</style>