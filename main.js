const { createApp, ref, computed, reactive } = Vue;

const app = createApp({
    setup() {
        const cart = ref([]);
        const premium = ref(false);
        
        function updateCart(id) {
            const itemInCart = cart.value.find(item => item[id] > 0);
            if (!itemInCart) {
                cart.value.push({[id]: 1});
            } else {
                itemInCart[id]++;
            }
        };
        function deleteCart(id) {
            const itemInCart = cart.value.find(item => item[id] > 0);
            if (itemInCart) {
                itemInCart[id]--;
            }
        }

        return {
            cart,
            premium,
            updateCart,
            deleteCart
        }
    }
});

app.component('product-display', productDisplay);
app.component('product-detail', productDetail);
app.component('review-form', reviewForm);
app.component('review-list', reviewList);
app.mount('#app');