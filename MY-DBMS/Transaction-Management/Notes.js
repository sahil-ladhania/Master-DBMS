/*

1. What is Transaction ?
Answer :
Transaction - Group of tasks performed within a database management system (DBMS). Single task is the minimum processing unit which cannot be divided further.
Ex - When transferring money from one bank account to another, a transaction ensures that the withdrawal from one account and the deposit into the other account either both occur successfully or neither occurs, maintaining the integrity of the overall transfer.
Schedule - 
    * Chronological sequence of transactions where each transaction consists of multiple instructions or tasks.
    * Schedule ek sequence hai jisme transactions ka kisi bhi tarah ka arrangement ho sakta hai, chahe serial ho ya phir concurrent(Parallel). 
    * Ex - Agar humare paas do transactions hain, T1 aur T2, to kuch aise schedule ho sakta hai jisme T1 aur T2 ka kuch operations overlap kar rahe hain.
Serializability - 
    * Refers to the property of a schedule in which transactions are executed in such a way that the outcome is equivalent to executing them in some serial order, without violating the integrity constraints of the database.
    * Serializability ka matlab hai ki jab bhi hum kai transactions ko ek sath chalate hain, to unka nateeja aisa hona chahiye jaise ki unhe ek ke baad ek karte hue chalaya gaya ho.
    * Serializability ek property hai jo schedule ko describe karta hai aur yeh batata hai ki kya schedule ke execution ka result kisi ek serial order mein execute karne ke barabar hai.
    * Yani agar hum kai transactions ko kisi bhi order mein execute karte hain aur unka result kisi ek serial order mein execute karne ke result ke barabar hai, to hum kahte hain ki yeh schedule serializable hai.
    * Ex - Agar humare paas koi schedule hai jisme T1 aur T2 transactions hain, aur agar hum unka result kisi ek serial order mein execute karke dekhte hain aur woh same hai jo humare schedule ka result hai, to hum keh sakte hain ki yeh schedule serializable hai.
    * Serializability -> Schedule Result = Serial Order Result
Serial Schedule - 
    * Schedule where transactions are executed sequentially, one after the other, without interleaving. 
    * Serial schedule ek aisa schedule hai jisme transactions ko ek ke baad ek sequence mein execute kiya jata hai, matlab ek transaction pura ho jane ke baad hi dusra transaction start hota hai.
    * Ex - Agar humare paas do transactions hain, T1 aur T2, to serial schedule mein pehle T1 pura execute hoga aur phir T2 start hoga.
Equivalence Schedules - 
    * Its a Schedule of transactions that produces the same results as if the transactions were executed one after another (in serial order), even though they might be executed concurrently.
    * Equivalence schedule can be of the 3 Types :-
        * Result Equivalence - 
            * If two schedules produce the same result after execution, they are result equivalent.
            * Ex -  Schedule 1: T1 reads 5, T2 writes 7 
                    Schedule 2: T2 writes 7, T1 reads 5
            * Both schedules produce the same final result, even though the order of operations is different.
            * Same final result, order of operations may vary.
        * View Equivalence - 
            * Two schedules are view equivalent if transactions in both schedules perform similar actions in a similar manner.
            * Ex -  Schedule 1: T reads initial data, then reads data written by J, and finally performs a write operation.
                    Schedule 2: T also reads initial data, then reads data written by J, and finally performs a write operation.
            * Both schedules follow the same sequence of actions, ensuring view equivalence.
            * Transactions perform similar actions in a similar manner.
        * Conflict Equivalence - 
            * Two schedules are conflict equivalent if they have conflicting operations in the same order.
            * Conflicting operations - Operations from different transactions that access the same data item, where at least one is a write operation.
            * Ex -  Schedule 1: T1 reads, T2 writes, T1 writes
                    Schedule 2: T2 writes, T1 reads, T1 writes
            * Both schedules have conflicting operations (read and write by T1 on the same data item) in the same order, making them conflict equivalent.
            * Same set of transactions with conflicting operations in the same order.
Operations in Transaction :-
    Read Operation - Reads the data from the database and then stores it in the buffer in main memory.
    Write Operation - Writes the updated data value back to the database from the buffer.
State in Transaction :-
    Transaction goes through many different states throughout its life cycle.
    These states are called as transaction states.
    There are 6 States of Transaction :-
        Active state -
            * First state in the life cycle of a transaction.
            * Transaction is called in an active state as long as its instructions are getting executed.
            * All the changes made by the transaction now are stored in the buffer in main memory.
        Partially committed state - 
            * After the last instruction of transaction has executed, it enters into a partially committed state.
            * After entering this state, the transaction is considered to be partially committed.
            * It is not considered fully committed because all the changes made by the transaction are still stored in the buffer in main memory.
        Committed state -
            * After all the changes made by the transaction have been successfully stored into the database, it enters into a committed state.
            * Now, the transaction is considered to be fully committed.
        Failed state -
            * When a transaction is getting executed in the active state or partially committed state and some failure occurs due to which it becomes impossible to continue the execution, it enters into a failed state.
        Aborted state -
            * After the transaction has failed and entered into a failed state, all the changes made by it have to be undone.
            * To undo the changes made by the transaction, it becomes necessary to roll back the transaction.
            * After the transaction has rolled back completely, it enters into an aborted state.
        Terminated state -
            * Last state in the life cycle of a transaction.
            * After entering the committed state or aborted state, the transaction finally enters into a terminated state where its life cycle finally comes to an end.
    Note - 
        * After a transaction has entered the committed state, it is not possible to roll back the transaction.
        * It is not possible to undo the changes that has been made by the transaction. Because the system is updated into a new consistent state.
        * Only way to undo the changes is by carrying out another transaction called as compensating transaction that performs the reverse operations.


2. Important Terms
Answer :
COMMIT - 
    * Committing a transaction means making its changes permanent in the database. It's like confirming and finalizing the changes.
    * Command is used to permanently save any transaction into the database.
    * When we use any DML command like INSERT, UPDATE or DELETE, the changes made by these commands are not permanent, until the current session is closed, the changes made by these commands can be rolled back.
    * To avoid that, we use the COMMIT command to mark the changes as permanent.
ROLLBACK - 
    * Rolling back a transaction means undoing any changes made by it and reverting the database to its state before the transaction started.
    * Command used to restore the database to last commited state. It is also used with SAVEPOINT command to jump to a savepoint in an ongoing transaction.
    * If we have used the UPDATE command to make some changes into the database, and realise that those changes were not required, then we can use the ROLLBACK command to rollback those changes, if they were not commited using the COMMIT command.
SAVEPOINT - 
    * Savepoint allows you to mark a point within a transaction to which you can later roll back.
    * Command used to temporarily save a transaction so that you can rollback to that point whenever required.
    * Using this command we can name the different states of our data in any table and then rollback to that state using the ROLLBACK command whenever required.


3. ACID
Answer :
In order to maintain consistency in a database, before and after the transaction, certain properties are followed. These are called ACID properties. 
A -> Atomicity -> All the operations in a transaction are treated as a single unit. Either all operations are completed successfully, or none of them are.
C -> Consistency -> Transactions take the database from one consistent state to another consistent state. Integrity constraints are not violated.
I -> Isolation -> Each transaction operates independently of other transactions. Changes made by one transaction are not visible to other transactions until they are committed.
D -> Durability -> Once a transaction is committed, its changes are permanent and survive system failures.
ATOMICITY :-
    * By this, we mean that either the entire transaction takes place at once or doesn’t happen at all.
    * There is no midway i.e. transactions do not occur partially.
    * Each transaction is considered as one unit and either runs to completion or is not executed at all. 
    * It involves the following two operations - 
        * ABORT - If a transaction aborts, changes made to the database are not visible. 
        * COMMIT - If a transaction commits, changes made are visible. 
    * Atomicity is also known as the ‘All or nothing rule’. 
    * Therefore, the transaction must be executed in its entirety in order to ensure the correctness of the database state. 
CONSISTENCY :-
    * This means that integrity constraints must be maintained so that the database is consistent before and after the transaction.
    * It refers to the correctness of a database.
    * Means Before the transaction has started & After the transaction hs completed , Sum of money should be same.
ISOLATION :-   
    * This property ensures that multiple transactions can occur concurrently without leading to the inconsistency of the database state.
    * Transactions occur independently without interference.
    * Changes occurring in a particular transaction will not be visible to any other transaction until that particular change in that transaction is written to memory or has been committed.
    * This property ensures that the execution of transactions concurrently will result in a state that is equivalent to a state achieved these were executed serially in some order. 
    * Hence, transactions must take place in isolation and changes should be visible only after they have been made to the main memory.
    * Means when we try to convert Parellel Schedule to Serial Schedule.
DURABILITY :-
    * This property ensures that once the transaction has completed execution, the updates and modifications to the database are stored in and written to disk and they persist even if a system failure occurs. 
    * These updates now become permanent and are stored in non-volatile memory.
    * The effects of the transaction, thus, are never lost. 
Advantages of ACID :-
    * Data Consistency - ACID properties ensure that the data remains consistent and accurate after any transaction execution.
    * Data Integrity - ACID properties maintain the integrity of the data by ensuring that any changes to the database are permanent and cannot be lost.
    * Concurrency Control - ACID properties help to manage multiple transactions occurring concurrently by preventing interference between them.
    * Recovery - ACID properties ensure that in case of any failure or crash, the system can recover the data up to the point of failure or crash.
Dis-advantages of ACID :-
    * Performance - ACID properties can cause a performance overhead in the system, as they require additional processing to ensure data consistency and integrity.
    * Scalability - ACID properties may cause scalability issues in large distributed systems where multiple transactions occur concurrently.
    * Complexity - Implementing the ACID properties can increase the complexity of the system and require significant expertise and resources.


4. How to Implement Atomicity in Transactions ?
Answer :-
Involves techniques like logging, where all changes made by a transaction are recorded in a log before they are applied to the database. If a failure occurs, the log can be used to undo the changes.
Implementation of Atomicity and Durability using Shadow Copy :-
    Shadow Copy Scheme -
        * In the shadow-copy scheme, when a transaction wants to update the database, it first creates a complete copy of the database. This copy, called the shadow copy, remains unchanged during the transaction.
        * All updates are made on the new database copy, leaving the original copy (shadow copy) untouched.
    Handling Transaction Failures -
        * If the transaction fails before updating the database pointer, the original contents of the database (shadow copy) remain unaffected.
        * Transaction abortion involves simply deleting the new copy of the database.
    Committing Transactions -
        * Once the transaction completes successfully, the system ensures that all pages of the new copy are written to disk.
        * After this, the database pointer is updated to point to the new copy, making it the current database. The old copy is then deleted.
    Handling System Failures - 
        * If a system failure occurs before updating the database pointer, upon restart, the system reads the pointer and sees the original contents of the database.
        * If the system fails after updating the database pointer, upon restart, the system reads the pointer and sees the updated contents of the database.
    Atomicity Guarantee -
        * Atomicity is ensured by ensuring that the update to the database pointer is atomic. This means either all bytes of the pointer are written or none are.
        * Disk systems provide atomic updates to entire blocks, ensuring that the database pointer is updated atomically.
    Durability Guarantee -
        * Durability is guaranteed by writing all updated pages of the new copy to disk before updating the database pointer.
        * Even if a system failure occurs, the updated contents of the database are preserved on disk.
Ex of Implementing Atomicity in Transaction - 
    * Scenario - Suppose a transaction updates the balance of a bank account.
    * Shadow Copy - Original account balance remains unchanged (shadow copy), while the transaction updates a new copy.
    * Transaction Failure - If the transaction fails, the original balance remains intact.
    * Transaction Commit - If the transaction succeeds, the updated balance is written to disk and becomes the current balance.
    * System Failure - If a system failure occurs, the system reads the database pointer to determine which version of the database to use upon restart.


5. Concurrent Transaction
Answer :
In real-world scenarios, multiple transactions may be executed simultaneously , that is what we called Concurrent Transaction.
Concurrency control is an essential aspect of database management systems (DBMS) that ensures transactions can execute concurrently without interfering with each other.
However, concurrency control can be challenging to implement, and without it, several problems can arise, affecting the consistency of the database.
There are 5 concurrency problems that can occur in the database are :-
    Dirty Read Problem -
        * Dirty read problem or Temporary update occurs when one transaction updates an item and fails.
        * But the updated item is used by another transaction before the item is changed or reverted back to its last value. 
        * Ex - Student Cheating Wala Example Yaad Kro.
    Unrepeatable Read Problem -
        * Occurs when two or more read operations of the same transaction read different values of the same variable.
        * Ex - 10 Saal K baache wali Kahani Yaah kro jime wo Maagi banata hai but usko Rajma Chawal milta hai.
    Phantom Read Problem -
        * Occurs when a transaction reads a variable once but when it tries to read that same variable again, an error occurs saying that the variable does not exist. 
        * Ex - 10 Saal ka baccha ab 15 ka hogya hai ab wo maggie to nhi bna ra pr kitchen jata hai to usko kuch samaan gayab milta hai to wo kahani yaad kro.
    Lost Update Problem - 
        * Update done to a data item by a transaction is lost as it is overwritten by the update done by another transaction. 
        * Basically, the write commit done by the last transaction will overwrite all previous write commits. 
    Incorrect Summary Problem - 
        * Consider a situation, where one transaction is applying the aggregate function on some records while another transaction is updating these records.
        * Aggregate function may calculate some values before the values have been updated and others after they are updated. 
        * * Therefore the aggregate function may calculate some values before they have been updated and others after they have been updated. 
Concurrency Control Techniques in DBMS Transactions :-
    Locking - 
        * Involves acquiring locks on data items used by transactions to prevent other transactions from accessing the same data concurrently.
        * Types of Locks :-
            * Shared Lock - Allows multiple transactions to read a data item but prevents any transaction from writing to it.
            * Excllusive Lock - Prevents other transactions from accessing a data item until the locking transaction releases it.
        * Prevents :-
            * Dirty Read - Reading uncommitted changes made by another transaction.
            * Non-Repeatable Read - Getting different results for the same query within the same transaction due to other transactions updates.
    Timestamp Ordering -
        * Assigns a unique timestamp to each transaction and ensures they execute in timestamp order.
        * Helps in maintaining transaction serialization and preventing conflicts.
        * Prevents :-
            * Non-Repeatable Read - Ensures that transactions see a consistent view of the database based on timestamp ordering.
            * Phantom Read - Prevents new rows from appearing or disappearing between transactions.
    Optimistic Concurrency Control - 
        * Assumes conflicts between transactions are rare and allows transactions to proceed without acquiring locks initially.
        * Transactions are validated at commit time, and if a conflict is detected, the transaction is rolled back.
        * Prevents :-
            * Dirty Read - Transactions are validated before committing, ensuring that only consistent data is written to the database.
            * Non-Repeatable Read - Conflicts are detected during validation, preventing inconsistent reads.
Advantages of Concurrent Transactions :-
    Reduced Wait Time - 
        * Concurrent transactions allow multiple transactions to execute simultaneously, reducing overall processing time.
        * Transactions can proceed independently without waiting for other transactions to complete, leading to faster execution.
    High Throughput - 
        * Concurrent transactions increase the number of transactions processed within a given time frame.
        * By allowing multiple transactions to execute concurrently, the system can handle a higher workload efficiently, improving throughput.
    High Resource Utilization -
        * Concurrent transactions make efficient use of system resources such as CPU, memory, and I/O.
        * Multiple transactions can utilize system resources simultaneously, maximizing resource utilization and system efficiency.


6. Schedule
Answer :
A schedule is a chronological sequence of transactions in a multi-user database system.
Process of lining the transactions and executing them one by one. 
When there are multiple transactions that are running in a concurrent manner and the order of operation is needed to be set so that the operations do not overlap each other, Scheduling is brought into play and the transactions are timed accordingly.
Schedule Types :-
    Serial Schedule - Transactions are executed one after the other, without overlapping.
    Non-Serial Schedule - Operations of multiple transactions are mixed together.
        Serializable Schedule - Maintains database consistency, ensuring results are same as serial schedules.
            Conflict Serializable - Can be transformed into a serial schedule by swapping non-conflicting operations.
            View Serializable - Equivalent to a serial schedule with no overlapping transactions.
        Non-Serial Schedule - Can't ensure database consistency like serial schedules.
            Recoverable Schedule - Transactions commit only after all transactions whose changes they read commit
                Cascading Schedule - Prevents cascading aborts.
                Cascadeless Schedule - Transactions read values only after all transactions whose changes they read commit.
                Strict Schedule - Ensures strict order of operations between transactions.
            Non-Recoverable Schedule - Transactions may commit before all transactions whose changes they read commit.
There are 5 Important types of Schedule :-
    Serial -
        * Transactions are executed one after the other.
    Complete -
        * All transactions are executed to completion.
    Recoverable -
        * Transactions can be rolled back and redone.
    Cascade-less -
        * No cascading rollbacks.
    Strict -
        * No cascading aborts.
Relationship Between Schedule Types :-
    * Cascadeless schedules stricter than Recoverable.
    * Strict schedules stricter than Cascadeless.
    * Serial schedules satisfy constraints of all recoverable, cascadeless, and strict schedules.
Conflict Serializable Schedule - 
    * Schedule is called conflict serializable if it can be transformed into a serial schedule by swapping non-conflicting operations.
    * The two operations become conflicting if all conditions satisfy :-
        * They belong to different transactions.
        * They operate on the same data item.
        * At least one of them is a write operation.
    * Purpose :-
        * Ensures that transactions can be executed in a way that maintains database consistency and prevents conflicting operations from causing inconsistencies.
Conflict Operation - 
    * Operations within transactions that conflict with each other and may lead to inconsistent results.
    * The two operations become conflicting if all conditions satisfy :-
        * Both belong to separate transactions
        * They have the same data item.
        * They contain at least one write operation.
    * Purpose :-
        * Identifies potential conflicts between operations in a schedule, which may need to be resolved to maintain database consistency.
Conflict Equivalent - 
    * Two schedules are considered conflict equivalent if they involve the same set of transactions and the same set of conflicting operations, and the order of conflicting operations is maintained.
    * Criteria :-
        * Same set of transactions
        * Same set of conflicting operations
        * Order of conflicting operations maintained
    * Purpose :-
        * Identifies schedules that, despite potential differences in the order of non-conflicting operations, result in the same outcome regarding conflicts. Conflict equivalence helps ensure that different execution orders of transactions lead to consistent database states, thereby maintaining data integrity.

7. Concurrency Control
Answer :
Techniques used to manage simultaneous access to the database by multiple transactions.
In a multiprogramming environment where multiple transactions can be executed simultaneously, it is highly important to control the concurrency of transactions. 
We have concurrency control protocols to ensure atomicity, isolation, and serializability of concurrent transactions. Concurrency control protocols can be broadly divided into two categories :-
    Lock based protocols -
        * Database systems equipped with lock-based protocols use a mechanism by which any transaction cannot read or write data until it acquires an appropriate lock on it.
        *  Locks are of two kinds :-
            Binary Locks - A lock on a data item can be in two states; it is either locked or unlocked.
            Shared/exclusive - This type of locking mechanism differentiates the locks based on their uses. If a lock is acquired on a data item to perform a write operation, it is an exclusive lock. Allowing more than one transaction to write on the same data item would lead the database into an inconsistent state. Read locks are shared because no data value is being changed.
        * There are 4 types of Lock Protocols available :-
            Simplistic Lock Protocol -
                * Allow transactions to obtain a lock on every object before a 'write' operation is performed.
                * Transactions may unlock the data item after completing the ‘write’ operation.
            Pre-claiming Lock Protocol (IMP) -
                * Evaluate their operations and create a list of data items on which they need locks.
                * Before initiating an execution, the transaction requests the system for all the locks it needs beforehand.
                * If all the locks are granted, the transaction executes and releases all the locks when all its operations are over.
                * If all the locks are not granted, the transaction rolls back and waits until all the locks are granted.
            Two-Phase Locking 2PL - 
                * Divides the execution phase of a transaction into three parts.
                * In the first part, when the transaction starts executing, it seeks permission for the locks it requires.
                * Second part is where the transaction acquires all the locks.
                * As soon as the transaction releases its first lock, the third phase starts. 
                * In this phase, the transaction cannot demand any new locks; it only releases the acquired locks.
                * Two-phase locking has two phases, one is growing, where all the locks are being acquired by the transaction; and the second phase is shrinking, where the locks held by the transaction are being released.
                * To claim an exclusive (write) lock, a transaction must first acquire a shared (read) lock and then upgrade it to an exclusive lock.
            Strict Two-Phase Locking -
                * First phase of Strict-2PL is same as 2PL.
                * After acquiring all the locks in the first phase, the transaction continues to execute normally.
                * But in contrast to 2PL, Strict-2PL does not release a lock after using it.
                * Strict-2PL holds all the locks until the commit point and releases all the locks at a time.
                * Strict-2PL does not have cascading abort as 2PL does.
    Timestamp Ordering Protocol -
        * Ensures serializability among transactions in their conflicting read and write operations.
        * This is the responsibility of the protocol system that the conflicting pair of tasks should be executed according to the timestamp values of the transactions.
    Thomas' Write Rule - 
        * States that in a schedule of transactions, if a transaction T1 writes to a data item that another transaction T2 previously wrote to, and T2 has not yet committed, then T1's write operation must be delayed until after T2 commits.
        * Purpose :-
            * Prevents lost updates by ensuring that a transaction does not overwrite the changes made by another transaction until the changes are committed and made permanent.
        * Implementation :-
            * When a transaction attempts to write to a data item that has already been modified by another uncommitted transaction, the database system delays the write operation until the other transaction commits. This delay ensures that T1 does not overwrite the changes made by T2 before T2's changes are finalized.

*/