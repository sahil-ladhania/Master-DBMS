/*

1. How does a relational DBMS internally store its data? In what type of data structure? How does it offer the rapid retrieval without loading the entire database into the main memory (I have heard many DBMS use B-trees)?
Answer :
Data Structure Used :-
    B-trees(Balanced Trees) - 
        * Self-balancing tree data structure.
        * Maintains sorted data.
        * Facilitates efficient insertion, deletion, and search operations.
        * Well-suited for databases due to their ability to handle large amounts of data.
        * Maintain balance even as the dataset grows or changes.
Storage of Data :-
    Tables -
        * Data organized into tables.
        * Each table contains rows and columns.
        * Each row represents a record or tuple.
        * Each column represents a specific attribute or field.
    Indexes - 
        * Used to facilitate rapid data retrieval.
        * Separate data structures from the main table.
        * Store a subset of data from one or more columns.
        * Include pointers to the corresponding rows.
        * Enable the database to quickly locate and access desired rows without scanning the entire table.
Rapid Retrieval without Loading Entire Database :-
    * B-trees facilitate rapid retrieval by providing efficient search operations. When you execute a query, the RDBMS uses the indexes (often B-trees) to locate the relevant rows based on the search criteria specified in the query.
    * Instead of loading the entire database into main memory, the RDBMS selectively loads portions of the database into memory as needed. This is achieved through a combination of caching mechanisms, query optimization techniques, and disk-based storage structures like B-trees.
    * When a query is executed, the RDBMS uses the indexes to identify the relevant rows, fetches those rows from disk into memory, and performs any necessary operations (such as joins or aggregations) on the retrieved data.
    * By leveraging efficient data structures like B-trees and employing intelligent data retrieval strategies, RDBMS can offer rapid access to data without the need to load the entire database into main memory.


2. What is the meaning of “Relational” in RDBMS ?
Answer :
The term "relational" refers to the way data is organized in tables and how these tables are related to each other using keys.
Benefits of RDBMS :-
    Structured Data
    ACID Properties
    Normalization
    Scalability
    Data Integrity
    Security
Limitations of RDBMS :-
    Complexity
    Cost
    Fixed Schema
    Handling of Unstructured Data
    Horizontal Scalability


3. Degree of Relation.
Answer :
These ratios describe the relationship between entities in the database.
There are four types of relationships that can exist between two entities. An entity-relationship (ER) diagram can be created based on these four types :-
    1:1 (one to one) - 
        * Each record in one table corresponds to exactly one record in another table.
        * Ex - In a traditional American marriage, a man can be married to only one woman; a woman can be married to only one man.
    1:M (one to many) - 
        * One record in one table can be related to multiple records in another table.
        * Ex - A child has exactly one biological father; a father can have many biological children.
    M:1 (many to one) - 
        * Multiple records in one table can be related to a single record in another table.
        * Ex - Multiple employees work under one manager.
    M:M (many to many) - 
        * Multiple records in one table can be related to multiple records in another table.
        * Ex - A student can enroll in many classes; a class can have many enrolled students.


4. Keys. ------> Understand Practically
Answer :
Keys are one of the basic requirements of a relational database model. It is widely used to identify the tuples(rows) uniquely in the table. We also use keys to set up relations amongst various columns and tables of a relational database.
There are mainly 6 types of Keys :-
        Primary Key - Unique identifier for each record in a table.
        Foreign Key - Field in one table that refers to the primary key in another table, establishing a relationship between them.
        Candidate Key - Key that can uniquely identify each row in a table.
        Alternate Key - Candidate key that is not selected as the primary key.
        Super Key - Set of attributes that can uniquely identify a row within a table.
        Secondary Key - Non-Primary key used for indexing and retrieval.
        Composite Key - Combination of two or more columns that together uniquely identify each record within a table.


5. DB Schema. ------> Understand Practically
Question : 
Database schema is the skeleton structure that represents the logical view of the entire database.
Database schema can be divided broadly into two categories :-
        Physical DB Schema - Represents the actual physical arrangement of data on storage devices.
        Logical DB Schema - Represents the logical structure of the entire database, including tables, relationships, and constraints.


6. Schema Diagrams. ------> Understand Practically
Answer :
To understand Schema Diagrams you have to understand : ER Model & Relation Model & ER-to-Relational-Model-Conversion.
    ER(Entity-Relationship) Model - Visual representation of entities, attributes, and relationships within a database.
    Relation Model - Represents the structure of data using tables, columns, and relationships.
    ER to Relational Model Conversion - Process of translating an ER diagram into a set of relational tables.
--ER Model--
ER Model - Entity-Relationship (ER) model is a conceptual data model used to describe the data and its relationships in a system. It represents the real-world entities, their attributes, and the relationships among them.
Purpose & Importance :-
    * Clarity & Organization
    * Communication
    * DB Design 
    * Scalability
Components of ER Model :-
    * Entity - Entity represents a real-world object, such as a person, place, thing, or event. Each entity has attributes that describe its properties.
    * Attribute - Attributes are the properties or characteristics of an entity. For example, in an "Employee" entity, attributes could include "Name," "Employee ID," and "Salary."
    * Relationship - Relationships define how entities are associated with each other. They indicate the connections and dependencies between entities. Relationships can be one-to-one, one-to-many, or many-to-many.
Symbols used in ER Model :-
    Rectangles - Rectangles represent Entities in the ER Model.
    Ellipses - Ellipses represent Attributes in the ER Model.
    Diamond - Diamonds represent Relationships among Entities.
    Lines - Lines represent attributes to entities and entity sets with other relationship types.
    Double Ellipse - Double Ellipses represent Multi-Valued Attributes.
    Double Rectangle - Double Rectangle represents a Weak Entity.
Components of ER Model :-
    Entity
        Strong Entity - Entity that exists independently of other entities. It has its own unique identifier called a primary key. For example, in a university database, the "Student" entity is a strong entity because each student can exist on their own with a unique student ID.
        Weak Entity - Entity that depends on another entity (known as its owner entity) for its existence. It does not have a primary key unless it's associated with its owner entity. For example, in a library database, the "BookCopy" entity might be a weak entity because it depends on the "Book" entity for its existence.
    Attribute
        Key Attribute - Attribute that uniquely identifies an entity within its entity set. It's typically used as a primary key. For example, in the "Student" entity, the "Student_ID" attribute can be a key attribute.
        Composite Attribute - Attribute that can be divided into smaller sub-parts, each with its own meaning. For example, an "Address" attribute can be divided into "Street," "City," "State," and "Zip Code."
        Multivalued Attribute - Attribute that can hold multiple values for a single entity. For example, the "Phone Numbers" attribute in the "Employee" entity might have multiple phone numbers associated with it.
        Derived Attribute - Attribute whose value is derived from other attributes in the database. It's not stored explicitly but can be calculated using other attributes. For example, the "Age" attribute in the "Employee" entity can be derived from the "Date of Birth" attribute.
    Relationship
        One to One - Exists when each entity in the relationship is associated with exactly one instance of the other entity. For example, in a "Person" and "Passport" relationship, each person has exactly one passport, and each passport belongs to exactly one person.
        One to Many - Exists when one entity in the relationship is associated with multiple instances of the other entity, but each instance of the other entity is associated with only one instance of the first entity. For example, in a "Department" and "Employee" relationship, one department can have many employees, but each employee belongs to only one department.
        Many to One - Reverse of a one-to-many relationship. It exists when multiple instances of one entity are associated with exactly one instance of the other entity. For example, in a "City" and "Country" relationship, many cities can belong to one country, but each city belongs to only one country.
        Many to Many - Exists when multiple instances of each entity are associated with multiple instances of the other entity. For example, in a "Student" and "Course" relationship, each student can enroll in multiple courses, and each course can have multiple students enrolled in it.
Relationship Type and Relationship Set :-
    Relationship Type - Relationship type defines the association or connection between two or more entities in the ER model. It specifies how entities are related to each other and describes the semantics of the relationship. For example, in a university database, the "Teaches" relationship type might define the association between the "Instructor" and "Course" entities.
    Relationship Set - A relationship set is a collection of similar relationships. It represents all instances of a particular relationship type occurring at a given point in time. For example, the "Teaches" relationship set would contain all instances of instructors teaching courses in the university database.
Degree of a Relationship Set :-
    Unary Relationship Set - A unary relationship set involves a single entity type. It represents a relationship within the same entity set. For example, in an organization, the "Reports To" relationship set might represent the hierarchical relationship among employees where each employee reports to another employee.
    Binary Relationship Set - A binary relationship set involves two entity types. It represents a relationship between entities of two different entity sets. For example, the "Enrolls In" relationship set in a university database connects students with the courses they enroll in.
    n-Ary Relationship Set - An n-ary relationship set involves more than two entity types. It represents a relationship among entities of multiple entity sets. For example, in a hospital database, the "Consults" relationship set might involve doctors, patients, and medical conditions, indicating which doctor consults which patient for a particular medical condition.
Cardinality :-
    Cardinality defines how many instances of one entity can be associated with how many instances of another entity through a relationship set.
    4 Types of Cardinalilty :-
        One to One 
        One to Many 
        Many to One
        Many to Many 
Participation Constraint :-
    Participation constraint, also known as participation cardinality or total participation, defines the minimum number of instances of one entity set that can be associated with the number of instances of another entity set through a relationship set.
    Specifies whether every entity in one entity set must participate in at least one relationship in the relationship set.
    2 Types of Participation Constraint :-
        Total Participation (Total) - This means that every entity in one entity set must participate in at least one relationship instance in the relationship set. It is denoted by a single line drawn from the entity set to the relationship set.
        Partial Participation (Partial) - This means that not every entity in one entity set needs to participate in a relationship instance in the relationship set. It allows entities to exist without having a corresponding relationship instance. It is denoted by a circle or "o" symbol drawn from the entity set to the relationship set.
        Ex - 
            * Consider two entity sets, "Department" and "Employee," with a relationship set "Works In" representing the association between employees and the department they work in.
            * If every employee must work in exactly one department, we have total participation from the "Employee" side. This means every employee instance must be associated with a department. Similarly, if every department must have at least one employee, we have total participation from the "Department" side. This ensures that every department has at least one employee.
            * If it's possible for an employee to not be assigned to any department (e.g., contractors or freelancers), we have partial participation from the "Employee" side. This means not every employee needs to be associated with a department. Similarly, if it's possible for a department to exist without any employees (e.g., newly formed department), we have partial participation from the "Department" side.

--Relation Model-- 
Relational Model - Relational model is a database model based on the mathematical concept of relations. It organizes data into tables (relations) where each table consists of rows (tuples) and columns (attributes). The relational model was proposed by Edgar F. Codd in 1970 and has since become the most widely used database model.
Purpose and Importance :-
    * Simplicity and Flexibility
    * Data Integrity
    * Data Independence
    * Query Capabilities
Components of the Relational Model :-
    Tables (Relations) - Fundamental building blocks of the relational model. Each table represents a relation and consists of rows and columns. For example, a "Student" table may have columns such as Student_ID, Name, and Age.
    Rows (Tuples) - Also known as tuples, represent individual records in a table. Each row contains a set of values corresponding to the attributes defined for that table.
    Columns (Attributes) - Also known as attributes, represent the properties or characteristics of the entities being modeled. Each column has a name and data type, defining the kind of data it can hold.
    Keys - Used to uniquely identify rows in a table. The primary key uniquely identifies each row in the table, while foreign keys establish relationships between tables.
Note :-
    Record - Broader concept that refers to a complete set of data values associated with a specific entity or entry in the database. It may include data from multiple tables and represents all the information related to that entity.
Important Terms :-
    Attribute - Properties that define an entity. For example, in a "STUDENT" relation, attributes could include ROLL_NO, NAME, ADDRESS, PHONE, and AGE.
    Relation Schema - Defines the structure of the relation and represents the name of the relation with its attributes. For instance, the schema for the "STUDENT" relation would be STUDENT(ROLL_NO, NAME, ADDRESS, PHONE, AGE).
    Tuple - Each row in the relation is known as a tuple. A tuple contains a set of values corresponding to the attributes defined in the relation. For example, a tuple in the "STUDENT" relation could be (1, 'RAM', 'DELHI', 9455123451, 18).
    Relation Instance - Set of tuples of a relation at a particular instance of time is called a relation instance. For example, if we have four tuples in the "STUDENT" relation at a given time, it forms the relation instance for that time.
    Degree - Number of attributes in the relation is known as the degree of the relation. For instance, if the "STUDENT" relation has attributes ROLL_NO, NAME, ADDRESS, PHONE, and AGE, its degree would be 5.
    Cardinality - Number of tuples in a relation is known as cardinality. For example, if there are four tuples in the "STUDENT" relation, its cardinality would be 4.
    Column - Column represents the set of values for a particular attribute. For example, the ROLL_NO column in the "STUDENT" relation contains values for the ROLL_NO attribute.
    NULL Values - Represent unknown or unavailable data. They are represented by a blank space. For example, if the PHONE attribute for a student with ROLL_NO 4 is not known, it would be represented as NULL.
    Relation Key - Used to uniquely identify rows or tables in the database. Types include :-
        Primary Key
        Candidate Key
        Super Key
        Foreign Key
        Alternate Key
        Composite Key
Constraints in Relational Model :-
    Domain Constraints - Attribute-level constraints that restrict values to lie within a specified domain range. For ex - In a "STUDENT" table, the AGE attribute must be between 18 and 25.
    Key Integrity - Ensures that every relation has at least one set of attributes that uniquely identifies a tuple. For ex - Each student in the "STUDENT" table must have a unique ROLL_NO.
    Referential Integrity -Ensures that values in one attribute of a relation are taken from another attribute in the same or different relation. For ex - The COURSE_ID entered for a student in the "STUDENT" table must exist in the "COURSE" table.
Anomalies in the Relational Model :-
Anomaly - Unexpected or undesirable behavior that occurs when performing operations such as insertion, deletion, or updation on the data stored in the database tables. Anomalies can lead to inconsistencies, loss of data integrity, and difficulties in maintaining and querying the database.
3 Types of Anomalies :-
    Insertion Anomaly - Occurs when it's not possible to add data to a database without adding unrelated data. For example, in a table with a foreign key constraint referencing another table, you may not be able to insert a row into the referencing table if the related row doesn't exist in the referenced table.
    Deletion Anomaly - Occurs when deleting data from a database results in unintended loss of related data. For example, deleting a row from a table may inadvertently delete related rows from other tables, leading to loss of information.
    Updation Anomaly - Occurs when updating data in a database leads to inconsistencies or unintended consequences. For example, updating a primary key value in one table may require updating corresponding foreign key values in other tables to maintain data integrity.
Codd Rules in Relational Model :-
Edgar F Codd proposed the relational database model where he stated rules. Now these are known as Codd’s Rules. For any database to be the perfect one, it has to follow the rules. There are 12 Rules.


7. Relational Operations. ------> Understand Practically
Answer :
Select
Project
Union
Set Different
Cartesian Product
Rename


8. What is SQL ?
Answer :
SQL (Structured Query Language) is a standard language for interacting with relational databases.
MySQL and PostgreSQL are both relational database management systems (RDBMS) that utilize SQL as their query language, but they are different implementations of SQL databases.


9. Difference between SQL & MYSQL.
Answer :
SQL is a standard language for relational databases, while MySQL is a specific implementation of a relational database management system (RDBMS) that uses SQL as its query language.


10. Important Keywords. ------> Understand Practically
Answer :
Keywords are reserved words in SQL that have special meanings and cannot be used as identifiers (such as table or column names).
SQL is case insensitive, it does not matter if we use , SELECT or select.
List of SQL Keywords :-
    CREATE
    PRIMARY KEY
    INSERT
    SELECT
    FROM
    ALTER
    ADD
    DISTINCT
    UPDATE
    SET
    DELETE
    TRUNCATE
    AS
    ORDER BY
    ASC
    DESC
    BETWEEN
    WHERE
    AND
    OR
    NOT
    LIMIT
    IS NULL
    DROP
    DROP COLUMN
    DROP DATABASE
    DROP TABLE
    GROUP BY
    HAVING
    IN
    JOIN
    UNION
    UNION ALL
    EXISTS
    LIKE
    CASE


11. Cheatsheet SQL. ------> Understand Practically
Answer :


12. Composite Key in SQL. ------> Understand Practically
Answer :
A composite key is a key that consists of multiple columns, used together to uniquely identify rows in a table.


13. What is JOIN and its Types ? ------> Understand Practically
Answer :
JOIN is used to combine rows from two or more tables based on a related column between them.
Types of JOINs :-
    INNER JOIN - Selects all rows from both the tables as long as the condition is satisfied. Value of the common field will be the same. We can also write JOIN instead of INNER JOIN. JOIN is same as INNER JOIN.
    LEFT JOIN - Returns all the rows of the table on the left side of the join and matches rows for the table on the right side of the join. For the rows for which there is no matching row on the right side, the result-set will contain null. We can also use LEFT OUTER JOIN instead of LEFT JOIN.
    RIGHT JOIN - Returns all the rows of the table on the right side of the join and matching rows for the table on the left side of the join. For the rows for which there is no matching row on the left side, the result-set will contain null. We can also use RIGHT OUTER JOIN instead of RIGHT JOIN.
    FULL JOIN - Creates the result-set by combining results of both LEFT JOIN and RIGHT JOIN. Result-set will contain all the rows from both tables. For the rows for which there is no matching, the result-set will contain NULL values.
    NATURAL JOIN - Join tables based on the common columns in the tables being joined. Returns all rows by matching values in common columns having same name and data type of columns and that column should be present in both tables. Both table must have at list one common column with same column name and same data type.


14. What is a View ? ------> Understand Practically
Answer :
Views in SQL are kind of virtual tables.
View also has rows and columns as they are in a real table in the database.
We can create a view by selecting fields from one or more tables present in the database.
View can either have all the rows of a table or specific rows based on certain condition. 
We can create , delete and update Views. 


15. What is a Trigger ? ------> Understand Practically
Answer :
Stored Procedure - Stored Procedure is a precompiled collection of SQL statements that can be executed by invoking the procedure's name. It is stored in the database and can be called by applications or other stored procedures.
Trigger - A trigger is a special type of stored procedure that is automatically executed in response to certain events, such as INSERT, UPDATE, or DELETE operations on a table. Triggers are associated with specific tables and are invoked when the specified events occur.
Trigger is a collection of SQL statements with particular names that are stored in system memory.
Belongs to a specific class of stored procedures that are automatically invoked in response to database server events.
Every trigger has a table attached to it.
Because a trigger cannot be called directly, unlike a stored procedure, it is referred to as a special procedure.
Trigger is automatically called whenever a data modification event against a table takes place, which is the main distinction between a trigger and a procedure.
On the other hand, a stored procedure must be called directly.


16. Difference between Unique & Primary Key in SQL.
Answer :
Both unique and primary keys enforce uniqueness constraints on columns, but a primary key also implies that the column cannot contain null values.
Table can have only one primary key whereas there can be multiple unique keys on a table.
Primary Key can be a Unique Key, but a Unique Key cannot be a Primary key.


17. What is SQL Injection ?
Answer :
SQL injection is a security vulnerability that occurs when an attacker is able to manipulate SQL queries through user input.
Code injection technique that might destroy your database.
One of the most common web hacking techniques.
Placement of malicious code in SQL statements, via web page input.
SQL injection usually occurs when you ask a user for input, like their username/userid, and instead of a name/id, the user gives you an SQL statement that you will unknowingly run on your database.


18. Delete vs Truncate. ------> Understand Practically
Answer :
DELETE is a DML (Data Manipulation Language) operation that removes specific rows from a table based on a condition, while TRUNCATE is a DDL (Data Definition Language) operation that removes all rows from a table without logging individual row deletions.


19. SQL Privileges. ------> Understand Practically
Answer :
SQL privileges define the level of access that users or roles have to perform certain operations on database objects.


20. What do you mean by Subquery ? ------> Understand Practically
Answer :
Subquery is a query nested within another query, used to retrieve data that depends on the result of the outer query.
An SQL Subquery, is a SELECT query within another query. It is also known as Inner query or Nested query and the query containing it is the outer query.
Outer query can contain the SELECT, INSERT, UPDATE, and DELETE statements.
We can use the subquery as a column expression, as a condition in SQL clauses, and with operators like =, >, <, >=, <=, IN, BETWEEN, etc.


21. What is the Difference between Clustered & Non-Clustered Indexes ?
Answer :
Index - Index is a key built from one or more columns in the database that speeds up fetching rows from the table or view. This key helps a Database like Oracle, SQL Server, MySQL, etc. to find the row associated with key values quickly.
Types of Indexes - 
    Clustered Index - Sorts the data rows in the table on their key values. In the Database, there is only one clustered index per table. Clustered index defines the order in which data is stored in the table which can be sorted in only one way. There can be an only a single clustered index for every table. In an RDBMS, usually, the primary key allows you to create a clustered index based on that specific column.
    Non-Clustered Index - Stores the data at one location and indices at another location. Index contains pointers to the location of that data. Single table can have many non-clustered indexes as an index in the non-clustered index is stored in different places. 


22. What is a Cursor ? ------> Understand Practically
Answer :
A cursor is a database object used to retrieve and manipulate result sets row by row.
Temporary Memory or Temporary Work Station.
Allocated by Database Server at the Time of Performing DML(Data Manipulation Language) operations on the Table by the User.
Cursors are used to store Database Tables. 
Types of Cursors :-
    Implicit Cursors - Also known as Default Cursors of SQL SERVER. These Cursors are allocated by SQL SERVER when the user performs DML operations.
    Explicit Cursors - Created by Users whenever the user requires them. Explicit Cursors are used for Fetching data from Table in Row-By-Row Manner.


23. What is Index & its Types ?
Answer :
Index - 
    * Data Structure that improves the speed of data retrieval operations on a database table. 
    * An Index is a small table having only two columns. 
    * First column comprises a copy of the primary or candidate key of a table. 
    * Second column contains a set of pointers for holding the address of the disk block where that specific key value stored. 
    * Takes a search key as input. 
    * Efficiently returns a collection of matching records.
Indexing - Data structure technique which allows you to quickly retrieve records from a database file.
Types of Indexing :-
    Single Level Indexing - Index structure is stored at the same level as the actual data in the database.
        Primary Index - 
            * Created on the primary key of the table. 
            * Sorts the entire table based on the primary key column, allowing for efficient retrieval of data based on the primary key values.
            Dense - 
                * Record is created for every search key valued in the database. 
                * Helps you to search faster but needs more space to store index records. 
                * In this Indexing, method records contain search key value and points to the real record on the disk.
            Sparse - 
                * Index record that appears for only some of the values in the file. 
                * Sparse Index helps you to resolve the issues of dense Indexing in DBMS. 
                * In this method of indexing technique, a range of index columns stores the same data block address, and when data needs to be retrieved, the block address will be fetched. 
                * Sparse Index stores index records for only some search-key values.  
                * It needs less space, less maintenance overhead for insertion, and deletions but It is slower compared to the dense Index for locating records.
        Secondary Index - 
            * Created on non-primary key columns of the table. 
            * Helps speed up the retrieval of data based on the values of these non-primary key columns.
    Multi Level Indexing - Index structure is organized hierarchically into multiple levels, allowing for faster access to data in large databases.
        B-Tree Index - 
            * Commonly used multi-level index structure. Maintains balanced trees to provide efficient search, insertion, and deletion operations.
        B+Tree Index - 
            * Extension of the B-tree index, optimized for range queries and sequential access. 
            * Keeps the leaf nodes linked together, making range queries faster.
        Bitmap Index - 
            * Uses bitmaps to represent the presence or absence of values in the indexed columns. 
            * Suitable for columns with low cardinality, such as boolean or enumerated data types. 
        Hash Index - 
            * Uses hash functions to map key values to index entries, providing fast access to data. 
            * Effective for equality searches but less suitable for range queries.

*/