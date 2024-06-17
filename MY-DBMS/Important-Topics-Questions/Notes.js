/*

1. What does these things means in terms of File-System Disadvantages :
    Data Isolation
    Integrity Problems 
    Atomicity Problems 
    Concurrent Anomalies 
Answer :
Data Isolation - 
    * This refers to the inability to access data across multiple applications or users simultaneously. 
    * For example, in a file system, data belonging to one application may be isolated from data belonging to another.
Integrity Problems - 
    * These occur when data becomes corrupted or inconsistent due to unauthorized access, software bugs, or hardware failures. 
    * For example, if multiple users can modify the same file concurrently, integrity problems may arise.
Atomicity Problems - 
    * Atomicity ensures that either all operations within a transaction are completed successfully or none of them are. 
    * In a file system, atomicity problems may occur when a transaction partially completes, leading to inconsistent data states.
Concurrent Anomalies - 
    * These are inconsistencies that arise when multiple users access and modify data concurrently. 
    * For example, concurrent updates to the same file may result in lost updates or incorrect data.


2. Difference Between Schema & Model.
Answer :
Schema - 
    * It defines the structure and organization of data in a database. 
    * It includes information about the tables, columns, data types, constraints, and relationships. 
    * Essentially, a schema represents the blueprint of a database.
Model - 
    * A model, on the other hand, is an abstract representation of a system. 
    * In the context of databases, a model typically refers to a conceptual or logical representation of the data and its relationships. 
    * It helps in understanding the relationships between various entities in the database.


3. What are Host Languages ?
Answer :
* Programming languages used to embed SQL statements within code. 
* These languages facilitate communication between applications and databases. 
* Examples include C/C++, Java, Python, and PHP.


4. What is ODBC & JDBC ?
Answer :
ODBC (Open Database Connectivity) - 
    * It is a standard API that enables applications to access various database systems using SQL. 
    * ODBC drivers provide a uniform interface for communication between applications and databases.
JDBC (Java Database Connectivity) - 
    * JDBC is a Java API that allows Java applications to interact with databases. 
    * It provides classes and interfaces for executing SQL queries, processing result sets, and managing connections to databases.


5. Ex of these :
    T1 Architecture 
    T2 Architecture
    T3 Architecture
Answer :
T1 Architecture - 
    * This architecture typically involves a single-tier approach where the entire application, including the user interface, business logic, and data storage, resides on a single machine. 
    * An example is a basic desktop application.
T2 Architecture - 
    * In a two-tier architecture, the application is divided into two layers : 
        Client-side (presentation layer) 
        Server-side (data storage and processing layer). 
    * Examples include client-server applications where the client interacts with the server to access data.
T3 Architecture -  
    * Also known as a three-tier architecture, this model separates the presentation, application logic, and data management into three distinct tiers. 
    * Examples include web applications where the presentation layer (client), application logic (middleware), and data storage (database server) are separate components.


6. What exactly is Data Model ? 
Answer :
* Data model is a conceptual representation of the data structures and relationships within a database. 
* It defines how data is organized and accessed. 
* There are different types of data models, including the relational model, hierarchical model, network model, and object-oriented model.


7. What is Null Value in Attribute ?
Answer :
* Null value in an attribute indicates the absence of a value or an unknown value for that attribute in a particular record. 
* It is different from having a blank or zero value. 
* Null values are often used to represent missing or unknown data.


8. Understand Participation Constraint with Example :
    Total 
    Partial 
Answer :
Total Participation - 
    * Also known as mandatory participation, it means every entity in one entity set must participate in a relationship with entities in another set. 
    * For example, in a "Department-Employee" relationship, every employee must belong to a department.
Partial Participation - 
    * In contrast, partial participation allows entities to exist without participating in a relationship. 
    * For example, in a "Customer-Order" relationship, a customer may place zero or more orders, but it's not mandatory for every customer to have placed an order.


9. When to use Specialisation & When to use Generalisation ?
Answer :
Specialization - 
    * It is used when you want to represent a subset of entities from a higher-level entity set that has distinct characteristics.
    * For example, in an "Employee" entity set, you might have specializations like "Manager" and "Developer" to represent employees with specific roles.
Generalization - 
    * Generalization, on the other hand, is used to represent the aggregation of entities with common attributes into a higher-level entity set. 
    * It's the reverse process of specialization. 
    * For example, if you have "Manager" and "Developer" entities, you can generalize them into a higher-level "Employee" entity set.


10. Why Specialisation & Why Generalisation ?
Answer :
Specialization - 
    * It allows for modeling of specific characteristics unique to certain subsets of entities, leading to a more accurate representation of the real-world domain.
Generalization - 
    * Generalization helps in simplifying the data model by identifying common attributes and relationships among entities, thereby promoting reusability and reducing redundancy.


11. What does this means :
    Attributes of higher level entity sets are inherited by lower level entity sets.
Answer :
* Means that attributes defined at a higher level of specialization or generalization are automatically inherited by lower-level entity sets. 
* For example, if the "Employee" entity set has attributes like "Name" and "ID," then the "Manager" and "Developer" entity sets, which are specializations of "Employee," will inherit these attributes.


12. Aggregation :
    How to show relationships among relationship ?
    What is Abstraction ?
Answer :
Aggregation - 
    * Aggregation in DBMS (Database Management System) is the process of combining two or more entities to form a more meaningful new entity. 
    * When the entities do not make sense on their own, the aggregation process is use.
Showing Relationships Among Relationships - 
    * Aggregation allows you to represent relationships between entities and relationships themselves. 
    * For example, in a university database, you might have a "Department" entity that aggregates "Course" entities, which in turn aggregates "Student" entities.
Abstraction - 
    * Hiding unnecessary background details from the end user to make the accessing of data easy and secure.


13. Keys of Relational Model (MYSQL) in Depth.
Answer :
* List of Keys -
    Super Key
    Candidat Key
    Primary Key
    Alternate Key
    Foreign Key
    Composite Key
    Compound Key
    Surrogate Key
* Refer to Image.


14. Difference between these Constraints :
    Domain Constraints
    Key Constraints
    Entity Integrity Constraints
    Referential Integrity Constraints
    Tuple Uniqueness Constraints
Answer :
Domain Constraints -
    * Define the valid values that an attribute (column) can hold.
    * Specify the data type (e.g., integer, string, date) and any additional restrictions (e.g., range of values, allowed patterns).
    * Types of Domain Constraint -
        * CHECK - Way to enforce certain conditions on the values that are stored in a database.
        * NOT NULL - Used to ensure that a column in a table cannot contain any NULL values.
Key Constraints - 
    * Refers to a set of rules applied to one or more columns in a database table to ensure the uniqueness and integrity of data. 
    * Keys are used to uniquely identify rows in a table, and they play a fundamental role in establishing relationships between tables.
Entity Integrity Constraints -
    * Entity Integrity Constraint is essentially a subset of the Key constraint in a database. 
    * While the Key constraint ensures that Primary Key attributes are unique and non-null, the Entity Integrity Constraint specifically emphasizes that no attribute of a Primary Key should contain null values. 
    * This constraint highlights the perspective that allowing null values in Primary Key attributes could lead to multiple null entries, violating the uniqueness requirement for each tuple in the Primary Key. 
    * Therefore, the Entity Integrity Constraint reinforces the importance of non-null values within the Primary Key to maintain the uniqueness of each record in a relational database.
Referential Integrity Constraints -
    * Referential integrity in a database is a crucial concept ensuring data consistency among related tables through primary and foreign keys.
    * The referential integrity constraint is established when a foreign key references the primary key of another table, requiring the referencing attribute to be a subset of the referred attribute.
    * This ensures that records cannot be inserted in the referencing relation unless they exist in the referenced relation. 
    * Furthermore, any record present in the referencing relation cannot be updated or deleted from the referenced relation, maintaining the accuracy and coherence of the relational database
Tuple Uniqueness Constraint -
    * In a database, a Tuple Uniqueness Constraint, also known as a Unique Constraint, ensures that no two tuples (rows) in a table have the same combination of values in specified columns. 
    * This constraint helps maintain the uniqueness of data within a table, similar to the UNIQUE constraint.


15. What happens to Weak Entity when we convert ER to R-Model ?
Answer :
* When converting a weak entity to the relational model (R-Model), you typically represent it as a separate table, with a foreign key referencing the identifying owner entity's primary key.
* For example, consider a database modeling a library system where "BookCopy" is a weak entity dependent on the "Book" entity. In the R-Model, you might have a "BookCopy" table with attributes such as "CopyNumber" and a foreign key referencing the primary key of the "Book" table.


16. Why in table properties :
    Values have to be atomic & cant be broken down further.
Answer :
* In relational databases, each value in a table's attribute (column) must be atomic, meaning it cannot be further divided or decomposed into smaller parts.
* For example, if you have a "Name" attribute in a table, each value in that column should represent a single, indivisible name. Breaking down the name into first name, last name, etc., would violate the atomicity property.
* Ensuring atomicity simplifies data management and query processing in databases.


17. What happens to Multi values Attribute when converting ER to R-Model ?
Answer :
* When converting a multi-valued attribute to the relational model (R-Model), you typically represent it as a separate table with a foreign key referencing the primary key of the entity it belongs to.
* For example, consider an ER model for a social media platform where "Interests" is a multi-valued attribute of the "User" entity. In the R-Model, you might have an "Interests" table with attributes like "UserID" and "Interest," where each row represents a single interest associated with a user.


18. How Generalisation is being converted to Table (ER to R-Model) :
    Different ways of doing it.
Answer :
* When converting a generalization hierarchy (involving superclass and subclasses) to the relational model (R-Model), you have a few options:
    Single Table Approach - 
        * You can represent the entire hierarchy in a single table, with attributes for all properties of both the superclass and subclasses. Subclass-specific attributes can be nullable.
        * For ex - In this approach, you would have a single table named Vehicle with columns for attributes common to all vehicles, such as vehicle_id, brand, model, color, and num_wheels. Additionally, you would include nullable columns for subclass-specific attributes, like num_doors for cars and has_sidecar for motorcycles.
    Class Table Inheritance - 
        * You create a separate table for each subclass, containing only its specific attributes along with a foreign key referencing the superclass table.
        * For ex - With class table inheritance, you would create separate tables for each subclass - Car and Motorcycle. These tables would contain only the attributes specific to each subclass, along with a foreign key referencing the Vehicle table.
    Shared Primary Key - 
        * In this approach, each subclass table has a primary key that is also a foreign key referencing the superclass table.
        * For ex - In the shared primary key approach, each subclass table (Car and Motorcycle) would have a primary key column that is also a foreign key referencing the Vehicle table. This allows you to establish a one-to-one relationship between the superclass and each subclass.


19. How Aggregation is being converted from ER to R-Model ?
Answer :
When converting aggregation relationships (part-whole relationships) from the ER model to the relational model (R-Model), you typically represent them using foreign keys -
    * If the aggregation involves a strong entity, you can represent it as a regular table with a foreign key referencing the primary key of the associated entity.
    * If the aggregation involves a weak entity, you represent it as a separate table with a foreign key referencing the primary key of the owning entity.


20. Difference between UUID & GUID ?
Answer :
UUID (Universally Unique Identifier) - 
    * UUID is a standardized method for generating unique identifiers using a combination of timestamp, unique node identifier, and other factors. 
    * It is typically represented as a 128-bit value.
GUID (Globally Unique Identifier) - 
    * GUID is Microsoft's implementation of UUID. 
    * It follows the same principles but may have a different byte order. 
    * GUIDs are commonly used in Microsoft technologies.






*/