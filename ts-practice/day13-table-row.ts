/*
 * @Description:表格 Row 类型
表格 row 是列表里每一行数据的类型。
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-23 12:15:14
 */

interface CustomerRow {
  id: number;
  name: string;
  phone: string;
  level: "normal" | "vip";
  createdAt: string;
  status: 0 | 1;
}

const tableData: CustomerRow[] = [];

function handleEdit(row: CustomerRow) {
  console.log(row.id);
}

function handleDelete(row: CustomerRow) {
  console.log(row.name);
}
/**
 * 表格 Column 类型
表格列配置与数据结构同步。
 */
interface TableColumn<T> {
  label: string;
  prop: keyof T;
  width?: number;
  fixed?: "left" | "right";
}
const columns: TableColumn<CustomerRow>[] = [
  { label: "客户名称", prop: "name" },
  { label: "手机号", prop: "phone" },
  { label: "创建时间", prop: "createdAt" },
];

// 在表格文件中补 OrderRow

interface OrderRow {
  id: ID;
  orderNo: string;
  customerName: string;
  status: OrderStatus;
  amount: number;
  createdAt: string;
}

const orderTableData: OrderRow[] = [];

function handleEditOrder(row: OrderRow) {
  console.log(row.id);
}

function handleDeleteOrder(row: OrderRow) {
  console.log(row.orderNo);
}
/**
 * 表格 Column 类型
表格列配置与数据结构同步。
 */
interface TableColumn<T> {
  label: string;
  prop: keyof T;
  width?: number;
  fixed?: "left" | "right";
}

const orderColumns: TableColumn<OrderRow>[] = [
  { label: "订单编号", prop: "orderNo" },
  { label: "客户名称", prop: "customerName" },
  { label: "订单状态", prop: "status" },
  { label: "金额", prop: "amount" },
  { label: "创建时间", prop: "createdAt" },
];
