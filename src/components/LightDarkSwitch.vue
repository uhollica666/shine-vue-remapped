<template>
  <div class="form-check form-switch">
  <input class="form-check-input light-dark-swtch" type="checkbox" role="switch" id="flexSwitchCheckDefault" @click="changeTheme">
  <label class="form-check-label" for="flexSwitchCheckDefault">🌘</label>
</div>
</template>

<script>
export default {
    name: 'LightDarkSwitch',
    methods: {
        changeTheme() {
            console.log('am changing theme');
        },
    },

}
</script>

<style>
.light-dark-swtch{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.light-dark-swtch::before{
    content: '☀️';
    position: absolute;
    left: -2rem;
    padding:0;
}

</style>