<template>
    <div class="createWord">
        <b-modal id="createWordModal" centered title="Create a new word">
            <b-form>
            <b-form-group
                id="nameInputGroup"
                label="Name:"
                label-for="nameInput"
            >
                <b-form-input
                    id="nameInput"
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
                    placeholder="Enter story"
                    :rows="5"
                >
                </b-form-textarea>
            </b-form-group>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'CreateWord',
    props: {
        word: Object
    },
    computed: {
        name: {
            get() {
                return this.word.name
            },
            set(value) {
                const newWord = {
                    ...this.word,
                    name: value
                }
                this.updateWordProperty(newWord)
            }
        },
        translation: {
            get() {
                return this.word.translation
            },
            set(value) {
                const newWord = {
                    ...this.word,
                    translation: value
                }
                this.updateWordProperty(newWord)
            }
        },
        grammar: {
            get() {
                return this.word.grammar
            },
            set(value) {
                const newWord = {
                    ...this.word,
                    grammar: value
                }
                this.updateWordProperty(newWord)
            }
        },
        story: {
            get() {
                return this.word.story
            },
            set(value) {
                const newWord = {
                    ...this.word,
                    story: value
                }
                this.updateWordProperty(newWord)
            }
        }
    },
    methods: {
        ...mapActions(['updateWordProperty']),
        onSubmit(evt) {
            evt.preventDefault()
            alert(`${this.word.name} was created`)
        }
    }
}
</script>
