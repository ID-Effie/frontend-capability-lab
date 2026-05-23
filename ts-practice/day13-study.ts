/*
 * @Description:
Pinia state / getters / actions 类型
表单 model 类型
表格 row 类型
表格 column 类型认知
部分字段更新：Partial<T>
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-23 11:09:52
 */
// 一、Pinia 类型
// Pinia 里最核心的是把状态、派生状态、操作函数都约束清楚。
/**
 * state 要有完整类型，避免后面状态字段乱加。
getter 最好明确返回值，尤其是复杂计算。
action 的参数和返回值要闭合，比如 Promise<UserInfo>、void、boolean。
登录状态 store 常见字段：token、userInfo、roles、permissions。
 */
import { defineStore } from "pinia";
interface UserInfo {
  id: number;
  name: string;
  roles: string[];
}
interface AuthState {
  token: string;
  userInfo: UserInfo | null;
  permissions: string[];
}
export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    token: "",
    userInfo: null,
    permissions: [],
  }),

  getters: {
    isLogin: (state): boolean => Boolean(state.token),
    roleCount: (state): number => state.userInfo?.roles.length ?? 0,
  },

  actions: {
    setToken(token: string): void {
      this.token = token;
    },
    setUserInfo(userInfo: UserInfo): void {
      this.userInfo = userInfo;
    },
    logout(): void {
      this.token = "";
      this.userInfo = null;
      this.permissions = [];
    },
  },
});

// 二、表单 Model 类型
// 表单 model 是页面上真正绑定的数据，不一定等于接口参数
/**
 * confirmPassword 只存在于前端表单，不应该传给接口。
enabled: boolean 可能要转换成接口里的 status: 0 | 1。
表单字段更偏 UI，接口参数更偏后端契约。
不要无脑把接口类型直接拿来当表单类型。
 */
interface UserFormModel {
  username: string;
  password: string;
  confirmPassword: string;
  phone: string;
  roleIds: number[];
  enabled: boolean;
}
// 接口参数可能是：
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

// 三、表格 Row 类型
// 表格 row 是列表里每一行数据的类型。
/**
 * 表格数据一般是 Row[]。
行点击、编辑、删除、查看详情，都应该接收 row: XxxRow。
Row 类型可以从接口返回数据中抽出来复用。
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
// 行操作时也要带类型：
function handleEdit(row: CustomerRow) {
  console.log(row.id);
}
function handleDelete(row: CustomerRow) {
  console.log(row.name);
}

// 四、表格 Column 类型
// 表格列配置描述的是“怎么展示 row”。
// 基础列类型可以这样理解
interface TableColumn<T> {
  label: string;
  prop: keyof T;
  width?: number;
  fixed?: "left" | "right";
}
// prop: keyof CustomerRow 就表示
// "id" | "name" | "phone" | "level" | "createdAt" | "status";
const column: TableColumn<CustomerRow[]> = [
  { label: "客户名称", prop: "name" },
  { label: "手机号", prop: "phone" },
  { label: "创建时间", prop: "createdAt" },
];

// 五、Partial<T>：部分字段更新
// Partial<T> 会把一个类型里的所有字段变成可选
// Partial<T> 适合“局部更新”。
// 不适合创建数据，因为创建通常要求必填字段。
type UpdateUserInfo = Partial<UserInfo>;
/**等价于
 * interface UpdateUserInfo {
  id?: number
  name?: string
  phone?: string
}
 */
// 如果只有部分字段允许更新，可以配合 Pick 使用。
type UpdateUserParams = Partial<Pick<UserInfo, "name" | "roles">>;
