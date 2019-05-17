<template>
  <d2-container>
    <template slot="header">实验室预约列表</template>
    <d2-crud
      :columns="columns"
      :data="data"
      :rowHandle="rowHandle"
      @custom-emit-1="handleCustomEvent"
      ref="d2Crud"
    />
    <template slot="footer"></template>
  </d2-container>
</template>

<script>
import { getAllReserve } from '@/api/lab'

export default {
  data() {
    return {
      columns: [
        {
          title: 'id',
          key: 'id',
          width: '50'
        },
        {
          title: '创建时间',
          key: 'created_at',
          width: '180'
        },
        {
          title: '状态',
          key: 'status',
          width: '70',
          formatter: this.s2text
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
            text: '自定义按钮',
            type: 'warning',
            size: 'small',
            emit: 'custom-emit-1'
          }
        ]
      }
    }
  },
  mounted() {
    getAllReserve().then(res => {
      this.data = res
    })
    console.log(this.$refs.d2Crud.d2CrudData)
  },
  methods: {
    s2text(row, cloumn, cellvalue, index) {
      if (cellvalue == 0) {
        return '待审核'
      } else {
        return '已通过'
      }
    },
    handleCustomEvent({ index, row }) {
      console.log(row)
    }
  }
}
</script>