<template>
  <d2-container>
    <template slot="header">记录详情</template>
    <div>
      <el-form label-position="left" label-width="120px" ref="form">
        <el-form-item label="预约人">
          <el-input readonly v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="预约实验室">
          <el-input readonly v-model="form.lab_id"></el-input>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-input readonly v-model="form.created_at"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input readonly v-model="form.mobile"></el-input>
        </el-form-item>
        <el-form-item label="人数">
          <el-input readonly v-model="form.user_num"></el-input>
        </el-form-item>
        <el-form-item label="项目名称">
          <el-input v-model="form.content"></el-input>
        </el-form-item>
        <el-form-item label="项目说明">
          <el-input v-model="form.explain"></el-input>
        </el-form-item>
        <el-form-item label="项目类型">
          <el-input v-model="form.opentype_id"></el-input>
        </el-form-item>
        <el-form-item label="指导教师">
          <el-input v-model="form.guide_teacher"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.remarks"></el-input>
        </el-form-item>
        <el-form-item label="是否需要消耗品">
          <el-select placeholder="是否需要消耗品" v-model="form.expend">
            <el-option label="需要" value="1"></el-option>
            <el-option label="不需要" value="0"></el-option>
          </el-select>
        </el-form-item>

        <span>预约记录</span>
        <d2-crud
          :columns="columns"
          :data="records"
          :rowHandle="rowHandle"
          @cell-data-change="handleCellDataChange"
          @row-remove="handleRowRemove"
        />

        <el-form-item>
          <el-button @click="onSubmit" type="primary">更新</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <template slot="footer"></template>
  </d2-container>
</template>

<script>
import { getReserveDetail, updateReserveDetail } from '@/api/lab'

export default {
  data() {
    return {
      data: {},
      form: [],
      records: [],
      columns: [
        {
          title: '日期',
          key: 'day',
          component: {
            name: 'el-date-picker',
            size: 'small'
          }
        },
        {
          title: '时间',
          key: 'time',
          width: '580',
          component: {
            name: 'el-checkbox',
            options: [
              { value: 1, label: '1-2' },
              { value: 2, label: '3-4' },
              { value: 3, label: '5-6' },
              { value: 4, label: '7-8' },
              { value: 5, label: '9-10' },
              { value: 6, label: '11-12' }
            ]
          }
        }
      ],
      rowHandle: {
        columnHeader: '操作',
        remove: {
          icon: 'el-icon-delete',
          size: 'small',
          fixed: 'right',
          confirm: true
        }
      }
    }
  },
  created() {
    getReserveDetail(this.$route.params.recordid).then(res => {
      this.form = res
      for (const key in res.records) {
        this.records.push({ day: key, time: res.records[key] })
      }
    })
  },
  methods: {
    handleCellDataChange(row) {
      console.log(row)
      this.records[row.rowIndex] = row.row
    },
    onSubmit() {
      this.form.records = {}
      this.records.forEach(element => {
        this.form.records[element.day] = element.time
      })
      console.log(this.form)
      setTimeout(() => {
        updateReserveDetail(this.form.id, this.form).then(res => {
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
    handleRowRemove({ index, row }) {
      this.records.splice(index, 1)
    }
  }
}
</script>
