<template>
    <div class="add-memory_palace">
        <b-modal id="addMemoryPalaceModal" hide-footer centered title="Add a new memory palace">
            <b-form>
                <b-form-group
                    id="nameInputGroup"
                    label="Name:"
                    label-for="nameInput"
                >
                    <b-form-input
                        id="nameInput"
                        v-model="memoryPalace.name"
                        type="text"
                        required
                        placeholder="Enter name"
                    >
                    </b-form-input>
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
    name: 'AddMemoryPalace',
    data() {
        return {
            memoryPalace: {
                name: ''
            }
        }
    },
    methods: {
        ...mapActions(['addMemoryPalace']),
        onSubmit(evt) {
            evt.preventDefault()
            this.addMemoryPalace(this.memoryPalace)
        },
        onReset(evt) {
            evt.preventDefault()
            this.memoryPalace.name = ''
        }
    }
}
</script>
