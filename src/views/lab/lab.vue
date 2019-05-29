<template>
  <d2-container>
    <template slot="header">实验室列表</template>
    <div>
      <d2-crud
        :add-template="addTemplate"
        :columns="columns"
        :data="data"
        :edit-template="addTemplate"
        :form-options="formOptions"
        :rowHandle="rowHandle"
        @custom-emit-1="handleCustomEvent"
        @dialog-cancel="handleDialogCancel"
        @dialog-open="handleDialogOpen"
        @row-add="handleRowAdd"
        @row-edit="handleRowEdit"
        @row-remove="handleRowRemove"
        add-title="新增实验室"
        edit-title="修改实验室"
        ref="d2Crud"
      >
        <el-button @click="addRow" slot="header" style="margin-bottom: 5px">新增</el-button>
      </d2-crud>
    </div>
    <template slot="footer"></template>
  </d2-container>
</template>

<script>
import { getLabData, getLabType, addLab, updateLab, deleteLab } from '@/api/lab'
export default {
  data() {
    return {
      columns: [
        {
          title: '实验室id',
          key: 'lab_id',
          width: '180'
        },
        {
          title: '实验室名字',
          key: 'lab_name',
          width: '180'
        },
        {
          title: '座位数',
          key: 'seat_num',
          width: '120'
        },
        {
          title: '类型',
          key: 'lab_type_id',
          width: '180',
          formatter: this.type2text
        },
        {
          title: '状态',
          key: 's',
          width: '120',
          formatter: this.s2text
        }
      ],
      data: [],
      type: {},
      type_select: [],
      options: {
        stripe: true
      },
      addTemplate: {
        lab_id: {
          title: '实验室id'
        },
        lab_name: {
          title: '实验室名字'
        },
        seat_num: {
          title: '座位数',
          value: 20,
          component: {
            name: 'el-input-number'
          }
        },
        device_number: {
          title: '门禁设备号',
        },
        s: {
          title: '状态',
          value: 0,
          component: {
            name: 'el-select',
            options: [{ label: '开放', value: 0 }, { label: '关闭', value: 1 }]
          }
        },
        lab_type_id: {
          title: '类型',
          component: {
            name: 'el-select',
            options: []
          }
        }
      },
      formOptions: {
        labelWidth: '100px',
        labelPosition: 'left',
        saveLoading: false
      },
      rowHandle: {
        columnHeader: '操作',
        edit: {
          icon: 'el-icon-edit',
          text: '编辑',
          size: 'small'
        },
        remove: {
          icon: 'el-icon-delete',
          size: 'small',
          fixed: 'right',
          confirm: true
        },
        custom: [
          {
            text: '详情',
            type: 'warning',
            size: 'small',
            emit: 'custom-emit-1'
          }
        ]
      }
    }
  },
  created() {},
  mounted() {
    getLabType().then(res => {
      res.forEach(element => {
        this.type[element.id] = element.name
        this.addTemplate.lab_type_id.component.options.push({
          value: element.id,
          label: element.name
        })
      })
      console.log(1)
    })
    console.log(2)
    getLabData().then(res => {
      this.data = res
      console.log(3)
    })
    console.log(4)
  },
  methods: {
    s2text(row, cloumn, cellvalue, index) {
      if (cellvalue == 0) {
        return '开放'
      } else {
        return '不开放'
      }
    },
    type2text(row, cloumn, cellvalue, index) {
      return this.type[cellvalue]
    },
    handleDialogOpen({ mode }) {
      // this.$message({
      //   message: '打开模态框，模式为：' + mode,
      //   type: 'success'
      // })
    },
    // 普通的新增
    addRow() {
      this.$refs.d2Crud.showDialog({
        mode: 'add'
      })
    },
    handleRowAdd(row, done) {
      this.formOptions.saveLoading = true
      setTimeout(() => {
        console.log(row)
        addLab(row).then(res => {
          this.$message({
            message: '添加成功',
            type: 'success'
          })
          done(res)
        })
        this.formOptions.saveLoading = false
      }, 300)
    },
    handleRowEdit({ index, row }, done) {
      this.formOptions.saveLoading = true
      setTimeout(() => {
        console.log(row)
        updateLab(row.lab_id, row).then(res => {
          this.$message({
            message: '更新成功',
            type: 'success'
          })
          done(res)
        })
        this.formOptions.saveLoading = false
      }, 300)
    },
    handleRowRemove({ index, row }, done) {
      setTimeout(() => {
        deleteLab(row.lab_id).then(res => {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          done()
        })
      }, 300)
    },
    handleDialogCancel(done) {
      this.$message({
        message: '取消保存',
        type: 'warning'
      })
      done()
    },
    handleCustomEvent({ index, row }) {
      this.$router.push({
        name: '实验室介绍',
        params: { labid: row.lab_id }
      })
    }
  }
}
</script>
