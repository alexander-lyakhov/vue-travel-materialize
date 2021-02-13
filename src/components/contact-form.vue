<template>
  <div class="contact-form modal-content">
    <h2 v-if="formData.id">Edit contact</h2>
    <h2 v-else>Add new contact</h2>

    <img class="avatar" :src="avatar" :alt="formData.name" v-cloak/>

    <form ref="form" class="form" @submit.prevent="save">
      <div class="row">
        <div class="input-field">
          <input id="name" type="text" class="validate" required v-model="formData.name">
          <label for="name" class="active">Name</label>
          <span class="helper-text" data-error="Name is required"></span>
        </div>
      </div>

      <div class="row">
        <div class="input-field">
          <input id="role" type="text" class="validate" required v-model="formData.role">
          <label for="role" class="active">Role</label>
          <span class="helper-text" data-error="Role is required"></span>
        </div>
      </div>

      <div class="row">
        <div class="input-field">
          <input id="company" type="text" class="validate" required v-model="formData.company">
          <label for="company" class="active">Company</label>
          <span class="helper-text" data-error="Company is required"></span>
        </div>
      </div>

      <div class="row">
        <div class="input-field">
          <input id="street" type="text" class="validate" required v-model="formData.street">
          <label for="street" class="active">Street</label>
          <span class="helper-text" data-error="Street is required"></span>
        </div>
      </div>

      <div class="row">
        <div class="input-field">
          <input id="suite" type="text" class="validate" required v-model="formData.suite">
          <label for="suite" class="active">Suite</label>
          <span class="helper-text" data-error="Suite is required"></span>
        </div>
      </div>

      <div class="row">
        <div class="input-field city">
          <input id="city" type="text" class="validate" required v-model="formData.city">
          <label for="city" class="active">City</label>
          <span class="helper-text" data-error="City is required"></span>
        </div>

        <div class="input-field state">
          <input id="state" type="text" class="validate" required v-model="formData.state">
          <label for="state" class="active">State</label>
          <span class="helper-text" data-error="required"></span>
        </div>
      </div>

      <div class="row">
        <div class="input-field zip">
          <masked-input
            id="zip"
            class="validate"
            v-model="formData.zip"
            mask="11111"
            type="text"
            placeholder="99999"
            required
          />
          <label for="zip" class="active">Zip</label>
          <span class="helper-text" data-error="required"></span>
        </div>

        <div class="input-field phone">
          <masked-input
            id="phone"
            class="validate"
            v-model="formData.phone"
            mask="(111) 111-1111"
            type="text"
            placeholder="(999) 99-9999"
            required
          />
          <label for="phone" class="active">Phone</label>
          <span class="helper-text" data-error="Phone is required"></span>
        </div>
      </div>
      <div class="form-footer">
        <button type="submit" class="btn blue">Submit</button>
        <button class="btn grey" @click.prevent="cancel">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import maskedInput from 'vue-masked-input'

export default {
  name: 'contact-form',

  components: {
    maskedInput
  },

  props: {
    contactData: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      formData: {}
    }
  },


  watch: {
    contactData(value) {
      console.log(value)
      this.$nextTick(M.updateTextFields)
      this.formData = {...this.contactData}
    }
  },

  computed: {
    avatar() {
      return this.formData.avatar
        ? require(`@/assets/${this.formData.avatar}`)
        : require('@/assets/default.png')
    }
  },

  methods: {
    save() {
      if (!this.formData.id) {
        this.formData.id = Date.now().toString(26)
      }
      this.$emit('save', this.formData)
    },

    cancel() {
      this.$refs.form.reset()
      this.formData = {}
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>

[v-cloak] {
  display:none;
}

.contact-form {
  padding: 1.5rem;
  position: relative;

  h2 {
    font-size: 1.5rem;
    margin: 0;
    padding-bottom: 1.5rem;
  }

  .avatar {
    background: #099;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    position: absolute;
    top: 1rem;
    right: 1.5rem;
  }
}

.form {
  .row {
    margin-bottom: 10px;
  }

  .input-field {
    &.city {
      @extend .inline;
      width: 85%;
      margin-right: 5%;
    }

    &.state {
      @extend .inline;
      width: 10%;
    }

    &.zip {
      @extend .inline;
      width: 20%;
      margin-right: 5%;
    }

    &.phone {
      @extend .inline;
      width: 75%;
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