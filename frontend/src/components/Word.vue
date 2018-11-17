<template>
    <div class="word">
        <b-form @submit="onSubmit">
        <b-form-group
            id="nameInputGroup"
            label="Name:"
            label-for="nameInput"
        >
            <b-form-input
                id="nameInput"
                type="text"
                v-model="name"
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
                v-model="translation"
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
                v-model="grammar"
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
                v-model="story"
                placeholder="Enter story"
                :rows="5"
            >
            </b-form-textarea>
        </b-form-group>
        <b-button type="submit" variant="secondary">Update</b-button>
        <b-button type="reset" variant="secondary" @click="onReset">Delete</b-button>
        </b-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Word',
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
            console.log(`${this.word.name} was updated`)
            alert(`${this.word.name} was updated`)
        },
        onReset(evt) {
            evt.preventDefault()
            console.log('deleting')
        }
    }
}
</script>
