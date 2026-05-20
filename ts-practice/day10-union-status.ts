/*
 * @Description:订单状态、审批状态、用户状态。
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-20 12:28:53
 */

// 1.订单状态
type OrderStatus = "pending" | "paid" | "shipped" | "cancelled";
// 2.审批状态
type ApprovalStatus = "draft" | "reviewing" | "approved" | "rejected";
// 3.用户状态
type UserStatus = "active" | "disabled" | "pending";

// 订单状态文案映射
const orderStatusText: Record<OrderStatus, string> = {
  pending: "待支付",
  paid: "已支付",
  shipped: "已发货",
  cancelled: "已取消",
};

// 订单状态颜色映射
const orderStatusColor: Record<OrderStatus, string> = {
  pending: "orange",
  paid: "green",
  shipped: "blue",
  cancelled: "gray",
};

function getOrderStatusText(status: OrderStatus) {
  return orderStatusText[status];
}

function getOrderStatusColor(status: OrderStatus) {
  return orderStatusColor[status];
}

console.log(getOrderStatusText("pending"));
console.log(getOrderStatusColor("paid"));

// 审批状态文案映射
const approvalStatusText: Record<ApprovalStatus, string> = {
  draft: "草稿",
  reviewing: "审核中",
  approved: "已通过",
  rejected: "已拒绝",
};

// 审批状态颜色映射
const approvalStatusColor: Record<ApprovalStatus, string> = {
  draft: "gray",
  reviewing: "blue",
  approved: "green",
  rejected: "red",
};

function getApprovalStatusText(status: ApprovalStatus) {
  return approvalStatusText[status];
}
function getApprovalStatusColor(status: ApprovalStatus) {
  return approvalStatusColor[status];
}
console.log(getApprovalStatusColor("reviewing"));
console.log(getApprovalStatusText("approved"));

type Order = {
  id: number;
  orderNo: string;
  status: OrderStatus;
};

const order: Order = {
  id: 1,
  orderNo: "ORD-001",
  status: "pending",
};

function printOrder(order: Order) {
  console.log(`订单号：${order.orderNo}`);
  console.log(`状态：${getOrderStatusText(order.status)}`);
  console.log(`颜色：${getOrderStatusColor(order.status)}`);
}
printOrder(order);

// 用户状态文案映射
const userStatusText: Record<UserStatus, string> = {
  active: "启用",
  disabled: "禁用",
  pending: "待审核",
};
// 用户状态颜色映射
const userStatusColor: Record<UserStatus, string> = {
  active: "green",
  disabled: "red",
  pending: "orange",
};
function getUserStatusText(status: UserStatus) {
  return userStatusText[status];
}
function getUserStatusColor(status: UserStatus) {
  return userStatusColor[status];
}
console.log(getUserStatusText("active"));
console.log(getUserStatusColor("disabled"));

// 可辨识联合类型
type SubmitResult =
  | {
      type: "success";
      orderId: number;
    }
  | {
      type: "error";
      message: string;
    };

function handleSubmitResult(result: SubmitResult) {
  if (result.type === "success") {
    console.log(`提交成功，订单 ID：${result.orderId}`);
  } else {
    console.log(`提交失败：${result.message}`);
  }
}

handleSubmitResult({
  type: "success",
  orderId: 1001,
});

handleSubmitResult({
  type: "error",
  message: "库存不足",
});
