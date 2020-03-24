/**
 * 完全二叉树的一些公式：
 *
 * 1. 第n层的节点数最多为 2^n 个节点
 * 2. n 层二叉树最多有 2^0+...+2^n=2^(n+1)-1 个节点
 * 3. 第一个非叶子节点：length/2
 * 4. 一个节点的孩子节点：2n、2n+1
 */

/**
 * 基本结构
 *
 * 插入、遍历和深度
 */

function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}

Node.prototype = {
  show: function() {
    console.log(this.data);
  }
};

function Tree() {
  thisroot = null;
}

Tree.prototype = {
  insert: function(data) {
    var node = new Node(data, null, null);
    if (!this.root) {
      this.root = node;
      return;
    }
    var current = this.root;
    var parent = null;
    while (current) {
      parent = current;
      if (data < parent.data) {
        current = current.left;
        if (current) {
          parent.left = node;
          return;
        }
      } else {
        current = current.right;
        if (current) {
          parent.right = node;
          return;
        }
      }
    }
  },
  preOrder: function(node) {
    if (node) {
      node.show();
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  },
  middleOrder: function(node) {
    if (node) {
      this.middleOrder(node.left);
      node.show();
      this.middleOrder(node.right);
    }
  },
  laterOrder: function(node) {
    if (node) {
      this.laterOrder(node.left);
      this.laterOrder(node.right);
      node.show();
    }
  },
  getMin: function() {
    var current = this.root;
    while (current) {
      if (!current.left) {
        return current;
      }
      current = current.left;
    }
  },
  getMax: function() {
    var current = this.root;
    while (current) {
      if (!current.right) {
        return current;
      }
      current = current.right;
    }
  },
  getDeep: function(node, deep) {
    deep = deep || 0;
    if (node === null) {
      return deep;
    }
    deep++;
    var deepLeft = this.getDeep(node.left, deep);
    var deepRight = this.getDeep(node.right, deep);
    return Math.max(deepLeft, deepRight);
  },
  getNode: function(data, node) {
    if (!node) return null;
    // 树查找，利用二分思想
    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this.getNode(data, node.left);
    } else {
      return this.getNode(data, node.right);
    }
  }
};

/**
 * 二分查找
 *
 * 二分查找的条件是必须是有序的线性表，和线性表的中点值进行比较，如果小就继续在小的序列中查找，如此递归直到找到相同的值
 */
function binarySearch(data, arr, start, end) {
  if (start > end) return -1;

  var mid = Math.floor((end + start) / 2);
  if (data === arr[mid]) {
    return mid;
  } else if (data < arr[mid]) {
    return binarySearch(data, arr, start, mid - 1);
  } else {
    return binarySearch(data, arr, mid + 1, end);
  }
}
