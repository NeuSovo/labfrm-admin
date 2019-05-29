<template>
  <d2-container>
    <template slot="header">白名单列表</template>
    <div>
      <d2-crud
        :add-template="addTemplate"
        :columns="columns"
        :data="data"
        :edit-template="editTemplate"
        :rowHandle="rowHandle"
        @dialog-cancel="handleDialogCancel"
        @row-add="handleRowAdd"
        @row-edit="handleRowEdit"
        @row-remove="handleRowRemove"
        ref="d2Crud"
        add-title="新增信息"
        edit-title="修改信息"
      >
        <el-button @click="addRow" slot="header" style="margin-bottom: 5px">新增</el-button>
      </d2-crud>
    </div>
    <template slot="footer"></template>
  </d2-container>
</template>

<script>
import {
  getAllStuInfo,
  addStuInfo,
  updateUser,
  removeStuInfo,
  updateStuInfo
} from "@/api/user";

export default {
  data() {
    return {
      columns: [
        {
          title: "学号",
          key: "stu_id",
          width: "200"
        },
        {
          title: "名字",
          key: "stu_name",
          width: "200"
        },
        {
          title: "所在系",
          key: "stu_department",
          width: "200"
        },
        {
          title: "是否绑定微信",
          key: "uid",
          width: "180",
          formatter: this.isbind
        }
      ],
      data: [],
      rowHandle: {
        columnHeader: "操作",
        remove: {
          icon: "el-icon-delete",
          size: "small",
          fixed: "right",
          confirm: true
        },
        edit: {
          icon: "el-icon-edit",
          text: "编辑",
          size: "small"
        }
      },
      addTemplate: {
        stu_id: {
          title: "学号"
        },
        stu_name: {
          title: "姓名"
        },
        stu_department: {
          title: "系部"
        }
      },
      editTemplate: {
        stu_name: {
          title: "姓名"
        },
        stu_department: {
          title: "系部"
        }
      },
      formOptions: {
        labelWidth: "100px",
        labelPosition: "left",
        saveLoading: false
      }
    };
  },
  mounted() {
    getAllStuInfo().then(res => {
      this.data = res;
    });
  },
  methods: {
    handleRowRemove({ index, row }, done) {
      setTimeout(() => {
        removeStuInfo(row).then(res => {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          done();
        });
      }, 300);
    },
    isbind(row, cloumn, cellvalue, index) {
      if (cellvalue == 0) {
        return "否";
      } else {
        return "是";
      }
    },
    handleRowAdd(row, done) {
      this.formOptions.saveLoading = true;
      setTimeout(() => {
        addStuInfo(row).then(res => {
          this.$message({
            message: "添加成功",
            type: "success"
          });
          done(res);
        });
        this.formOptions.saveLoading = false;
      }, 300);
    },
    handleRowEdit(row, done) {
      this.formOptions.saveLoading = true;
      setTimeout(() => {
        updateStuInfo(row.row).then(res => {
          this.$message({
            message: "更新成功",
            type: "success"
          });
          done(res);
        });
        this.formOptions.saveLoading = false;
      }, 300);
    },
    addRow() {
      this.$refs.d2Crud.showDialog({
        mode: "add"
      });
    },
    handleDialogCancel(done) {
      this.$message({
        message: "取消保存",
        type: "warning"
      });
      done();
    }
  }
};
</script>
