<template>
    <div class="vcs">
        <div class="vcs-inner">
            <div class="vcs-items">
                <div v-for="n in 9" :key="n.id" class="vcs-item">
                    <div class="test">
                        {{ n }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
  body {
    margin: 0;
  }

  .vcs {
  }

  .vcs-inner {
    overflow: hidden;
  }

  .vcs-items {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 33.3334% 33.3334% 33.3334%;
  }

  .vcs-item {
    grid-row-start: 1;
  }

  .test {
  }
</style>
