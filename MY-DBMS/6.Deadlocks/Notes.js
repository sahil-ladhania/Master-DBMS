/*

1. What is Deadlock ?
Answer :
Deadlock - 
    * Deadlock occurs when two or more processes are unable to proceed because each is waiting for the other to release resources.
    * Deadlocks can happen in multi-user environments when two or more transactions are running concurrently and try to access the same data in a different order.
    * When this happens, one transaction may hold a lock on a resource that another transaction needs, while the second transaction may hold a lock on a resource that the first transaction needs. 
    * Both transactions are then blocked, waiting for the other to release the resource they need.
    * DBMSs often use various techniques to detect and resolve deadlocks automatically.
    * Techniques include timeout mechanisms, where a transaction is forced to release its locks after a certain period of time, and deadlock detection algorithms, which periodically scan the transaction log for deadlock cycles and then choose a transaction to abort to resolve the deadlock.
    * Also possible to prevent deadlocks by careful design of transactions, such as always acquiring locks in the same order or releasing locks as soon as possible.
    * Proper design of the database schema and application can also help to minimize the likelihood of deadlocks.
    * In a database, a deadlock is an unwanted situation in which two or more transactions are waiting indefinitely for one another to give up locks.
    * Deadlock is said to be one of the most feared complications in DBMS as it brings the whole system to a Halt. 
Ex of Deadlock - 
    * Consider two processes, A and B. Process A holds resource X and waits for resource Y, while process B holds resource Y and waits for resource X. Neither process can proceed, resulting in a deadlock.
Deadlock Avoidance - 
    * Deadlock avoidance focuses on preventing deadlocks from occurring by employing strategies such as application-consistent logic.
    * Application-Consistent Logic :-
        * Ensure that transactions consistently access resources in the same order.
        * Ex - If Transaction T1 accesses Students and then Grades, ensure that Transaction T2 also accesses Students first and then Grades to avoid deadlock.
    * Row-Level Locking and READ COMMITTED Isolation Level :-
        * Apply row-level locking and use the READ COMMITTED isolation level to reduce the likelihood of deadlocks.
        * Though not a guarantee, it can help mitigate deadlock situations.
Difference Between Wait-Die & Wound-Wait :-
    Wait-Die -
        * Non-preemptive.
        * Older transactions wait for younger ones.
        * More aborts and rollbacks.
    Wound-Wait -
        * Preemptive.
        * Younger transactions are aborted.
        * Fewer aborts and rollbacks compared to Wait-Die.
Application of Deadlocks :-
    Delayed Transactions - Transactions delayed due to resource contention.
    Lost Transactions - Transactions aborted due to resource conflicts.
    Reduced Concurrency - Decreased system efficiency due to resource conflicts.
    Increased Resource Usage - Increased system resource consumption due to conflicts.
    Reduced User Satisfaction - User dissatisfaction due to slow system response.
Features of Deadlock in a Deadlock :-
    * Mutual Exclusion - One transaction holding a resource blocks others.
    * Hold and Wait - Transactions waiting for resources they hold.
    * No Preemption - Resources not forcibly taken from transactions.
    * Circular Wait - Transactions in a circular wait for resources.
    * Indefinite Blocking - Transactions indefinitely wait for resources.
    * System Stagnation - System stuck with no transaction progress.
    * Inconsistent Data - Data inconsistency due to incomplete transactions.
Dis-advantages of Deadlock :-
    * System Downtime - System downtime due to deadlock resolution.
    * Resource Waste - Resources unused during deadlock.
    * Reduced Concurrency - Lower system throughput due to conflicts.
    * Complex Resolution - Tedious resolution process for administrators.
    * Increased System Overhead - Increased system processing overhead for deadlock handling.


2. Deadlock Detection
Answer :
Deadlock Detection -
    * Deadlock detection involves identifying when a transaction is indefinitely waiting to acquire a lock, indicating a potential deadlock situation.
    * Wait-for-Graph :-
        * Construct a graph based on transactions and their locked resources.
        * If the graph contains a cycle, it indicates a deadlock.
        * Suitable for smaller databases due to its simplicity and efficiency.


3. Techniques To Prevent Deadlock.
Answer :
Wait-Die Scheme :-
    Definition -
        * Older transactions wait for younger ones to release resources.
        * Younger transactions are aborted and restarted if they request resources held by older ones.
    Principle -
        * Non-preemptive technique where older transactions wait for resource release.
        * Prevents younger transactions from overtaking older ones in resource allocation.
    Application -
        * Used in scenarios where older transactions are given priority.
        * Ensures fairness in resource allocation among transactions.
Wound-Wait Scheme :-
    Definition -
        * Older transactions force younger ones to abort if they request their resources.
        * Younger transactions wait if they request resources held by older ones.
    Principle -
        * Preemptive technique where older transactions do not wait for resource release.
        * Ensures that older transactions retain control over resources they possess.
    Application -
        * Suitable for situations where older transactions should not be preempted.
        * Provides a proactive approach to resolving resource contention.
Timeout Based Schema :-
    Definition -
        * Transactions are aborted if they wait for resources beyond a specified timeout period.
    Principle -
        * Transactions are granted resources with a predefined timeout period.
        * Aborts transactions exceeding the timeout threshold to prevent deadlock.
    Application - 
        * Suitable for systems where resource availability is unpredictable.
        * Ensures timely resolution of deadlock situations.
    Comparison -
        * Offers a proactive approach to deadlock prevention.
        * Requires careful tuning of timeout values for optimal performance.


4. What is Starvation & Its Reason ?
Answer :
Starvation - Starvation or Livelock is the situation when a transaction has to wait for an indefinite period of time to acquire a lock. 
Reasons for Starvation - 
    * If the waiting scheme for locked items is unfair. ( priority queue ).
    * Victim selection (the same transaction is selected as a victim repeatedly ).
    * Resource leak.
    * Via denial-of-service attack.
Ex of Starvation -
    * Consider a shared resource, such as a printer, in an office environment. Several employees submit print jobs to the printer throughout the day. The printer operates on a "first come, first served" basis, meaning jobs are processed in the order they are received. Now, imagine there's a high-volume user who frequently submits large print jobs, causing the printer to be busy for extended periods. As a result, smaller print jobs submitted by other users are continuously delayed and may never get a chance to be processed, leading to their starvation.
    * Suppose there are 3 transactions namely T1, T2, and T3 in a database that is trying to acquire a lock on data item ‘ I ‘. Now, suppose the scheduler grants the lock to T1(maybe due to some priority), and the other two transactions are waiting for the lock. As soon as the execution of T1 is over, another transaction T4 also comes over and requests a lock on data item I. Now, this time the scheduler grants lock to T4, and T2, T3 has to wait again. In this way, if new transactions keep on requesting the lock, T2 and T3 may have to wait for an indefinite period of time, which leads to Starvation. 
Solution to Starvation :- 
    Increasing Priority -
        * Raise priority for transactions waiting indefinitely.
        * Risk - Higher priority transactions may prolong waiting for others.
    Modification in Victim Selection Algorithm -
        * Lower priority of transactions repeatedly selected as victims.
        * Ensures fairness in resource allocation.
    First Come First Serve (FCFS) Approach -
        * Transactions acquire locks in the order of request.
        * Promotes fairness by treating transactions equally.
    Wait-Die and Wound-Wait Scheme -
        * Utilize timestamp ordering to manage transactions.
        * Ensures fairness and prevents indefinite waiting.
    Timeout Mechanism -
        * Set a maximum wait time for transactions.
        * Abort or restart transactions exceeding the timeout.
        * Prevents indefinite waiting and potential starvation.
    Resource Reservation -
        * Allocate necessary resources to transactions before execution.
        * Reduces waiting time by ensuring resource availability.
    Preemption -
        * Forcibly remove locks from long-waiting transactions.
        * Prioritize transactions based on urgency or waiting time.
    Dynamic Lock Allocation -
        * Allocate locks dynamically considering current system state.
        * Prevents deadlocks and minimizes chances of starvation.
    Parallelism -
        * Execute multiple transactions concurrently.
        * Reduces waiting time and prevents starvation.
        * Requires careful handling of conflicts and race conditions.
Disadvantages of Starvation :-
    Decreased performance - Starvation can cause decreased performance in a DBMS by preventing transactions from making progress and causing a bottleneck.
    Increased response time - Starvation can increase response time for transactions that are waiting for resources, leading to poor user experience and decreased productivity.
    Inconsistent data - If a transaction is unable to complete due to starvation, it may leave the database in an inconsistent state, which can lead to data corruption and other problems.
    Difficulty in troubleshooting - Starvation can be difficult to troubleshoot because it may not be immediately apparent which transaction is causing the problem.
    Potential for deadlock - If multiple transactions are competing for the same resources, starvation can lead to deadlock, where none of the transactions can proceed, causing a complete system failure.


5. Deadlock Recovery. ----> Cover OS then Come Here
6. How to Prevent Deadlock ? ----> Cover OS then Come Here

*/