<template>
  <div class="contact">
    <div class="contact__avatar">
      <img :src="avatar" :alt="contact.name"/>
      <div class="role">{{ contact.role }}</div>
    </div>
    <div class="contact__profile">
      <div class="contact__profile-name">{{ contact.name }}</div>
      <div class="contact__profile-location">
        <span class="icon icon-location"></span>
        {{contact.location}}
      </div>
      <div class="contact__profile-company">{{ contact.company }}</div>
      <div class="contact__profile-street">{{ contact.street }}, {{ contact.suite }}</div>
      <div class="contact__profile-city">{{ contact.city }}, {{ contact.state }} {{ contact.zip }}</div>
      <div class="contact__profile-phone">P: {{ contact.phone }}</div>
    </div>
    <div class="controls">
      <a href="#" class="icon icon-edit" @click.prevent="editContact(contact)"></a>
      <a href="#" class="icon icon-delete" @click.prevent="$emit('remove', contact.id)"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact-card',

  props: {
    contact: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    avatar() {
      return this.contact.avatar
        ? require(`@/assets/${this.contact.avatar}`)
        : require('@/assets/default.png')
    }
  },

  methods: {
    editContact(contact) {
      this.$emit('edit', contact);
    }
  },
}
</script>

<style lang="scss" scoped>
.contact {
  @extend .base-card;

  font-size: .875rem;
  color: #404040;
  background: #fff;
  border: 1px solid #e0e0e0;

  &__avatar {
    text-align: center;
    margin-right: 1.5rem;

    img {
      border-radius: 50%;
      width: 128px;
      height: 128px;
    }
  }

  &__profile {
    line-height: 1.4;

    &-name {
      font-weight: bold;
      margin-bottom: .75rem;
    }

    &-location {
      margin-bottom: .75rem;

      .icon-location {
        background: url(../assets/sprite-icone.png) no-repeat -24px -72px;
      }
    }

    &-company {
      font-weight: bold;
    }
  }

  .controls {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: .5rem .5rem;

    .icon-edit {
      background: url(../assets/sprite-icone.png) no-repeat 0px -72px;
    }

    .icon-delete {
      background: url(../assets/sprite-icone.png) no-repeat -456px 0px;
    }
  }
}
</style>