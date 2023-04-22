<template>
  <div>
    <button class="star-button" :class="[size, nom]">
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: string
    nom: any
  }>(),
  {
    size: 'base',
    nom: 'primary'
  }
)
</script>

<style scoped lang="less">
.star-button {
  border: none;
  margin: 0 12px;
  cursor: pointer;
}
.max {
  width: 200px;
  height: 40px;
  line-height: 40px;
  border-radius: 50px;
  padding: 0 24px;
}
.base {
  min-width: 80px;
  height: 36px;
  line-height: 36px;
  border-radius: 24px;
  padding: 0 20px;
}
.small {
  min-width: 72px;
  height: 32px;
  line-height: 32px;
  border-radius: 24px;
  padding: 0 20px;
}

.primary {
  background-color: var(--gray-1);
  color: var(--gray-10);
}
.secondary {
  background-color: var(--gray-10);
  color: var(--gray-1);
  border: 1px solid var(--gray-1);
}
.cprimary {
  background-color: var(--gray-1);
  color: var(--gray-10);
  font-weight: 600;
}
.csecondary {
  background-color: var(--gray-10);
  color: var(--gray-1);
  border: 1px solid var(--gray-1);
}
</style>
