<template>
  <section class="card">
    <h1>{{ t('products.title') }}</h1>

    <p>Mini Cart Demo using Pinia</p>

    <ul>
      <li
        v-for="product in products"
        :key="product.id"
        style="margin-bottom: 10px"
      >
        {{ product.name }} — {{ product.price }}₴

        <Button
          label="Add to cart"
          @click="addProduct(product)"
          style="margin-left: 10px"
        />
        <Button
          icon="pi pi-copy"
          @click="$copyToClipboard(product.name)"
          rounded
          severity="secondary"
        />
      </li>
    </ul>

    <h3>{{ t('products.cart') }}</h3>

    <ul>
      <li v-for="(item, index) in cart" :key="item.id">
        {{ item.name }} (x{{ item.count }})
        <Button icon="pi pi-trash" text @click="removeProduct(index)" />
      </li>
    </ul>

    <h4>{{ t('products.totalPrice') }}: {{ total }}₴</h4>
  </section>

  <Toast />
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import { useCartStore } from '@/stores/cartStore'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const cartStore = useCartStore()

const products = cartStore.products
const cart = cartStore.cart
const addProduct = cartStore.addProduct
const removeProduct = cartStore.removeProduct
const total = cartStore.total
</script>

<style scoped>
.card {
  padding: 20px;
}
</style>
