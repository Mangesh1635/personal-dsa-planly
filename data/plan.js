const d = (day, tasks) => ({
    day,
    tasks: tasks.map(([title, estimatedMinutes]) => ({
        title,
        estimatedMinutes
    }))
});


/* =========================================================
   SPRINT 1 — DSA FOUNDATIONS
   ========================================================= */


/* =========================
   DAY 1 — ARRAYS + HASHING
   ========================= */

const s1d1 = [
    ['#1 Two Sum', 20],
    ['#217 Contains Duplicate', 15],
    ['#242 Valid Anagram', 20],
    ['#169 Majority Element', 20],
    ['#268 Missing Number', 20],
    ['#136 Single Number', 20],
    ['#349 Intersection of Two Arrays', 20],
    ['#448 Find All Numbers Disappeared in an Array', 25],
    ['#1002 Find Common Characters', 25],
    ['#383 Ransom Note', 15],
    ['#387 First Unique Character in a String', 20],
    ['#205 Isomorphic Strings', 25],
    ['#290 Word Pattern', 25],
    ['#202 Happy Number', 25],
    ['#1512 Number of Good Pairs', 20],
    ['#49 Group Anagrams', 30],
    ['#347 Top K Frequent Elements', 35],
    ['#451 Sort Characters By Frequency', 30],
    ['#128 Longest Consecutive Sequence', 35],
    ['#560 Subarray Sum Equals K', 40],
    ['#523 Continuous Subarray Sum', 35],
    ['#525 Contiguous Array', 35],
    ['#238 Product of Array Except Self', 35],
    ['#53 Maximum Subarray - Kadane', 25],
    ['#152 Maximum Product Subarray', 35],
    ['#121 Best Time to Buy and Sell Stock', 20],
    ['#122 Best Time to Buy and Sell Stock II', 25],
    ['#41 First Missing Positive', 45],
    ['#73 Set Matrix Zeroes', 30],
    ['#54 Spiral Matrix', 30],
    ['#48 Rotate Image', 35],
    ['#289 Game of Life', 40]
];


/* =========================
   DAY 2 — STRINGS + TWO POINTERS
   ========================= */

const s1d2 = [
    ['#344 Reverse String', 15],
    ['#125 Valid Palindrome', 20],
    ['#680 Valid Palindrome II', 25],
    ['#392 Is Subsequence', 20],
    ['#345 Reverse Vowels of a String', 20],
    ['#1768 Merge Strings Alternately', 20],
    ['#14 Longest Common Prefix', 20],
    ['#28 Find the Index of the First Occurrence', 20],
    ['#58 Length of Last Word', 15],
    ['#443 String Compression', 25],
    ['#26 Remove Duplicates from Sorted Array', 20],
    ['#27 Remove Element', 20],
    ['#283 Move Zeroes', 20],
    ['#977 Squares of a Sorted Array', 25],
    ['#88 Merge Sorted Array', 25],
    ['#167 Two Sum II', 25],
    ['#11 Container With Most Water', 35],
    ['#15 3Sum', 45],
    ['#18 4Sum', 45],
    ['#16 3Sum Closest', 40],
    ['#75 Sort Colors', 30],
    ['#881 Boats to Save People', 30],
    ['#844 Backspace String Compare', 25],
    ['#151 Reverse Words in a String', 30],
    ['#5 Longest Palindromic Substring', 45],
    ['#647 Palindromic Substrings', 35],
    ['#42 Trapping Rain Water', 50]
];


/* =========================
   DAY 3 — SLIDING WINDOW + PREFIX SUM
   ========================= */

