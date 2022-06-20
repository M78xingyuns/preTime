<template>
    <el-table :data="tableData" style="width: 100%" :default-expand-all="true">
        <el-table-column type="expand">
            <template slot-scope="props">
                <div>
                    <el-button>默认按钮</el-button>
                    <el-button type="primary">主要按钮</el-button>
                    <el-button type="success">成功按钮</el-button>
                    <el-button type="info">信息按钮</el-button>
                    <el-button type="warning">警告按钮</el-button>
                    <el-button type="danger">危险按钮</el-button>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="商品 ID" prop="id"> </el-table-column>
        <el-table-column label="商品名称" prop="name"> </el-table-column>
        <el-table-column label="描述" prop="desc"> </el-table-column>
    </el-table>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            tableData: [
                {
                    id: 1,
                    date: "2016-05-02",
                    name: "王小虎",desc:"描述",
                    address: "上海市普陀区金沙江路 1518 弄",
                },
                {
                    id: 2,
                    date: "2016-05-04",
                    name: "王小虎",desc:"描述",
                    address: "上海市普陀区金沙江路 1517 弄",
                },
                {
                    id: 3,
                    date: "2016-05-01",
                    name: "王小虎",desc:"描述",
                    address: "上海市普陀区金沙江路 1519 弄",
                   
                },
                {
                    id: 4,
                    date: "2016-05-03",
                    name: "王小虎",desc:"描述",
                    address: "上海市普陀区金沙江路 1516 弄",
                },
            ],
            
        };
    },
    methods: {
        init() {
            this.$nextTick(() => {
                // particle("box");
            });
        },
    },
    mounted() {
        this.init();
    },
};
</script>
