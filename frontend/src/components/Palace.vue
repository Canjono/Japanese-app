<template>
    <div class="palace">
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
        </b-form>
    </div>
</template>

<script>
export default {
    name: 'Palace',
    props: {
        memoryPalace: Object
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            console.log('Updating')
        }
    }
}
</script>