const s1d3 = [
    ['#643 Maximum Average Subarray I', 25],
    ['#1456 Maximum Number of Vowels in a Substring', 25],
    ['#1652 Defuse the Bomb', 25],
    ['#438 Find All Anagrams in a String', 35],
    ['#567 Permutation in String', 35],
    ['#2461 Maximum Sum of Distinct Subarrays With Length K', 35],
    ['#3 Longest Substring Without Repeating Characters', 40],
    ['#424 Longest Repeating Character Replacement', 40],
    ['#209 Minimum Size Subarray Sum', 30],
    ['#904 Fruit Into Baskets', 35],
    ['#1004 Max Consecutive Ones III', 35],
    ['#1493 Longest Subarray of 1s After Deleting One Element', 35],
    ['#930 Binary Subarrays With Sum', 35],
    ['#992 Subarrays with K Different Integers', 50],
    ['#76 Minimum Window Substring', 55],
    ['#1480 Running Sum of 1D Array', 15],
    ['#724 Pivot Index', 20],
    ['#560 Subarray Sum Equals K', 35],
    ['#523 Continuous Subarray Sum', 30],
    ['#525 Contiguous Array', 35],
    ['#974 Subarray Sums Divisible by K', 35],
    ['#238 Product of Array Except Self', 30],
    ['#303 Range Sum Query', 20],
    ['#1109 Corporate Flight Bookings', 30],
    ['#1094 Car Pooling', 30]
];


/* =========================
   DAY 4 — BINARY SEARCH + SORTING
   ========================= */

const s1d4 = [
    ['#704 Binary Search', 20],
    ['#35 Search Insert Position', 20],
    ['#278 First Bad Version', 20],
    ['#374 Guess Number Higher or Lower', 20],
    ['#69 Sqrt(x)', 25],
    ['#367 Valid Perfect Square', 20],
    ['#744 Find Smallest Letter Greater Than Target', 20],
    ['#34 Find First and Last Position', 30],
    ['#153 Find Minimum in Rotated Sorted Array', 30],
    ['#33 Search in Rotated Sorted Array', 35],
    ['#81 Search in Rotated Sorted Array II', 35],
    ['#162 Find Peak Element', 30],
    ['#658 Find K Closest Elements', 35],
    ['#540 Single Element in a Sorted Array', 30],
    ['#875 Koko Eating Bananas', 35],
    ['#1011 Capacity to Ship Packages Within D Days', 40],
    ['#410 Split Array Largest Sum', 45],
    ['#1482 Minimum Number of Days to Make m Bouquets', 40],
    ['#1552 Magnetic Force Between Two Balls', 40],
    ['Aggressive Cows', 35],
    ['Allocate Books', 35],
    ['Painter Partition Problem', 40],
    ['#56 Merge Intervals', 30],
    ['#179 Largest Number', 30],
    ['#215 Kth Largest Element in an Array', 35],
    ['#347 Top K Frequent Elements', 30]
];


/* =========================
   DAY 5 — LINKED LIST + STACK + QUEUE
   ========================= */

const s1d5 = [
    ['#206 Reverse Linked List', 25],
    ['#876 Middle of the Linked List', 20],
    ['#141 Linked List Cycle', 25],
    ['#21 Merge Two Sorted Lists', 25],
    ['#83 Remove Duplicates from Sorted List', 20],
    ['#203 Remove Linked List Elements', 20],
    ['#160 Intersection of Two Linked Lists', 25],
    ['#19 Remove Nth Node From End', 35],
    ['#234 Palindrome Linked List', 30],
    ['#143 Reorder List', 40],
    ['#2 Add Two Numbers', 35],
    ['#24 Swap Nodes in Pairs', 30],
    ['#92 Reverse Linked List II', 35],
    ['#61 Rotate List', 30],
    ['#138 Copy List with Random Pointer', 45],
    ['#146 LRU Cache', 55],
    ['#20 Valid Parentheses', 20],
    ['#155 Min Stack', 30],
    ['#225 Implement Stack Using Queues', 25],
    ['#150 Evaluate Reverse Polish Notation', 30],
    ['#22 Generate Parentheses', 35],
    ['#739 Daily Temperatures', 35],
    ['#496 Next Greater Element I', 25],
    ['#503 Next Greater Element II', 30],
    ['#735 Asteroid Collision', 30],
    ['#853 Car Fleet', 30],
    ['#71 Simplify Path', 30],
    ['#84 Largest Rectangle in Histogram', 50],
    ['#239 Sliding Window Maximum', 45],
    ['#232 Implement Queue Using Stacks', 25]
];


/* =========================================================
   SPRINT 2 — ADVANCED DSA
   ========================================================= */


/* =========================
   DAY 1 — RECURSION + BACKTRACKING + TREES
   ========================= */

