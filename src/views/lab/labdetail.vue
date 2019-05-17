<template>
  <d2-container>
    <template slot="header">实验室详细详情</template>
    <el-form label-position="left" label-width="120px" ref="form">
      <el-form-item label="实验室id">
        <el-input readonly v-model="form.lab_id"></el-input>
      </el-form-item>
      <el-form-item label="实验室名字">
        <el-input readonly v-model="form.lab_name"></el-input>
      </el-form-item>
      <el-form-item label="实验室介绍">
        <vue-editor
          style="min-height: 200px; margin-bottom: 20px;"
          v-if="form.detail"
          v-model="form.detail.context"
        />
      </el-form-item>

      <el-form-item>
        <el-button @click="onSubmit" type="primary">更新</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
    <template slot="footer"></template>
  </d2-container>
</template>

<script>
import { getLabDetail, updateLabDetail } from '@/api/lab'
import { VueEditor } from 'vue2-editor'

export default {
  components: {
    VueEditor
  },
  data() {
    return {
      form: []
    }
  },
  created() {
    getLabDetail(this.$route.params.labid).then(res => {
      this.form = res
    })
  },
  methods: {
    onSubmit() {
      console.log(this.form)
      setTimeout(() => {
        updateLabDetail(this.form.lab_id, {
          context: this.form.detail.context
        }).then(res => {
          this.$message({
            message: '更新成功',
            type: 'success'
          })
        })
      }, 300)
    },
    onCancel() {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
</style>
