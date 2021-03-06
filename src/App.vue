<template>
  <div id="app">
    <div class="grid">
      <contact-card
        v-for="item in contacts"
        :key="item.id"
        :contact="item"
        @edit="editContact"
        @remove="removeContact"
      />
      <div class="contact add-contact" @click="addContact"></div>
    </div>
    <div class="sidenav" ref="sidebar">
      <contact-form
        ref="contact-form"
        :contact-data="selectedContact"
        @save="saveContactForm"
        @close="closeContactForm"
      />
    </div>
  </div>
</template>

<script>

import contactCard from '@/components/contact-card'
import contactForm from '@/components/contact-form'
import contactData from '@/data.js'

import swal from 'sweetalert2'

export default {
  name: 'App',

  components: {
    contactCard,
    contactForm,
  },

  data() {
    return {
      contacts: [...contactData],
      selectedContact: {},
    }
  },

  mounted() {
    M.Sidenav.init(this.$refs.sidebar, {
      onCloseStart: () => this.$refs['contact-form'].cancel()
    })
    this.sidebar = M.Sidenav.getInstance(this.$refs.sidebar)
  },

  beforeDestroy() {
    if (this.sidebar && this.sidebar.destroy) {
      this.sidebar.destroy();
    }
  },

  methods: {
    addContact() {
      this.selectedContact = {}
      this.sidebar.open()
    },

    editContact(contactData) {
      this.selectedContact = {...contactData}
      this.sidebar.open()
    },

    removeContact(id) {
      swal.fire({
        title: 'Delete contact?',
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: `Yes`,
        denyButtonText: `No`,
      })
      .then(res => {
        if (res.isConfirmed) {
          this.contacts = this.contacts.filter(el => el.id !== id)
        }
      })
    },

    saveContactForm(contactData) {
      let contactIndex = this.contacts.findIndex(item => item.id === contactData.id)

      contactIndex !== -1
        ? this.$set(this.contacts, contactIndex, contactData)
        : this.contacts.push(contactData)

      this.closeContactForm()
    },

    closeContactForm() {
      this.sidebar.close()
    }
  }
};
</script>

<style lang="scss" scoped>

.grid {
  display: flex;
  flex-wrap: wrap;
  padding: .5rem;

  @include mobile() {
    flex-direction: column;

    .contact {
      width: auto;
    }
  }
}

.add-contact {
  @extend .base-card;

  background: #c0c0c0;
  border: none;
  cursor: pointer;

  &:after {
    @extend .center-center;

    content: 'Add New';
    font: 2.5rem verdana, arial;
    color: #808080;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    background: #c8c8c8;
  }
}

.sidenav {
  width: 640px;
  padding: 0;

  @include mobile() {
    background: #f0f0f0;
    width: 100%;
  }
}
</style>
