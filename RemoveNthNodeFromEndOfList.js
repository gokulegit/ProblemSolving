var removeNthFromEnd = function(head, n) {
    function method1(head) {
        // check the edge case once.
        if(head == null ||(head.next == null && n==1)) return null;
        let first = new ListNode(-1);
        first.next = head;
        
        // Find the length of the list.
        let length = 0;
        let t = head;
        while(t) {
            length ++;
            t = t.next;
        }
        
        // Find the previous node of the deleting node.
        for(let i=0;i<length-n;i++) first=first.next;
        
        // Delete the node if available at Head.
        if(first.next == head) {
            head = head.next;
            return head;
        }
        
        // Delete if not head.
        first.next = first.next.next;
        
        return head;
    }
    
    function method2(head) {
        if(head == null || (head.next==null && n==1)) return null;
        
        // Create and initialize two pointers to auzilary new node.
        let first = new ListNode(-1);
        first.next = head;
        let second = first;
        
        // Move second node upto N
        for(let i=0;i<n;i++) {
            if(!second.next) return head;
            second = second.next
        }
        
        // Move both the pointers till the second pointer hits the last node (not the null).
        // first pointer will be pointing to the previous node of the deleting node
        while(second.next) {
            first = first.next;
            second = second.next;
        }
        
        // Follow the same as method1
        if(first.next == head) {
            head= head.next;
            return head;
        }
        first.next = first.next.next;
        return head;
    }
    
    return method2(head);   
    
};
