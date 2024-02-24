const { createApp, ref } = Vue;

createApp({
    setup() {
        const product = ref('Boots');
        const description = ref('A pair of warm, fuzzy boots');
        const image = ref('./assets/image/socks_green.jpg')
        const linkCamtCmu = ref('https://www.camt.cmu.ac.th/')
        return {
            product, description, image, linkCamtCmu
        }
    }
}).mount('#app');