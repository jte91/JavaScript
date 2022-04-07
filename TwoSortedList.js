var mergeTwoLists = function(list1, list2) {
    let newNode = new ListNode()
    let start = newNode
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            newNode.next = new ListNode(list1.val, null)   
            list1 = list1.next
        } else {
            newNode.next = new ListNode(list2.val, null)
            list2 = list2.next
        }
        newNode = newNode.next
    }
    
    newNode.next = list1 ? list1 : list2
    
    return start.next
};