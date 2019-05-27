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

      <el-form-item label="上传实验室图片">
        <el-upload
          :action="action"
          :file-list="fileList"
          :headers="headers"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          class="upload-demo"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
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
import { getLabDetail, updateLabDetail, deleteLabDetailImage } from '@/api/lab'
import { VueEditor } from 'vue2-editor'
import util from '@/libs/util'

export default {
  components: {
    VueEditor
  },
  data() {
    return {
      form: [],
      action: '',
      headers: {},
      fileList: []
    }
  },
  created() {
    getLabDetail(this.$route.params.labid).then(res => {
      this.form = res
      this.action +=
        process.env.VUE_APP_API +
        'admin/lab/detail/image/add/' +
        this.form.lab_id
      this.headers = { Authorization: util.cookies.get('token') }
      this.form.detail.images.forEach(element => {
        this.fileList.push({
          name: element,
          url: process.env.VUE_APP_MEDIA_API + element
        })
      })
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
    },
    handleRemove(file, fileList) {
      deleteLabDetailImage(this.form.lab_id, { path: file.name }).then(
        res => {}
      )
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    }
  }
}
</script>

<style>
</style>
