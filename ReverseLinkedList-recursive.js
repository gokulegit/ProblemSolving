/**
 * https://leetcode.com/problems/reverse-linked-list/
 */

var reverseList = function (head) {

    let new_head = head;

    function recur_util(node) {

        if (node === null) return null;
        if (node.next === null) {
            new_head = node;
            return node;
        }

        let temp = recur_util(node.next);
        // reversing the list.
        temp.next = node;
        node.next = null;
        return node;
    }

    recur_util(head);

    head = new_head;

    return new_head;

};