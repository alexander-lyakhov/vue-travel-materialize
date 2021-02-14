<template>
  <div class="contact-form modal-content">
    <div class="row">
      <h2 class="col" v-if="formData.id">Edit contact</h2>
      <h2 class="col" v-else>Add new contact</h2>
    </div>

    <img class="avatar" :src="avatar" :alt="formData.name" v-cloak/>

    <form ref="form" class="form" @submit.prevent="save">
      <div class="row">
        <div class="input-field col s12 m12">
          <input id="name" type="text" class="validate" required v-model="formData.name">
          <label for="name" class="active">Name</label>
          <span class="helper-text" data-error="Name is required"></span>
        </div>

        <div class="input-field col s12 m12">
          <input id="role" type="text" class="validate" required v-model="formData.role">
          <label for="role" class="active">Role</label>
          <span class="helper-text" data-error="Role is required"></span>
        </div>

        <div class="input-field col s12 m12">
          <input id="company" type="text" class="validate" required v-model="formData.company">
          <label for="company" class="active">Company</label>
          <span class="helper-text" data-error="Company is required"></span>
        </div>

        <div class="input-field col s12 m12">
          <input id="street" type="text" class="validate" required v-model="formData.street">
          <label for="street" class="active">Street</label>
          <span class="helper-text" data-error="Street is required"></span>
        </div>

        <div class="input-field col s12 m12">
          <input id="suite" type="text" class="validate" required v-model="formData.suite">
          <label for="suite" class="active">Suite</label>
          <span class="helper-text" data-error="Suite is required"></span>
        </div>

        <div class="input-field col s12 m10">
          <input id="city" type="text" class="validate" required v-model="formData.city">
          <label for="city" class="active">City</label>
          <span class="helper-text" data-error="City is required"></span>
        </div>

        <div class="input-field col s12 m2">
          <masked-input
            id="state"
            class="validate"
            v-model="formData.state"
            mask="AA"
            type="text"
            placeholder="AA"
            required
          />
          <label for="state" class="active">State</label>
          <span class="helper-text" data-error="required"></span>
        </div>

        <div class="input-field col s4 m3">
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

        <div class="input-field col s8 m9">
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
  padding: 1rem;
  position: relative;

  h2 {
    font-size: 1.5rem;
    line-height: 2.5;
    margin: 0;
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

  &-footer {
    text-align: center;

    .btn {
      width: 96px;
      margin: auto .5rem;
    }
  }
}

</style>