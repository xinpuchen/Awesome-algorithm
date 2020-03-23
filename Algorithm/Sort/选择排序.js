/**
 * 选择排序
 *
 * 解题思路：
 * 每次循环选取一个最小的数字放到前面的有序序列中
 *
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 */

const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};
