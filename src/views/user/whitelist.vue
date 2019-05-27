<template>
  <d2-container>
    <template slot="header">白名单列表</template>
    <div>
      <d2-crud
        :columns="columns"
        :data="data"
        :rowHandle="rowHandle"
        @row-remove="handleRowRemove"
        ref="d2Crud"
      ></d2-crud>
    </div>
    <template slot="footer"></template>
  </d2-container>
</template>

<script>
import { getAllWhiteList, deleteWhiteList } from '@/api/user'

export default {
  data() {
    return {
      columns: [
        {
          title: '#',
          key: 'id',
          width: '50'
        },
        {
          title: 'uid',
          key: 'uid',
          width: '180'
        },
        {
          title: '加入时间',
          key: 'created_at',
          width: '200'
        }
      ],
      data: [],
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
  created() {},
  mounted() {
    getAllWhiteList().then(res => {
      this.data = res
    })
  },
  methods: {
    handleRowRemove({ index, row }, done) {
      setTimeout(() => {
        deleteWhiteList(row.uid).then(res => {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          done()
        })
      }, 300)
    }
  }
}
</script>
