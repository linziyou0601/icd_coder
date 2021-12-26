<template>
  <div>
    <!-- Modal主題 -->
    <b-modal
      v-model="show"
      hide-header
      hide-footer
      centered
    >
      <b-row>
        <b-col class="text-center py-5">
          <div class="dialog-title my-1">選擇病摘</div>
          <b-list-group>
            <b-list-group-item
              v-for="(diagKey, index) in diagnosesKey"
              :key="index"
              class="dialog-content"
              button
              @click="chooseDiag(diagKey)"
            >
              {{ diagKey }}
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  props: ['diagnosesKey'],
  computed: {
    ...mapGetters(['diagnosisSelDialogShow']),
    show: {
      get() {
        return this.diagnosisSelDialogShow
      },
      set(_) {
        this.closeDiagnosisSelDialog()
      },
    },
  },
  methods: {
    ...mapMutations(['closeDiagnosisSelDialog']),
    chooseDiag(diagKey) {
      this.$parent.chooseDiag(diagKey)
    }
  },
}
</script>

<style scoped>
.dialog-title {
  color: var(--kBlack);
  font-size: var(--dialogTitle);
  font-weight: 700;
}
.dialog-content {
  color: var(--kLightBlack);
  font-size: var(--dialogContent);
  font-weight: 500;
}
</style>