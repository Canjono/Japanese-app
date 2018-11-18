<template>
    <div class="memory-palace">
        <b-form @submit="onSubmit">
        <b-form-group
            id="nameInputGroup"
            label="Name:"
            label-for="nameInput"
        >
            <b-form-input
                id="nameInput"
                type="text"
                v-model="memoryPalace.name"
                required
                placeholder="Enter name"
            >
            </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="secondary">Update</b-button>
        <b-button type="button" variant="secondary" @click="onDeletePalace">Delete</b-button>
        </b-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'MemoryPalace',
    props: {
        memoryPalace: Object
    },
    methods: {
        ...mapActions(['deleteMemoryPalace']),
        onSubmit(evt) {
            evt.preventDefault()
            console.log('Updating')
        },
        onDeletePalace(evt) {
            this.deleteMemoryPalace(this.memoryPalace.id)
        }
    }
}
</script>