const s1d6 = [
    ['#509 Fibonacci Number', 15],
    ['Factorial Using Recursion', 15],
    ['#231 Power of Two', 15],
    ['#326 Power of Three', 15],
    ['Reverse String Recursively', 20],
    ['Binary Search Recursively', 20],
    ['Generate Binary Strings', 25],
    ['#78 Subsets', 30],
    ['#90 Subsets II', 35],
    ['#46 Permutations', 30],
    ['#47 Permutations II', 35],
    ['#39 Combination Sum', 35],
    ['#40 Combination Sum II', 35],
    ['#216 Combination Sum III', 35],
    ['#17 Letter Combinations of a Phone Number', 35],
    ['#22 Generate Parentheses', 35],
    ['#131 Palindrome Partitioning', 40],
    ['#79 Word Search', 40],
    ['#51 N Queens', 50],
    ['#37 Sudoku Solver', 60],
    ['#104 Maximum Depth of Binary Tree', 20],
    ['#100 Same Tree', 20],
    ['#226 Invert Binary Tree', 20],
    ['#101 Symmetric Tree', 25],
    ['#543 Diameter of Binary Tree', 30],
    ['#110 Balanced Binary Tree', 30],
    ['#112 Path Sum', 25],
    ['#113 Path Sum II', 30],
    ['#102 Binary Tree Level Order Traversal', 30],
    ['#103 Binary Tree Zigzag Level Order Traversal', 35],
    ['#199 Binary Tree Right Side View', 30],
    ['Binary Tree Left Side View', 25],
    ['#637 Average of Levels in Binary Tree', 25],
    ['#111 Minimum Depth of Binary Tree', 25],
    ['#1448 Count Good Nodes in Binary Tree', 30],
    ['#572 Subtree of Another Tree', 30],
    ['#297 Serialize and Deserialize Binary Tree', 50],
    ['#124 Binary Tree Maximum Path Sum', 55]
];


/* =========================
   DAY 2 — BST + HEAP + GREEDY + INTERVALS
   ========================= */

const s1d7 = [
    ['#700 Search in a Binary Search Tree', 20],
    ['#701 Insert into a Binary Search Tree', 20],
    ['#98 Validate Binary Search Tree', 35],
    ['#530 Minimum Absolute Difference in BST', 25],
    ['#230 Kth Smallest Element in a BST', 30],
    ['#235 Lowest Common Ancestor of BST', 25],
    ['#450 Delete Node in a BST', 35],
    ['#108 Convert Sorted Array to BST', 25],
    ['#653 Two Sum IV - Input is a BST', 30],
    ['#99 Recover Binary Search Tree', 40],
    ['#215 Kth Largest Element in an Array', 35],
    ['#378 Kth Smallest Element in a Sorted Matrix', 40],
    ['#1046 Last Stone Weight', 25],
    ['#973 K Closest Points to Origin', 35],
    ['#347 Top K Frequent Elements', 30],
    ['#703 Kth Largest Element in a Stream', 25],
    ['#621 Task Scheduler', 40],
    ['#295 Find Median from Data Stream', 55],
    ['#23 Merge K Sorted Lists', 45],
    ['#455 Assign Cookies', 20],
    ['#55 Jump Game', 30],
    ['#45 Jump Game II', 35],
    ['#134 Gas Station', 35],
    ['#763 Partition Labels', 30],
    ['#135 Candy', 40],
    ['#860 Lemonade Change', 20],
    ['#406 Queue Reconstruction by Height', 40],
    ['#435 Non-overlapping Intervals', 30],
    ['#56 Merge Intervals', 30],
    ['#57 Insert Interval', 35],
    ['Meeting Rooms', 25],
    ['#253 Meeting Rooms II', 40],
    ['#452 Minimum Number of Arrows to Burst Balloons', 35],
    ['#986 Interval List Intersections', 35]
];


/* =========================
   DAY 3 — GRAPHS
   ========================= */

