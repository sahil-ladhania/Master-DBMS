/*

1. What does these things means in terms of File-System Disadvantages :
    Data Isolation
    Integrity Problems 
    Atomicity Problems 
    Concurrent Anomalies 
2. Difference Between Schema & Model.
3. What are Host Languages ?
4. What is ODBC & JDBC ?
5. Ex of these :
    T1 Architecture 
    T2 Architecture
    T3 Architecture
6. What exactly is Data Model ? 
7. What is Null Value in Attribute ?
8. Understand Participation Constraint with Example :
    Total 
    Partial 
9. When to use Specialisation & When to use Generalisation ?
10. Why Specialisation & Why Generalisation ?
11. What does this means :
    Attributes of higher level entity sets are inherited by lower level entity sets.
12. Aggregation :
    How to show relationships among relationship ?
    What is Abstraction ?
13. Keys of Relational Model (MYSQL) in Depth.
14. Difference between these Constraints :
    Integrity 
    Key
    Referential 
15. What happens to Weak Entity when we convert ER to R-Model ?
16. Why in table properties :
    Values have to be atomic & cant be broken down further.
17. What does this means :
    Sequence of row and column has no significance.
18. What happens to Multi values Attribute when converting ER to R-Model ?
19. How Generalisation is being converted to Table (ER to R-Model) :
    Different ways of doing it.
20. How Aggregation is being converted from ER to R-Model ?
21. Difference between UUID & GUID ?
22. Why generating UUID or GUID in Multiple Primary Replication is a better choice but at the same time what is the disadvantage of using it ?
23. How to replicate same dataset on different servers in Clustering & What does that mean ?
24. Why is it so that when we horizontally scale our machines/servers we know that it gives us a challenging time dealing with relational databases as it’s quite tough to maintain the relations ?
25. What does this means “But if we apply partitioning to the database that is already scaled out i.e equipped with multiple servers we can partition out DB among those servers and handle the big data easily” ?
26. What does these means in the advantages of Partitioning :
    Parallelism
    Availability 
    Performance 
    Manageability
    Reduce Cost as scaling-up or vertical scaling might be costly
27. Difference between these Optimisation :
    Clustering DB
    Distributed DB
28. What is Partitioning & How it is being done ?
29. What is Sharding & How it is being done ?
30. Difference between these :
    Partitioning 
    Sharding
31. What is Partitioning of data by Functionality ?
32. What is Horizontal Scaling and How it is being done ?
33. What exactly is sub-schema with example ?
34. How DBMS is Implemented and the ways :
    Client-Server
    Peer-to-Peer (P2P)
    Distributed
35. How does a relational DBMS internally store its data? In what type of data structure? How does it offer the rapid retrieval without loading the entire database into the main memory (I have heard many DBMS use B-trees)?
36. What is Index & its Types ?
37. What is Data Integrity in RDBMS ?
38. Why “Security” is an advantage of RDBMS ?
39. What does these means in Limitations of RDBMS :
    Complexity
    Cost
    Handling of Unstructured Data
    Horizontal Scalability
40. Keys in Depth.
41. View in Depth.
42. Trigger in Depth.
43. Difference between DELETE & TRUNCATE in MYSQL ?
44. SQL Privileges in Depth.
45. Difference between Clustered & Non-Clustered Index.
46. Cursor in Depth.
47. Features of Good Relational DB Design.
48. What does these terms means :
    XDBC
    XFDs
    COBOL
49. Functional Dependencies in Depth (Also understand the Mathematics side of it) :
    Key Terms for FD
    Types of FD
    Rules of FD
50. Understand the below purpose of Normalisation in Depth :
    Prevent Anomalies.
    Ensure Data Integrity.
    Prevent Updates Made to Some Data and Not Others.
    Prevent Deleting Unrelated Data.
    Ensure Queries are More Efficient.
51. Three Anomalies resolved by Normalisation in Depth & How to implement those Anomalies :
    Insertion 
    Updation 
    Deletion 
52. Types of Normalisation or Normal Forms in Depth , Purpose of each one & How to Implement it :
    1NF (IMP)
    2NF (IMP)
    3NF (IMP)
    BCNF (IMP)
    4NF
    5NF
    6NF
53. Understand Memory System in Depth (IGNOU SEM 1 —— Block 1 -> UNIT 3 ).
54. Understand these things in Depth For Primary Memory :
    Is it true that Primary Memory which is RAM is a Volatile memory which means Data is lost when power is turned off.
    In Primary Memory what are Resisters & Cache Memory ?
    Why Primary Memory (RAM) has ultra fast access speed ?
    Why is it so that it requires continuous power supply to maintain data integrity ?
    What does this means that Primary Memory is directly accessible by the CPU ?
55. Understand these things in Depth For Tertiary Memory :
    Why Tertiary Memory has the slowest speed among the three types of storage ?
    Why Tertiary Memory is primarily used for system backups ?
56. Understand the Memory Hierarchy of Computers Systems in Depth :
    Resisters
    Cache 
    Primary Memory 
    Secondary 
    Tertiary 
57. Understand Magnetic Disks in Depth.
58. Understand RAID & its Types in Depth.
59. Understand File Structure & types of File Organisation :
    Heap File Organisation 
    Sequential File Organisation 
    Hash File Organisation 
    Clustered File Organisation 
60. Schedule in Depth.
61. Serializability in Depth.
62. Equivalence Schedule in Depth.
63. What is buffer in context of Main Memory ?
64. Understand Conflict Equivalence in Depth.
65. Understand these Commands Practically :
    COMMIT
    ROLLBACK
    SAVEPOINT
66. Why is so that Isolation property of ACID in Transaction means when we try to convert Parallel Schedule to Serial Schedule ?
67. Understand this practically that How to Implement Atomicity in Transaction ?
68. Understand this practically that What are the problems that occur during concurrent or parallel Transactions :
    Temporary Update Problem
    Incorrect Summary Problem
    Lost Update Problem
    Unrepeatable Read Problem
    Phantom Read Problem
69. Understand this practically that What are the Concurrency Control Techniques in DBMS Transaction available :
    Locking
    Timestamp Ordering 
    Optimistic Concurrency Control
70. Understand Schedule & its types  in Depth.
71. Understand Concurrency Control types & techniques in Depth.
72. Understand DB Scaling Patterns in Depth.
73. Understand how we can scale RDBMS & NoSQL in Depth.
74. Understand In-Memory DB in Depth.
75. Understand Indexing in Depth.
76. Understand the difference between ACID & BASE properties in DBMS in Depth.
77. Understand Deadlock in Depth.
78. Understand Concurrency Protocol in DBMS like RR , RW , WR , WW in Depth.

*/
