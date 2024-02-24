const { createApp, ref } = Vue;

createApp({
    setup() {
        const product = ref('Boots');
        const description = ref('A pair of warm, fuzzy boots');
        return {
            product, description
        }
    }
}).mount('#app');