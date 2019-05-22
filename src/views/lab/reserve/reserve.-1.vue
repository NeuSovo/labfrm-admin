<template>
  <d2-container>
    <template slot="header">实验室预约列表 - 不通过</template>
    <span>注意：1.已通过的可以取消，但是已取消的不能再次通过，2.取消的将会删除所有预约信息。预约记录变为不可见</span>
    <d2-crud
      :columns="columns"
      :data="data"
      :rowHandle="rowHandle"
      @custom-emit-1="Detail"
      @custom-emit-2="Pass"
      @custom-emit-3="Reject"
      ref="d2Crud"
    />
    <template slot="footer"></template>
  </d2-container>
</template>

<script>
import { getAllReserve, reviewReserve } from '@/api/lab'

export default {
  data() {
    return {
      columns: [
        {
          title: '#',
          key: 'id',
          width: '60'
        },
        {
          title: '创建时间',
          key: 'created_at',
          width: '200'
        },
        {
          title: '状态',
          key: 'status',
          width: '70',
          formatter: this.s2text,
          filters: [
            { text: '通过', value: 1 },
            { text: '待审核', value: 0 },
            { text: '不通过', value: -1 }
          ],
          filterMethod(value, row) {
            return row.status === value
          },
          filterPlacement: 'bottom-end'
        },
        {
          title: '实验室',
          key: 'lab_id',
          width: '180'
        },
        {
          title: '用户',
          key: 'uid',
          width: '70'
        },
        {
          title: '联系方式',
          key: 'mobile',
          width: '100'
        },
        {
          title: '人数',
          key: 'user_num',
          width: '50'
        }
      ],
      data: [],
      rowHandle: {
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
  mounted() {
    getAllReserve(-1).then(res => {
      this.data = res
    })
  },
  methods: {
    s2text(row, cloumn, cellvalue, index) {
      if (cellvalue == 0) {
        return '待审核'
      } else if (cellvalue == 1) {
        return '通过'
      } else {
        return '不通过'
      }
    },
    Detail({ index, row }) {
      this.$router.push({ name: '预约记录详情', params: { recordid: row.id } })
    },
    Pass({ index, row }) {
      if (row.status == -1) {
        this.$message({
          message: '已取消的预约记录不能审核通过啦',
          type: 'warnning'
        })
        return
      }
      if (row.status == 1) {
        this.$message({
          message: '审核成功',
          type: 'success'
        })
        return
      }
      setTimeout(() => {
        reviewReserve(row.id, 1).then(res => {
          this.$message({
            message: '审核成功',
            type: 'success'
          })
          row.status = 1
          done()
        })
      }, 300)
    },
    Reject({ index, row }) {
      if (row.status == -1) {
        this.$message({
          message: '取消成功',
          type: 'success'
        })
        return
      }
      setTimeout(() => {
        reviewReserve(row.id, -1).then(res => {
          this.$message({
            message: '取消成功',
            type: 'success'
          })
          row.status = -1
          done()
        })
      }, 300)
    }
  }
}
</script>