const s1d8 = [
    ['#733 Flood Fill', 25],
    ['#200 Number of Islands', 40],
    ['#695 Max Area of Island', 35],
    ['#133 Clone Graph', 35],
    ['#994 Rotting Oranges', 35],
    ['#417 Pacific Atlantic Water Flow', 45],
    ['#130 Surrounded Regions', 40],
    ['#547 Number of Provinces', 30],
    ['#841 Keys and Rooms', 25],
    ['Graph Valid Tree', 35],
    ['#323 Number of Connected Components', 30],
    ['#684 Redundant Connection', 30],
    ['#721 Accounts Merge', 40],
    ['#207 Course Schedule', 40],
    ['#210 Course Schedule II', 40],
    ['#269 Alien Dictionary', 50],
    ['#1136 Parallel Courses', 40],
    ['#310 Minimum Height Trees', 40],
    ['#743 Network Delay Time', 45],
    ['#787 Cheapest Flights Within K Stops', 45],
    ['#1631 Path With Minimum Effort', 45],
    ['#778 Swim in Rising Water', 50],
    ['#1091 Shortest Path in Binary Matrix', 35],
    ['#127 Word Ladder', 50],
    ['Number of Provinces - Union Find', 30],
    ['#947 Most Stones Removed with Same Row or Column', 40],
    ['#990 Satisfiability of Equality Equations', 35],
    ['#305 Number of Islands II', 45],
    ['Minimum Spanning Tree', 50],
    ['Disjoint Set / Union Find Implementation', 40],
    ['Dijkstra Algorithm', 45],
    ['Bellman Ford Algorithm', 40],
    ['Floyd Warshall Algorithm', 40]
];


/* =========================
   DAY 4 — DYNAMIC PROGRAMMING
   ========================= */

const s1d9 = [
    ['#70 Climbing Stairs', 20],
    ['#746 Min Cost Climbing Stairs', 25],
    ['#198 House Robber', 30],
    ['#213 House Robber II', 35],
    ['#740 Delete and Earn', 35],
    ['#91 Decode Ways', 35],
    ['#139 Word Break', 40],
    ['#343 Integer Break', 30],
    ['0/1 Knapsack', 45],
    ['#416 Partition Equal Subset Sum', 40],
    ['#494 Target Sum', 40],
    ['#322 Coin Change', 40],
    ['#518 Coin Change II', 40],
    ['#1049 Last Stone Weight II', 40],
    ['#474 Ones and Zeroes', 45],
    ['#62 Unique Paths', 25],
    ['#63 Unique Paths II', 30],
    ['#64 Minimum Path Sum', 30],
    ['#120 Triangle', 30],
    ['#1143 Longest Common Subsequence', 45],
    ['#300 Longest Increasing Subsequence', 45],
    ['#516 Longest Palindromic Subsequence', 40],
    ['#72 Edit Distance', 55],
    ['#115 Distinct Subsequences', 50],
    ['#718 Maximum Length of Repeated Subarray', 35],
    ['#309 Best Time to Buy and Sell Stock with Cooldown', 40],
    ['#714 Best Time to Buy and Sell Stock with Transaction Fee', 35],
    ['#337 House Robber III', 45],
    ['Matrix Chain Multiplication', 55],
    ['#132 Palindrome Partitioning II', 45]
];


/* =========================
   DAY 5 — PATTERN RECOGNITION
   + MIXED INTERVIEW PRACTICE
   ========================= */

const s1d10 = [
    ['Pattern Recognition - #1 Two Sum', 15],
    ['Pattern Recognition - #15 3Sum', 15],
    ['Pattern Recognition - #3 Longest Substring Without Repeating', 15],
    ['Pattern Recognition - #560 Subarray Sum Equals K', 15],
    ['Pattern Recognition - #875 Koko Eating Bananas', 15],
    ['Pattern Recognition - #206 Reverse Linked List', 15],
    ['Pattern Recognition - #739 Daily Temperatures', 15],
    ['Pattern Recognition - #102 Binary Tree Level Order', 15],
    ['Pattern Recognition - #200 Number of Islands', 15],
    ['Pattern Recognition - #322 Coin Change', 15],

    ['Mixed - #238 Product of Array Except Self', 35],
    ['Mixed - #11 Container With Most Water', 35],
    ['Mixed - #76 Minimum Window Substring', 50],
    ['Mixed - #33 Search in Rotated Sorted Array', 35],
    ['Mixed - #19 Remove Nth Node From End', 30],
    ['Mixed - #84 Largest Rectangle in Histogram', 50],
    ['Mixed - #39 Combination Sum', 35],
    ['Mixed - #98 Validate BST', 35],
    ['Mixed - #215 Kth Largest Element', 35],
    ['Mixed - #56 Merge Intervals', 30],
    ['Mixed - #207 Course Schedule', 40],
    ['Mixed - #743 Network Delay Time', 45],
    ['Mixed - #198 House Robber', 30],
    ['Mixed - #300 Longest Increasing Subsequence', 45],
    ['Mixed - #42 Trapping Rain Water', 50],
    ['Mixed - #139 Word Break', 40],
    ['Mixed - #253 Meeting Rooms II', 40],
    ['Mixed - #133 Clone Graph', 35],
    ['Mixed - #494 Target Sum', 40],
    ['Mixed - #146 LRU Cache', 50],

    ['Mock Interview 1 - Easy + Medium + Medium', 60],
    ['Mock Interview 2 - Easy + Medium + Medium', 60],
    ['Mock Interview 3 - Medium + Medium + Medium', 60],

    ['Final Pattern Revision', 60],
    ['Final Complexity Revision', 30]
];

