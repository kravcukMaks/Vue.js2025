<script setup lang="ts">
import { useProductsStore } from '@/stores/productsStore'
import { useI18n } from 'vue-i18n'

const store = useProductsStore()
const { t } = useI18n()
</script>

<template>
  <section class="card">
    <h1>{{ t('products.cart') }}</h1>

    <div v-if="store.cart.length === 0">
      {{ t('cart.empty') }}
    </div>

    <ul v-else>
      <li v-for="item in store.cart" :key="item.id" class="item">
        {{ item.name }} — {{ item.qty }} × {{ item.price }} ₴
        <button @click="store.removeFromCart(item.id)">X</button>
      </li>
    </ul>

    <div v-if="store.cart.length > 0">
      <p>{{ t('products.totalItems') }}: {{ store.totalItems }}</p>
      <p>{{ t('products.totalPrice') }}: {{ store.totalPrice }} ₴</p>
    </div>
  </section>
</template>

<style>
.item {
  display: flex;
  justify-content: space-between;
  width: 350px;
  margin-bottom: 5px;
}
</style>
