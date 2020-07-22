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
    public int WidthOfBinaryTree(TreeNode root) {
        if(root == null) return 0;
        var queue = new Queue<(TreeNode, int)>();
        var mx = 0;
        queue.Enqueue((root, 1));
        
        while(queue.Count > 0) {
            
            var size = queue.Count;
            var first = 0;
            var last = 0;
            while(size-- > 0) {
                var (node, position) = queue.Dequeue();
                if(first == 0) first = position;
                last = position;
                
                if(node.left != null) queue.Enqueue((node.left, position*2));
                if(node.right != null) queue.Enqueue((node.right, position * 2+1));
            }
            var ans = last - first +1;
            mx = Math.Max(mx, ans);
        }
        
        return mx;
    }
}
