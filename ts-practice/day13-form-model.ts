/*
 * @Description: 表单 Model 类型
表单 model 是页面上真正绑定的数据，不一定等于接口参数。
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-23 12:13:25
 */
interface UserFormModel {
  username: string;
  password: string;
  confirmPassword: string;
  phone: string;
  roleIds: number[];
  enabled: boolean;
}
/**
 * 接口参数可能是： */
interface CreateUserParams {
  username: string;
  password: string;
  phone: string;
  roleIds: number[];
  status: 0 | 1;
}

const form: UserFormModel = {
  username: "",
  password: "",
  confirmPassword: "",
  phone: "",
  roleIds: [],
  enabled: true,
};

// 在表单文件中补 OrderFormModel
type ID = string | number;
type OrderStatus = "pending" | "processing" | "completed" | "cancelled";
interface OrderFormModel {
  id: ID;
  orderNo: string;
  customerName: string;
  status: OrderStatus;
  amount: number;
  createdAt: string;
}
/**
 * 接口参数可能是： */
interface CreateOrderParams {
  id: ID;
  orderNo: string;
  customerName: string;
  orderStatus: OrderStatus;
  amount: number;
}

const orderForm: OrderFormModel = {
  id: 3,
  orderNo: "10003",
  customerName: "中远运",
  status: "completed",
  amount: 1000204000,
  createdAt: "2026-05-01",
};
// 在表单文件中补 CustomerFormModel
type CustomerLevel = "vip" | "normal" | "trial";
interface CustomerFormModel {
  id: ID;
  name: string;
  level: CustomerLevel;
  phone: string;
  industry: string;
  createdAt: string;
}
interface CreateCustomerParams {
  id: ID;
  name: string;
  level: CustomerLevel;
}
const customerForm: CustomerFormModel = {
  id: 3,
  name: "千岛湖风景区",
  level: "trial",
  phone: "112",
  industry: "F&B industry",
  createdAt: "1999-8-23",
};