const s2d1 = [
    ['DBMS Introduction', 20],
    ['DBMS vs File System', 20],
    ['Database Architecture', 25],
    ['Three Schema Architecture', 25],
    ['Data Independence', 20],
    ['DBMS Advantages and Disadvantages', 20],
    ['Database Users and Administrators', 20],
    ['Types of Databases', 20],
    ['DBMS Interview Questions', 25]
];

const s2d2 = [
    ['ER Model Introduction', 20],
    ['Entities and Entity Sets', 20],
    ['Attributes and Types', 20],
    ['Relationships and Relationship Sets', 25],
    ['Cardinality and Participation', 25],
    ['ER Diagram Practice', 30],
    ['Weak Entity', 20],
    ['Generalization and Specialization', 20],
    ['ER Model Interview Questions', 25]
];

const s2d3 = [
    ['Relational Model', 20],
    ['Relations and Tuples', 20],
    ['Keys in DBMS', 30],
    ['Primary Key', 15],
    ['Candidate Key', 15],
    ['Super Key', 15],
    ['Foreign Key', 20],
    ['Constraints', 25],
    ['Referential Integrity', 20],
    ['Relational Algebra Basics', 30]
];

const s2d4 = [
    ['Transaction in DBMS', 25],
    ['Transaction States', 20],
    ['ACID Properties', 30],
    ['Concurrency Control', 30],
    ['Serializability', 30],
    ['Conflict Serializability', 25],
    ['View Serializability', 25],
    ['Deadlock in DBMS', 25],
    ['Two Phase Locking', 30]
];

const s2d5 = [
    ['Normalization Introduction', 20],
    ['Functional Dependency', 30],
    ['1NF', 20],
    ['2NF', 20],
    ['3NF', 20],
    ['BCNF', 25],
    ['4NF and 5NF', 25],
    ['Normalization Practice', 30],
    ['Normalization Interview Questions', 25]
];


// ============================================================
// SPRINT 4 — SQL
// ============================================================

const s3d1 = [
    ['SQL Introduction', 20],
    ['DDL Commands', 20],
    ['DML Commands', 20],
    ['DCL Commands', 20],
    ['TCL Commands', 20],
    ['SELECT Statement', 20],
    ['WHERE Clause', 20],
    ['ORDER BY', 15],
    ['DISTINCT', 15],
    ['LIMIT and OFFSET', 20],
    ['Basic SQL Practice', 30]
];

const s3d2 = [
    ['SQL Aggregate Functions', 25],
    ['COUNT', 15],
    ['SUM', 15],
    ['AVG', 15],
    ['MIN and MAX', 15],
    ['GROUP BY', 25],
    ['HAVING', 25],
    ['GROUP BY vs HAVING', 20],
    ['Aggregate Function Practice', 30]
];

const s3d3 = [
    ['SQL Joins Introduction', 20],
    ['INNER JOIN', 25],
    ['LEFT JOIN', 25],
    ['RIGHT JOIN', 25],
    ['FULL OUTER JOIN', 25],
    ['CROSS JOIN', 20],
    ['SELF JOIN', 20],
    ['JOIN Practice Problems', 40],
    ['Join Interview Questions', 25]
];

