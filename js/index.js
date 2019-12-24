let app = new Vue({
    el: '#app',
    data: {
        brand: 'Jason\'s Brand',
        product: 'Socks',
        description: 'The softest material known to man',
        selectedVariant: 0,
        link: 'https://www.google.com/search?q=socks&sxsrf=ACYBGNQiaYSe3UvBQiquaMUgVwO9Nep9WA:1576943354764&source=lnms&tbm=isch&sa=X&ved=2ahUKEwizkPfji8fmAhVBa80KHfn-C7cQ_AUoAnoECA8QBA&biw=1680&bih=939&dpr=2',
        details: ["80% Cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "Green",
                variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: "Blue",
                variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
                variantQuantity: 0
            }
        ],
        sizes: ["XS","S","M","L","XL"],
        cart: 0,
        onSale: true
    },
    methods: {
        addToCart: function() {
            this.cart += 1
        },
        updateProduct: function(index) {
            this.selectedVariant = index
            console.log(index)
        },
        removeFromCart: function () {
            this.cart -= 1
        }
    },
    computed: {
        title () {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale () {
            if(this.onSale) {
                return this.brand + ' ' + this.product + ' are now on sale!'
            }
            return this.brand + ' ' + this.product + ' are not currently on sale.'
        }
    }
});