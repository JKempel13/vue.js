Vue.component ('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:`
     <div class="product">

        <div class="product-image">
            <img v-on:click="reverseBrand" v-bind:src="image" alt="logo">
        </div>

        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else :class="{ outOfStock: !inStock }">Out Of Stock</p>
            <p>{{ sale }}</p>
            <p>Shipping: {{ shipping }}</p>
            <h5 class="details">Details:</h5>
            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>
            <h5 class="sizes">Sizes:</h5>
            <ul>
                <li v-for="size in sizes">{{ size }}</li>
            </ul>

            <p>Variations:</p>

            <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box" :style="{ backgroundColor: variant.variantColor }" @mouseover="updateProduct(index)">
            </div>

            <p v-else-if="inventory <= 10 && inventory > 0">Almost Sold Out!</p>

            <button v-bind:title="message" v-on:click="addToCart" :disabled="!inStock"
                    :class="{ disabledButton: !inStock }">Add to Cart</button>
            <button v-on:click="removeFromCart">Remove from Cart</button>

            <div class="cart">
                <p>Cart({{cart}})</p>
            </div>
            <div>
                <a :href="link" target="_blank">View More Products Like This</a>
            </div>
     </div>

    </div>
    `,
    data() {
        return {
            brand: 'Jason\'s Brand',
            product: 'Socks',
            description: 'The softest material known to man',
            message: 'You loaded this page on ' + new Date().toLocaleString(),
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
        }
    },

    methods: {
        addToCart: function() {
            this.cart += 1
        },
        updateProduct: function(index) {
            this.selectedVariant = index;
            console.log(index)
        },
        removeFromCart: function () {
            this.cart -= 1
        },
        reverseBrand: function () {
            this.brand = this.brand.split('').reverse().join('')
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
        },
        shipping () {
            if (this.premium) {
                return "Free"
            }
            return 2.99
        }
    }
});


let app = new Vue({
    el: '#app',
    data: {
        premium: true
    }
});