const s3d4 = [
    ['Subqueries Introduction', 20],
    ['Single Row Subquery', 20],
    ['Multiple Row Subquery', 20],
    ['Correlated Subquery', 25],
    ['EXISTS and NOT EXISTS', 25],
    ['IN and NOT IN', 20],
    ['CTE Introduction', 25],
    ['WITH Clause', 20],
    ['Subquery Practice', 35]
];

const s3d5 = [
    ['SQL Window Functions', 30],
    ['ROW_NUMBER', 20],
    ['RANK', 20],
    ['DENSE_RANK', 20],
    ['LEAD and LAG', 25],
    ['PARTITION BY', 25],
    ['Running Total', 20],
    ['Top N Problems', 30],
    ['SQL Interview Problems', 40]
];


// ============================================================
// SPRINT 5 — OPERATING SYSTEMS
// ============================================================

const s4d1 = [
    ['Operating System Introduction', 20],
    ['OS Functions', 20],
    ['Types of Operating Systems', 25],
    ['Kernel and System Calls', 30],
    ['User Mode vs Kernel Mode', 25],
    ['Process Introduction', 20],
    ['Process States', 25],
    ['PCB', 20],
    ['Context Switching', 25],
    ['OS Interview Questions', 30]
];

const s4d2 =  [
    ['Process Scheduling', 20],
    ['FCFS Scheduling', 20],
    ['SJF Scheduling', 25],
    ['SRTF Scheduling', 25],
    ['Priority Scheduling', 25],
    ['Round Robin Scheduling', 25],
    ['Scheduling Algorithms Comparison', 20],
    ['Waiting Time', 20],
    ['Turnaround Time', 20],
    ['Scheduling Problems', 40]
];

const s4d3 = [
    ['Threads Introduction', 20],
    ['Process vs Thread', 25],
    ['User Level Threads', 20],
    ['Kernel Level Threads', 20],
    ['Multithreading', 20],
    ['Concurrency vs Parallelism', 25],
    ['Critical Section', 25],
    ['Race Condition', 25],
    ['Synchronization', 25],
    ['Thread Interview Questions', 25]
];

const s4d4 =[
    ['Deadlock Introduction', 20],
    ['Deadlock Conditions', 25],
    ['Deadlock Prevention', 25],
    ['Deadlock Avoidance', 25],
    ['Banker Algorithm', 30],
    ['Deadlock Detection', 25],
    ['Deadlock Recovery', 20],
    ['Deadlock Practice Problems', 30],
    ['Deadlock Interview Questions', 25]
];

const s4d5 = [
    ['Memory Management', 25],
    ['Paging', 30],
    ['Segmentation', 25],
    ['Virtual Memory', 30],
    ['Page Fault', 20],
    ['Page Replacement Algorithms', 30],
    ['FIFO Page Replacement', 20],
    ['LRU Page Replacement', 20],
    ['Optimal Page Replacement', 20],
    ['OS Interview Problems', 35]
];


// ============================================================
// SPRINT 6 — OOP
// ============================================================

const s5d1 = [
    ['OOP Introduction', 20],
    ['Class and Object', 25],
    ['Constructors', 20],
    ['Destructor', 20],
    ['this Keyword', 15],
    ['Static Members', 20],
    ['Access Modifiers', 20],
    ['Encapsulation', 25],
    ['OOP Interview Questions', 30]
];

const s5d2 = [
    ['Inheritance Introduction', 20],
    ['Single Inheritance', 20],
    ['Multilevel Inheritance', 20],
    ['Multiple Inheritance', 25],
    ['Hierarchical Inheritance', 20],
    ['Hybrid Inheritance', 20],
    ['Method Overriding', 25],
    ['Virtual Functions', 30],
    ['Inheritance Interview Questions', 25]
];

const s5d3 = [
    ['Polymorphism Introduction', 20],
    ['Compile Time Polymorphism', 20],
    ['Function Overloading', 25],
    ['Operator Overloading', 25],
    ['Runtime Polymorphism', 20],
    ['Method Overriding', 20],
    ['Virtual Function', 25],
    ['Pure Virtual Function', 20],
    ['Abstract Class', 20],
    ['Polymorphism Interview Questions', 30]
];

