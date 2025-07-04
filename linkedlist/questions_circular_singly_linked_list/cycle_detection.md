# Cycle Detection (HackerRank and LeetCode 141)

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

### Example 1

![alt text](image.png)
Input: head = [3,2,0,-4], pos = 1 <br/>
Output: true <br/>

#### Explanation:

There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

### Example 2

![alt text](image-1.png)
Input: head = [1,2], pos = 0 <br/>
Output: true <br/>

#### Explanation:

There is a cycle in the linked list, where the tail connects to the 0th node.

### Example 3

![alt text](image-2.png)

Input: head = [1], pos = -1 <br/>
Output: false <br/>

#### Explanation:

There is no cycle in the linked list.
