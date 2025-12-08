<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useProductsStore } from '@/stores/productsStore'

const productsStore = useProductsStore()
const { t } = useI18n()
</script>

<template>
  <section class="card">
    <h1>{{ t('products.title') }}</h1>

    <ul>
      <li v-for="p in productsStore.products" :key="p.id" class="product">
        <span>{{ p.name }} — {{ p.price }} ₴</span>
        <button @click="productsStore.addToCart(p.id)">
          {{ t('products.add') }}
        </button>
      </li>
    </ul>

    <hr>
    <h3>{{ t('products.cart') }}</h3>
    <p>{{ t('products.totalItems') }}: {{ productsStore.totalItems }}</p>
    <p>{{ t('products.totalPrice') }}: {{ productsStore.totalPrice }} ₴</p>
  </section>
</template>

<style>
.product {
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  margin-bottom: 10px;
}
</style>
