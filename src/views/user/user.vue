<template>
  <d2-container>
    <template slot="header">用户列表</template>
    <span>注意删除用户会删除所有包括审核通过和未审核的所有预约记录</span>
    <div>
      <d2-crud
        :columns="columns"
        :data="data"
        :rowHandle="rowHandle"
        @cell-data-change="handleCellDataChange"
        @row-remove="handleRowRemove"
        ref="d2Crud"
      ></d2-crud>
    </div>
    <template slot="footer">
      <div class="block">
        <el-pagination
          :page-size="pageSize"
          :page-sizes="[50, 100, 200, 300]"
          :total="pageCount"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
          layout="sizes, prev, pager, next"
        ></el-pagination>
      </div>
    </template>
  </d2-container>
</template>

<script>
import { getAllUser, updateUser, deleteUser } from '@/api/user'

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
          title: '微信id',
          key: 'openid',
          width: '180'
        },
        {
          title: '加入时间',
          key: 'created_at',
          width: '200'
        },
        {
          title: '最后访问',
          key: 'updated_at',
          width: '200'
        },
        {
          title: '角色',
          key: 'role',
          width: '180',
          formatter: this.role2text,
          filters: [{ text: '用户', value: 0 }, { text: '管理员', value: 1 }],
          filterMethod(value, row) {
            return row.role === value
          },
          filterPlacement: 'bottom-end',
          component: {
            name: 'el-select',
            options: [
              {
                value: 0,
                label: '用户'
              },
              {
                value: 1,
                label: '管理员'
              }
            ]
          }
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
      },
      page: 1,
      pageCount: 0,
      pageSize: 50
    }
  },
  created() {},
  mounted() {
    getAllUser(this.page, this.pageSize).then(res => {
      this.data = res.data
      this.pageCount = res.count
    })
  },
  methods: {
    role2text(row, cloumn, cellvalue, index) {
      if (cellvalue == 0) {
        return '用户'
      } else {
        return '管理员'
      }
    },
    handleCellDataChange({ rowIndex, key, value, row }, done) {
      setTimeout(() => {
        updateUser(row.id, row).then(res => {
          this.$message({
            message: '更新成功',
            type: 'success'
          })
          done()
        })
      }, 300)
    },
    handleRowRemove({ index, row }, done) {
      setTimeout(() => {
        deleteUser(row.id).then(res => {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          done()
        })
      }, 300)
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.refreshData()
    },
    handleCurrentChange(val) {
      this.page = val
      this.refreshData()
    },
    refreshData() {
      getAllUser(this.page, this.pageSize).then(res => {
        this.data = res.data
        this.pageCount = res.count
      })
    }
  }
}
</script>
