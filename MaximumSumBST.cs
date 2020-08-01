/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public int MaxSumBST(TreeNode root) {
        var max_sum_so_far = 0;
        
        (bool, int, int, int) recur (TreeNode node) {
            
            if(node == null) return (true, int.MinValue, int.MaxValue, 0);
            
            if(node.left == null && node.right == null) {
                max_sum_so_far = Math.Max(max_sum_so_far, node.val);
                return (true, node.val, node.val, node.val);
            }
            
            var (left_is_bst, left_min, left_max, left_sum) = (node.left ==null)  ? 
                (true, node.val, node.val - 1, 0) : recur(node.left);
            
            var (right_is_bst, right_min, right_max, right_sum) = (node.right == null) ?
                (true, node.val + 1, node.val, 0) : recur(node.right);
            
            var this_is_bst = left_is_bst && right_is_bst && left_max < node.val && right_min > node.val;
            
            if(this_is_bst) {
                max_sum_so_far = Math.Max(max_sum_so_far, left_sum + right_sum + node.val);
            }
            
            return (this_is_bst, Math.Min(left_min, node.val), 
                    Math.Max(right_max, node.val), 
                    left_sum + right_sum + node.val);
            
        }
        
        recur(root);        
        
        return max_sum_so_far;
    }
}
