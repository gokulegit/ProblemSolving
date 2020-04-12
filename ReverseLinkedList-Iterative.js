/**
 * https://leetcode.com/problems/reverse-linked-list/
 */

var reverseList = function (head) {

    let cur = head;
    let prev = null;

    while (cur != null) {

        // Make sure we move ahead.
        next_backup = cur.next;

        cur.next = prev;

        prev = cur;

        cur = next_backup;

    }

    head = prev;

    return head;

};