<template>
    <div class="add-word">
        <b-modal id="addWordModal" hide-footer centered title="Add a new word">
            <b-form>
                <b-form-group
                    id="nameInputGroup"
                    label="Name:"
                    label-for="nameInput"
                >
                    <b-form-input
                        id="nameInput"
                        v-model="word.name"
                        type="text"
                        required
                        placeholder="Enter name"
                    >
                    </b-form-input>
                </b-form-group>
                <b-form-group
                    id="translationInputGroup"
                    label="Translation:"
                    label-for="translationInput"
                >
                    <b-form-input
                        id="translationInput"
                        v-model="word.translation"
                        type="text"
                        required
                        placeholder="Enter translation"
                    >
                    </b-form-input>
                </b-form-group>
                <b-form-group
                    id="grammarInputGroup"
                    label="Grammar:"
                    label-for="grammarInput"
                >
                    <b-form-input
                        id="grammarInput"
                        v-model="word.grammar"
                        type="text"
                        placeholder="Enter grammar"
                    >
                    </b-form-input>
                </b-form-group>
                <b-form-group
                    id="storyInputGroup"
                    label="Story:"
                    label-for="storyInput"
                >
                    <b-form-textarea
                        id="storyInput"
                        v-model="word.story"
                        placeholder="Enter story"
                        :rows="5"
                    >
                    </b-form-textarea>
                </b-form-group>
                <b-container class="add-or-reset">
                    <b-row align-h="end">
                        <b-col cols="2">
                            <b-button type="reset" variant="secondary" @click="onReset">Reset</b-button>
                        </b-col>
                        <b-col cols="2">
                            <b-button type="submit" variant="primary" @click="onSubmit">Add</b-button>
                        </b-col>
                    </b-row>
                </b-container>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'AddWord',
    data() {
        return {
            word: {
                name: '',
                translation: '',
                grammar: '',
                story: ''
            }
        }
    },
    methods: {
        ...mapActions(['addWord']),
        onSubmit(evt) {
            evt.preventDefault()
            this.addWord(this.word)
        },
        onReset(evt) {
            evt.preventDefault()
            this.word.name = ''
            this.word.translation = ''
            this.word.grammar = ''
            this.word.story = ''
        }
    }
}
</script>
