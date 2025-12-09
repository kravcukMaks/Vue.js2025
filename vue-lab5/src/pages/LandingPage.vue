<template>
  <div class="container">
    <HeaderSection />

    <section id="hero">
      <HeroSection />
    </section>

    <section id="problem">
      <ProblemSection />
    </section>

    <section id="solution">
      <SolutionSection />
    </section>

    <section id="benefits">
      <BenefitsSection />
    </section>

    <section id="howItWorks">
      <HowItWorksSection />
    </section>

    <section id="pricing">
      <PricingSection />
    </section>

    <section id="testimonials">
      <TestimonialsSection />
    </section>

    <section id="faq">
      <FaqSection />
    </section>

    <section id="contact">
      <ContactSection />
    </section>

    <FooterSection />
  </div>

  <Toast />
</template>

<script setup lang="ts">
import HeaderSection from '@/components/HeaderSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import ProblemSection from '@/components/ProblemSection.vue'
import SolutionSection from '@/components/SolutionSection.vue'
import BenefitsSection from '@/components/BenefitsSection.vue'
import HowItWorksSection from '@/components/HowItWorksSection.vue'
import PricingSection from '@/components/PricingSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import FaqSection from '@/components/FaqSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import Toast from 'primevue/toast'
</script>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 16px;
}

section {
  margin-top: 80px;
}

html {
  scroll-behavior: smooth;
}
</style>
