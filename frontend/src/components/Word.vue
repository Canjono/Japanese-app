<template>
  <div class="word">
    <b-form @submit="onSubmit">
      <b-form-group id="nameInputGroup"
                    label="Name:"
                    label-for="nameInput">
        <b-form-input id="nameInput"
                      type="text"
                      v-model="word.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="translationInputGroup"
                    label="Translation:"
                    label-for="translationInput">
        <b-form-input id="translationInput"
                      type="text"
                      v-model="word.translation"
                      required
                      placeholder="Enter translation">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Update</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
    name: 'Word',
    props: {
        word: Object
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            alert(`${this.word.name} was updated`)
        }
    }
}
</script>
