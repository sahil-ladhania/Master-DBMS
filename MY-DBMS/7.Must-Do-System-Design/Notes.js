/*

1. Scalling Patterns.
Answer :
Scalling - Scaling refers to handling increased load on your system by adding resources.
Case Study(Ride-sharing Startup) :-
    Initial Phase - 
        * Targeting a specific city with a small number of customers.
        * All data (customers, trips, locations, bookings, trip history) stored in a single database or machine.
        * No advanced caching or big data solutions implemented.
    Growth Phase -
        * Increasing customer base due to competitive pricing and effective marketing.
        * Booking rates gradually increase from 1 trip per 5 minutes to 10, 20, or even 30 trips per minute.
    Performance Issues -
        * System starts experiencing poor performance :-
            * API latency spikes.
            * Transactions deadlock or starve, leading to failures.
            * Increased response time causing customer dissatisfaction.
    Challenge -
        * Need to address scalability to handle the growing number of transactions and maintain performance.
Some Scalling Patterns :-
    Pattern 1 - Query Optimization & Connection Pool implementation :-
    Pattern 2 - Vertical Scaling or Scale Up :-
    Pattern 3 - Command Query Responsibility Segregation (CQRS) :-
    Pattern 4 - Multi Primary Replication :-
    Pattern 5 - Partitioning :-
    Pattern 6 - Horizontal Scaling :-
    Pattern 7 - Data Centre Wise Partition :-
Link to the DB Scaling Pattern Article - https://www.freecodecamp.org/news/understanding-database-scaling-patterns/
Link to Vertical & Horizontal Scaling Article - https://www.mongodb.com/basics/horizontal-vs-vertical-scaling


2. CAP Theorem.
Answer :
CAP Theorem - It states that in a distributed computer system, you can only achieve two out of three guarantees: consistency, availability, and partition tolerance.
Distributed DB System :-
    Definition -
        * In a NoSQL distributed database system, multiple nodes work together to present a unified database to users.
        * Each node runs an instance of the database server and communicates with other nodes.
    Write and Read Operations - 
        * When a user writes to the database, the data is stored in a node within the distributed system.
        * When retrieving data, the user connects to the nearest node, which retrieves the data without the user's awareness of the node's location.
    Benefits -
        * Scalability - Adding more nodes to the system allows for easy scaling with increasing user traffic.
        * Cost-Efficiency - Horizontal scaling (adding more nodes) is cheaper than vertical scaling (adding more resources to individual nodes).
        * Replication - Horizontal scaling facilitates cheaper and easier data replication, improving system resilience and performance.
Vertical Vs Horizontal Scalling :-
    Vertical Scaling - 
        * Involves adding more resources (e.g., CPU, RAM) to existing nodes.
        * Can become expensive and may not be as cost-effective as horizontal scaling.
    Horizontal Scalling -
        * Involves adding more nodes to the distributed system.
        * More cost-effective and allows for easier replication of data.
Understand Terms Of CAP Theorem :-
    Consistency -
        * Consistency ensures that users see the same data, regardless of which node they connect to in the system.
        * Data reflects the most recent updates made to the system.
        * Ex - In a banking application, when you check your account balance from your PC, tablet, or smartphone, you expect to see the same balance.
    Availability -
        * Availability guarantees that every user request receives a response from the system, even if the operation was unsuccessful.
        * Users can access the system and perform operations regardless of the node they connect to.
        * Ex - When using an ATM, you expect to access your bank account and perform transactions. Even if one ATM is out of service, you should be able to use another ATM to access your account and perform transactions without interruption.
    Partition Tolerance -
        * Partition tolerance means the system continues to operate despite communication failures or partitions between nodes.
        * If a node cannot communicate with another node due to network failure or server crash, the system remains operational.
        * Ex - In a distributed database system, if there's a network partition between two nodes, the system should still be able to retrieve data from replicas stored on other nodes. For instance, if a node in a cluster becomes unreachable due to a network issue, the system should seamlessly switch to accessing data from a replica node to ensure uninterrupted service.
Conclusions :-
    * CAP theorem states that in a distributed system, it's impossible to achieve all three attributes—consistency, availability, and partition tolerance—simultaneously.
    * System designers must make trade-offs based on the specific requirements of their applications and prioritize one or two of these attributes over the others.
Limitations :-
    Simplification - 
        * CAP theorem simplifies the characteristics of distributed systems into three distinct properties: consistency, availability, and partition tolerance. However, real-world systems often exhibit varying degrees of these properties depending on the specific context and requirements.
    Binary Classification - CAP theorem presents a binary classification, suggesting that distributed systems must prioritize either consistency or availability in the presence of network partitions. However, in practice, many systems aim to achieve a balance between these properties, leading to a more nuanced understanding of system behavior.
    Oversimplification - CAP theorem oversimplifies the trade-offs involved in distributed system design by implying that only one property can be maximized while sacrificing the others. In reality, designers often aim to optimize multiple properties simultaneously, leading to trade-offs and compromises that are not fully captured by the theorem.
    Evolution of Technology - CAP theorem was formulated at a specific point in time and may not fully account for advances in distributed systems technology and techniques. As technology evolves, new approaches and strategies may emerge that challenge or expand upon the limitations imposed by the CAP theorem.


3. What DB to Use ?
Answer :
Mainly Two types of DBs are there :-
    Relational -
        * Can handle more complicated queries (like joins, for example).
        * Harder to scale (vertical scaling).
        * Strucred data only.
        * Ex - MySQL , PostgreSQL , Oracle Database.
    Non-Relational -
        * Better at simpler queries.
        * Easier to scale (horizontal scaling).
        * Unstructured data.
        * Ex - MongoDB , Apache Cassandra , Amazon DynamoDB.
About NRDBs :-
    * Data Distribution - Split up data into smaller, manageable chunks.
    * Individual Scalability - Data is stored in different, individually scalable areas, allowing for efficient scaling as per demand.
    Resilience to Single Point of Failure - Designed to eliminate single points of failure, enhancing overall system resilience.
    * Scalability - Highly scalable, allowing for seamless expansion of storage and processing capabilities.
    * Expensive Joins - While NRDBs offer scalability benefits, they often incur expensive join operations due to the distributed nature of data storage.
    * Complexity of Joins - Joining data across distributed nodes can be resource-intensive and time-consuming compared to relational databases where data is typically stored together.
    * Performance Considerations - Overhead of distributed joins can impact query performance, particularly for complex queries involving multiple data sources.
    * Data Consistency Challenges - Maintaining data consistency across distributed nodes can be challenging and may require specialized techniques or trade-offs.
    * Data Partitioning Strategies - NRDBs employ various partitioning strategies to distribute data, such as sharding, replication, or a combination of both, based on the specific requirements of the application and workload.
    * Optimization Techniques - To mitigate the drawbacks of expensive joins, NRDBs often employ optimization techniques like pre-joining, indexing, or caching to improve query performance and efficiency.
There are different types of NRDBs :-
    MongoDB - 
        * Storage Type - Documents.
        * Schema - Extremely flexible.
        * Ease of Use - Easy setup.
        * Architecture - Master/Slave.
        * General Speed - Slower writes due to lock system.
        * Speed at Scale - Slower as writes increase.
        * General Notes - Suitable for new users, supports various document types & highly flexible for data querying.
    Cassandra -
        * Storage Type - Wide columns.
        * Schema - Least flexible.
        * Ease of Use - Moderate setup.
        * Architecture - Distributed clusters.
        * General Speed - Constant write time.
        * Speed at Scale - Performs fast even at scale.
        * General Notes - Organizes data into keyspaces, column families, rows, and columns; performs well at scale but requires some complexity in setup.
    Redis -
        * Storage Type - Data structures.
        * Schema - Flexible supporting abstract data types.
        * Ease of Use - Most difficult setup.
        * Architecture - Master/Slave.
        * General Speed - Read/write at the same rate.
        * Speed at Scale - Fast performance.
        * General Notes - Supports complex data type key-value stores, in-memory database with fast query capabilities.
    Hadoop -
        * Storage Type - Distributed file system/MapReduce.
        * Schema - Flexible data types.
        * Ease of Use - Fairly difficult setup.
        * Architecture - Distributed clusters.
        * General Speed - Very slow, especially with small data sets.
        * Speed at Scale - Slowest.
        * General Notes - Ideal for storing and processing huge datasets for batch processing; slow performance with small datasets but efficient for big data processing.


4. Scalling RDBMS & NOSQL.
Answer :


5. In-Memory Databases.
Answer :


6. Graph Databases.
Answer :
Graph DBs - 
    * Graph databases store nodes and relationships instead of tables or documents.
    * Data is stored in a flexible manner, resembling ideas sketched on a whiteboard.
    * Allows for a dynamic, unrestricted model of data storage.
Why Graph DBs -
    * In our interconnected world, understanding domains requires processing rich sets of connections.
    * Connections between items are often as crucial as the items themselves.
Comparison with Traditional Databases -
    * Traditional relational databases handle relationships poorly, relying on expensive JOIN operations or cross-lookups.
    * Graph databases store relationships natively alongside data nodes, eliminating the need for JOINs or lookups.
    * Optimized for fast data traversal, enabling millions of connections per second, per core.
Challenges Addressed by Graph Databases -
    * Modern data problems involve many-to-many relationships with heterogeneous data.
    * Needs include navigating deep hierarchies, finding hidden connections between distant items, and discovering inter-relationships between items.
Applications of Graph Databases -
    * Social networks, payment networks, and road networks are all examples of interconnected graphs of relationships.
    * Questions about the real world often revolve around relationships rather than individual data elements.


7. Indexing.
Answer :


8. Master-Slave Architecture.
Answer :
Master-Slave Architecture -
    * Master-slave architecture involves two types of databases: one master and multiple slaves.
Role of Master Database -
    * Primary source of truth, where all write operations occur.
    * Handles tasks such as inserting, updating, and deleting data.
Role of Slave Databases -
    * Slaves replicate data from the master database.
    * Read operations are primarily performed on slave databases, reducing the load on the master.
Data Replication -
    * Process of copying data from the master to the slaves.
    * Ensures that all slaves have an up-to-date copy of the data from the master.
Advantages -
    * Improves read scalability by distributing read requests across multiple slaves.
    * Reduces the load on the master database, improving overall system performance.
Use Cases -
    * Used in microservices architectures to handle high read volumes efficiently.
    * Suitable for scenarios where data consistency can tolerate eventual consistency between the master and slaves.


9. Master-Master Architecture.
Answer :
Master-Master Architecture -
    * Master-master architecture involves two or more databases, each acting as a master.
    * Unlike master-slave, all databases in master-master architecture can handle both read and write operations.
Symmetric Replication -
    * In master-master replication, each master database can accept write operations independently.
    * Changes made to one master are replicated to all other masters in the architecture.
Active-Active Configuration -
    * Both master databases are active and can serve read and write requests simultaneously.
    * Configuration enhances fault tolerance and availability since each master can serve requests independently.
Conflict Resolution -
    * One challenge in master-master replication is resolving conflicts that may arise when the same data is modified on different masters.
    * Conflict resolution strategies, such as timestamp-based or application-based conflict resolution, are employed to handle conflicts.
Load Distribution -
    * Master-master architecture distributes both read and write loads across multiple databases, improving scalability and performance.
    * Allows for horizontal scaling by adding more master nodes to the architecture.
Use Cases -
    * Suitable for applications requiring high availability, fault tolerance, and distributed write capability.
    * Commonly used in scenarios where write operations need to be distributed across geographically dispersed locations.


10. ACID vs BASE.
Answer :

*/