const s5d4 = [
    ['Abstraction', 25],
    ['Interface', 25],
    ['Abstract Class vs Interface', 25],
    ['Composition', 20],
    ['Aggregation', 20],
    ['Association', 20],
    ['Dependency', 20],
    ['SOLID Principles', 35],
    ['OOP Design Questions', 30]
];

const s5d5 = [
    ['OOP Interview Revision', 30],
    ['Encapsulation vs Abstraction', 20],
    ['Inheritance vs Composition', 25],
    ['Overloading vs Overriding', 25],
    ['Virtual Function Questions', 25],
    ['Multiple Inheritance Questions', 20],
    ['Design Pattern Basics', 30],
    ['OOP Coding Problems', 40],
    ['OOP Mock Interview', 30]
];


// ============================================================
// SPRINT 7 — COMPUTER NETWORKS
// ============================================================

const s6d1 = [
    ['Computer Networks Introduction', 20],
    ['Types of Networks', 20],
    ['LAN MAN WAN', 20],
    ['Network Topologies', 20],
    ['OSI Model', 30],
    ['TCP/IP Model', 25],
    ['OSI vs TCP/IP', 25],
    ['Network Devices', 25],
    ['Hub vs Switch vs Router', 25],
    ['CN Interview Questions', 30]
];

const s6d2 = [
    ['Physical Layer', 20],
    ['Data Link Layer', 25],
    ['MAC Address', 20],
    ['Ethernet', 25],
    ['Framing', 20],
    ['Error Detection', 25],
    ['Error Correction', 25],
    ['CRC', 25],
    ['CSMA/CD', 25],
    ['Data Link Layer Interview Questions', 30]
];

const s6d3 = [
    ['Network Layer', 20],
    ['IP Addressing', 30],
    ['IPv4', 20],
    ['IPv6', 20],
    ['Subnetting', 35],
    ['CIDR', 25],
    ['ARP', 20],
    ['ICMP', 20],
    ['Routing Algorithms', 30],
    ['Network Layer Interview Questions', 30]
];

const s6d4 = [
    ['Transport Layer', 20],
    ['TCP', 30],
    ['UDP', 25],
    ['TCP vs UDP', 25],
    ['TCP Three Way Handshake', 30],
    ['TCP Connection Termination', 25],
    ['Flow Control', 25],
    ['Congestion Control', 30],
    ['Sliding Window Protocol', 25],
    ['Transport Layer Interview Questions', 30]
];

const s6d5 = [
    ['Application Layer', 20],
    ['HTTP', 25],
    ['HTTPS', 25],
    ['HTTP Methods', 20],
    ['HTTP Status Codes', 20],
    ['DNS', 30],
    ['DHCP', 20],
    ['FTP', 20],
    ['SMTP', 20],
    ['WebSocket', 25],
    ['CN Interview Problems', 35]
];
/* =========================================================
   EXPORT
   ========================================================= */

module.exports = [
    {
        sprint: 1,
        days: [
            d(1, s1d1),
            d(2, s1d2),
            d(3, s1d3),
            d(4, s1d4),
            d(5, s1d5),
            d(6, s1d6),
            d(7, s1d7),
            d(8, s1d8),
            d(9, s1d9),
            d(10, s1d10)
        ]
    },
    {
        sprint: 2,
        days: [
            d(1, s2d1),
            d(2, s2d2),
            d(3, s2d3),
            d(4, s2d4),
            d(5, s2d5),
           
        ]
    },
    {
        sprint: 3,
        days: [
            d(1, s3d1),
            d(2, s3d2),
            d(3, s3d3),
            d(4, s3d4),
            d(5, s3d5),
           
        ]
    },
    {
        sprint: 4,
        days: [
            d(1, s4d1),
            d(2, s4d2),
            d(3, s4d3),
            d(4, s4d4),
            d(5, s4d5),
           
        ]
    },
    {
        sprint: 5,
        days: [
            d(1, s5d1),
            d(2, s5d2),
            d(3, s5d3),
            d(4, s5d4),
            d(5, s5d5),
           
        ]
    },
    {
        sprint: 6,
        days: [
            d(1, s6d1),
            d(2, s6d2),
            d(3, s6d3),
            d(4, s6d4),
            d(5, s6d5),
           
        ]
    },
    
];