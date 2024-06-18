/*

1. What is a DB ?
Answer :
Data - Collection of a distinct small unit of information.
Database - Structured Collection of data that is organized in a way that makes it easy to access, manage, and update.
Example of DB - Think of a library catalog where books are stored systematically with details like title, author, and genre.
Main Purpose of DB - Operate a large amount of information by storing, retrieving, and managing data.
Evolution of Databases :-
    File-Based Systems :
        Data Storage -> Data is stored in flat files using a specific format determined by the application.
        Demerit -> Lack of data independence and redundancy. Each application manages its own files, leading to data duplication and inconsistency. Limited data retrieval capabilities.
    Hierarchical Databases :
        Data Storage -> Organized in a tree-like structure with parent-child relationships.
        Demerit -> Rigidity in data organization. Difficult to represent complex relationships and hierarchical structures. Navigation through the hierarchy can be cumbersome.
    Network Databases :
        Data Storage -> Similar to hierarchical databases but with more flexible relationships between records.
        Demerit -> Complexity in managing and navigating networks of interconnected records. Lack of standardization and interoperability(means that different systems or software can work together seamlessly and without conflict ie-compatibility) between systems.
    Relational Databases :
        Data Storage -> Data is stored in tables with rows and columns. Relationships between tables are established using keys.
        Demerit -> Limited scalability and performance issues with large datasets. Complex joins and normalization processes can lead to reduced query performance.
    Object-Oriented Databases :
        Data Storage -> Data is stored as objects with attributes and methods, similar to object-oriented programming.
        Demerit -> Limited adoption due to the complexity of mapping objects to relational structures. Lack of standardization and interoperability with existing systems.
    NoSQL Databases :
        Data Storage -> Various data models including document-oriented, key-value, columnar, and graph databases. Designed for flexibility and scalability.
        Demerit -> Relational databases struggled with scalability and flexibility, especially with unstructured and semi-structured data. NoSQL databases were introduced to address these limitations and provide better performance and scalability for modern web applications.
    NewSQL Databases :
        Data Storage -> Combines the scalability of NoSQL databases with the ACID properties of traditional relational databases.
        Demerit -> Traditional relational databases lacked horizontal scalability, especially in distributed environments. NewSQL databases were introduced to provide the benefits of relational databases while addressing scalability challenges.
    Cloud Databases :
        Data Storage -> Hosted on cloud platforms, providing scalability, accessibility, and managed services.
        Demerit -> Traditional on-premise databases required significant infrastructure investment and maintenance. Cloud databases offer cost-effective solutions and easy scalability for businesses of all sizes.
    Distributed Databases : 
        Data Storage -> Data is distributed across multiple nodes for improved performance, fault tolerance, and scalability.
        Demerit -> Traditional centralized databases faced challenges with scalability and fault tolerance. Distributed databases were introduced to address these issues and provide better performance and resilience in distributed environments.
    Blockchain Databases :
        Data Storage -> Data is stored in a decentralized and tamper-proof manner using cryptographic techniques.
        Demerit -> Traditional databases were vulnerable to data tampering and lacked transparency in transaction history. Blockchain databases provide immutable ledgers and transparent transaction records, primarily used in cryptocurrencies and supply chain management to address these issues.

2. What is DBMS ?
Answer :
DBMS - DataBase Management System , is a software that allows users to interact with a database. It provides functionalities to create, retrieve, update, and delete data from the database.
Example of DBMS - MySQL, PostgreSQL, Oracle etc.
DBMS vs FFMS(Flat File Management System) - Transition from flat file management systems to DBMS was driven by the need for centralized, efficient, and reliable data management solutions that could handle the increasing volume and complexity of data in modern applications. DBMS provides a structured and organized approach to data storage and management, offering numerous advantages over flat file systems in terms of scalability, integrity, security, and ease of use.
When not to use DBMS - Not recommended when you do not have the budget or the expertise to operate a DBMS. In such cases, Excel/CSV/Flat Files could do just fine.

3. Why do we need DBMS ?
Answer :
Need of DBMS - DBMS helps in efficiently managing large volumes of data, ensuring data integrity, providing security, and supporting concurrent access by multiple users.
Example of Why We Need DBMS - In a file management system, each department in a company may have its own file for employee records. In a DBMS, all employee records may be stored in a single table with relationships to other tables like departments and salaries.
Reasons Why We Need DBMS :-
    Data Organization and Management -> DBMS helps organize and manage data efficiently by storing it in structured formats like tables, making it easier to find, update, and retrieve information.
    Data Security and Privacy -> DBMS includes features to secure data from unauthorized access, ensuring that only authorized users can view or modify sensitive information, thus maintaining privacy.
    Data Integrity and Consistency -> DBMS enforces rules to maintain data accuracy and consistency, preventing errors or inconsistencies that may occur due to incorrect data entry or updates.
    Concurrent Data Access -> DBMS allows multiple users to access and modify data simultaneously without conflicting with each other, ensuring smooth and efficient collaboration.
    Data Analysis and Reporting -> DBMS provides tools for analyzing and generating reports from large datasets, enabling businesses to gain insights and make informed decisions based on their data.
    Scalability and Flexibility -> DBMS can handle growing amounts of data and adapt to changing business needs, providing scalability and flexibility to accommodate expanding data requirements.
    Cost-Effectiveness -> Using DBMS can be cost-effective in the long run by reducing the need for manual data management, minimizing errors, and optimizing resource usage, ultimately saving time and money.

4. File Management System vs DBMS.
Answer :
Difference Between Both - File Management System organizes data into files while DBMS organizes data into tables with relationships.
Example of Difference Between Both - In a file management system, each department in a company may have its own file for employee records. In a DBMS, all employee records may be stored in a single table with relationships to other tables like departments and salaries.
Basis for Differentiation :-
    Sharing of Data -> DBMS(Centralized access) and File(Isolated, decentralized storage).
    Data Abstraction -> DBMS(Simplifies complex data handling) and File(Direct data access).
    Security and Protection -> DBMS(Granular access controls, encryption) and File(Limited security features).
    Recovery Mechanism -> DBMS(Automated backup, transaction logging) and File(Manual backup).
    Manipulation Techniques -> DBMS(Standardized queries, transactions) and File(Custom code required).
    Concurrency Problems -> DBMS(Manages simultaneous access) and File(Risk of data corruption).
    Where to use -> DBMS(Complex data structures) and File(Simple data storage).
    Cost -> DBMS(Initial investment, long-term efficiency) and File(Low initial cost).
    Data Redundancy and Inconsistency -> DBMS(Minimized redundancy, ensured consistency) and File(Potential redundancy, inconsistency).
    Structure -> DBMS(Relational, structured tables) and File(Unstructured, flat files).
    Data Independence -> DBMS(Logical and physical separation) and File(Direct storage access).
    Integrity Constraints -> DBMS(Enforced rules for data accuracy) and File(Limited integrity checks).
    Data Models -> DBMS(Various models (relational, object-oriented)) and File(No predefined model).
    Flexibility -> DBMS(Adaptable to changing needs) and File(Limited adaptability).

5. What is DB Admin & its Function?
Answer :
Who is DB Admin - Database Administrator also know as DB Admin , is responsible for managing and maintaining the database system. Their functions include setting up users, managing security, optimizing performance, and ensuring data backups.
Example of DB Admin - A DB Admin might create new user accounts for employees, grant them appropriate access permissions, and monitor database performance.

6. DB Tier2 / Tier3 Architecture.
Answer :
DB Tier-2 Architecture :-
    Architecture -> Application logic resides either in the User Interface (UI) on the client side or within the database on the server side, or sometimes in both.
    Application Logic -> Can be tightly coupled with the UI or the database, leading to potential complexity and maintenance challenges.
    Client Environment -> Typically, the user's desktop or local machine hosts the UI, which interacts directly with the database.
    Server Environment -> The database management services are hosted on a server, often a powerful machine capable of servicing multiple clients.
    Simple Architecture -> Easy to set up and manage.
    Limited Scalability -> Handling large volumes of data or numerous users may lead to performance issues.
    Tight Coupling -> Changes in the UI or database may require modifications in both layers, leading to maintenance challenges.
DB Tier-3 Architecture :-
    Architecture -> Application logic or processing is separated from the data storage and user interface, residing in a middle tier.
    Middle tier -> Acts as an intermediary between the user interface and the database, housing the application logic or business processes.
    Scalability and Flexibility -> Three-tier architectures are more scalable, robust, and flexible compared to two-tier architectures.
    Integration -> Can integrate data from multiple sources and support complex business processes.
    Various Implementations -> The middle tier can be implemented using transaction processing monitors, message servers, or application servers.
    Scalability -> Can handle larger volumes of data and support more concurrent users due to the separation of concerns.
    Robustness -> Failure in one tier (e.g., UI or database) doesn't necessarily affect the entire system, enhancing fault tolerance.
    Flexibility -> Changes in the UI or database can be isolated from the application logic, making maintenance and updates easier.
    Integration -> Supports integration with other systems or data sources, facilitating data aggregation and analysis.

7. DB Languages.
Answer :
Types :-
        DCL -> Data Control Language -> Used to control access permissions to data.
        DDL -> Data Definition Language -> Used to define and modify the structure of the database.
        DML -> Data Manipulation Language -> Used to retrieve, insert, update, and delete data.
        TCL -> Transaction Control Language -> Used to manage transactions within the database.
        DQL -> Data Query Language -> Used to retrieve specific data from the database.
DCL Commands :-
    GRANT -> Allows users to grant specific permissions to other users or roles.
    REVOKE -> Revokes previously granted permissions from users or roles.
DDL Commands :-
    CREATE -> Used to create new database objects such as tables, indexes, or views.
    ALTER -> Modifies the structure of existing database objects, such as adding or dropping columns.
    DROP -> Deletes existing database objects such as tables, indexes, or views.
    TRUNCATE -> Removes all records from a table, but retains the table structure.
DML Commands :-
    SELECT -> Retrieves data from one or more tables based on specified criteria.
    INSERT -> Adds new records or rows into a table.
    UPDATE -> Modifies existing records in a table based on specified conditions.
    DELETE -> Removes records from a table based on specified conditions.
TCL Commands :-
    COMMIT -> Saves all changes made during the current transaction to the database.
    ROLLBACK -> Undoes all changes made during the current transaction and restores the database to its previous state.
    SAVEPOINT -> Sets a point within a transaction to which you can later roll back.
    SET TRANSACTION -> Specifies characteristics for the transaction, such as isolation level or transaction mode.

8. Important Terms.
Answer :
Instance -> A particular occurrence of a database at a given moment in time. Every time we update the state say we insert, delete or modify the value of the data item in the record, it changes from one state to other. At the given time, each schema has its own set of instances.
Schema -> The logical structure of the database, including tables, relationships, and constraints. Important thing to be remembered here is it should not be changed frequently. Basically, it displays the record types(entity),names of data items(attribute) but not the relation among the files. Interesting point is the values in schema might change but not the structure of schema. Schema can be partitioned as logical schema and physical schema.
Sub-Schema -> A subset of the schema that is visible to a particular user or application.

9. How DBMS is Implemented ?
Answer :
Implementation - DBMS can be implemented using various architectures like client-server, peer-to-peer, or distributed.
Example of Implementation - In a client-server architecture, clients send requests to the server which then interacts with the database to fulfill those requests.

10. What is DB Abstraction in DBMS ?
Answer :
Abstraction - Process of hiding irrelevant details from the user or Process of hiding unwanted data is called Data Abstraction.
What DB Abstraction Does - DB abstraction hides the complex internal details of the database from the user, providing a simplified interface for interaction.
Example of DB Abstraction - A programmer can perform database operations like querying and updating data without needing to know the underlying storage mechanisms.

11. 3 Levels of Data Abstraction(3 Level Schema / 3 Schema Architecture).
Answer :
3 Levels :-
    View Level -> Describes how data is presented to users or applications.
    Logical(Conceptual) Level -> Describes the structure of the database, including tables, relationships, and constraints.
    Physical Level -> Describes how data is stored on the storage medium. Physical level tells us that where the data is actually stored i.e. it tells the actual location of the data that is being stored by the user. The Database Administrators(DBA) decide that which data should be kept at which particular disk drive, how the data has to be fragmented, where it has to be stored etc. They decide if the data has to be centralized or distributed. Though we see the data in the form of tables at view level the data here is actually stored in the form of files only. It totally depends on the DBA, how he/she manages the database at the physical level.
Example of 3 Levels - A user might view employee data in a table format without needing to know how it is physically stored or logically structured.

12. What is Referential Integrity ?
Answer :
Primary Key - Unique identifier for each record in a table.
Foreign Key - Column or set of columns in one table that refers to the primary key in another table.
Referential Integrity Rule - This Rule in DBMS is based on Primary and Foreign Key. Rule defines that a Foreign key have a matching Primary key. Reference from a table to another table should be valid.
What This Rule Does - Referential Integrity ensures that relationships between tables are maintained, meaning that Foreign key values in one table must match Primary key values in another table.
Example of Referential Integrity - In a database of students and courses, referential integrity ensures that every course enrolled by a student corresponds to a valid course record in the courses table.

*/