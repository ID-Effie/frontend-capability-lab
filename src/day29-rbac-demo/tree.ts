/*
 * @Description:
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-06-10 19:26:10
 */
interface TreeNode {
  id: number;
  parentId: number | null;
  title: string;
  children?: TreeNode[];
}

export function flatListToTree(list: TreeNode[]) {
  const map = new Map<number, TreeNode>();
  const tree: TreeNode[] = [];

  list.forEach((item) => {
    map.set(item.id, { ...item, children: [] });
  });

  list.forEach((item) => {
    const node = map.get(item.id)!;

    if (item.parentId === null) {
      tree.push(node);
      return;
    }

    const parent = map.get(item.parentId);
    parent?.children?.push(node);
  });

  return tree;
}

export const flatMenus: TreeNode[] = [
  { id: 1, parentId: null, title: "首页" },
  { id: 2, parentId: null, title: "系统管理" },
  { id: 3, parentId: 2, title: "用户管理" },
  { id: 4, parentId: 2, title: "角色管理" },
];
