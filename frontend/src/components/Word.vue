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
      <b-form-group id="grammarInputGroup"
                    label="Grammar:"
                    label-for="grammarInput">
        <b-form-input id="grammarInput"
                      type="text"
                      v-model="word.grammar"
                      placeholder="Enter grammar">
        </b-form-input>
      </b-form-group>
      <b-form-group id="storyInputGroup"
                    label="Story:"
                    label-for="storyInput">
        <b-form-textarea id="storyInput"
                      v-model="word.story"
                      placeholder="Enter story"
                      :rows="5">
        </b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="secondary">Update</b-button>
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
