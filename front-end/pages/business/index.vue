<script setup lang="ts">
import { useInfoPrint } from '../../store/infoPrint';

const { clearStorage } = useInfoPrint();

const router = useRouter();

router.afterEach(({}, from) => {
  if(from.name === 'business') {
    clearStorage();
  };
})
</script>

<template>
 <div>
  <Document />
 </div>
</template>
