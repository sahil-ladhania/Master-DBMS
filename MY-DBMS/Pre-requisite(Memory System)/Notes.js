/*

1. What are the Basic parts of a Computer ?
Answer :-
* Every modern computer system consists of three basic sections :-
    Input Devices 
    Processor(CPU)
        Control Unit(CU) - This component directs the operations of the CPU by fetching, decoding, and executing instructions. It controls the flow of data between the CPU and other parts of the computer.
        Arithmetic and Logical Unit(ALU) - This part of the CPU performs all arithmetic calculations (like addition and subtraction) and logical operations (like comparison operations).
        Memory Unit(MU) - This is the primary memory (RAM), which temporarily stores data and instructions that the CPU needs while performing tasks.
    Output Devices
* Refer to Image - Basic Parts of Computer
* Concept from Image :-
    Input Devices to CPU - Data and instructions are entered into the computer via input devices (like keyboards and mice) and sent to the CPU for processing.
    Memory (main) to Control Unit (CU) - The main memory (RAM) stores the data and instructions temporarily. The Control Unit fetches these instructions from the main memory to begin processing.
    Control Unit to Arithmetic-Logic Unit (ALU) - The Control Unit decodes the instructions and sends the relevant data and operations to the ALU for execution (arithmetic and logical operations).
    ALU to Control Unit - After the ALU performs the required operations, it sends the results back to the Control Unit.
    Control Unit to Memory (main) - The Control Unit may then send the results back to the main memory for storage, if needed.
    CPU to Output Devices - Finally, the processed data is sent from the CPU to the output devices (like monitors and printers) to be presented to the user.

2. What is a Memory ?
Answer :-
* Memory in a computer is where data is stored temporarily or permanently. It is essential for storing and retrieving data.
* Memory is an important component of a computer where all the data and information are stored in the form of binary digits (combination of 0‟s and 1‟s) and retrieved whenever necessary.
* When you want to execute a computer program, the program has to be in memory.
* Any input data needed for processing by that program should also be in memory.
* All the intermediate results and outputs from the program are stored in the memory until the machine is turned off.
* The act of entering data into a storage location is called a Memory Write Operation.
* The act of retrieving data from a storage location is called a Memory Read Operation.
* "Data and instructions are moved, to and from memory, in bunches of word length" :-
    Data and instructions are transferred between the CPU and memory in fixed-sized units known as "words."
    Word Length - The size of a word is determined by the computer's architecture (e.g., 32 bits or 64 bits).
    But Why is Data Transferred in Work Length ?
        Efficiency - Matching the transfer size to the word length maximizes processing efficiency.
        Alignment - Ensures data is aligned properly in memory, reducing access time.
        Compatibility - Aligns with the CPU's internal registers and data buses.
    Example for 32-bit System :-
        Data and instructions are moved in 32-bit chunks.
        For a 128-bit data transfer, it is split into four 32-bit chunks.
        Data: 1010 1100 0011 1010 (first word), 1111 0001 0101 0110 (second word), and so on.
    Example for 64-bit System :-
        Data and instructions are moved in 64-bit chunks.
        For a 256-bit data transfer, it is split into four 64-bit chunks.
        Data: 1010 1100 0011 1010 1111 0001 0101 0110 (first word), 1100 1001 1010 1011 1111 1111 0000 0001 (second word), and so on.
    Note - 
        Word Length - Fixed-size unit of data (e.g., 32 bits, 64 bits).
        Transfer Size - Matches the word length of the system.
        Efficiency and Alignment - Key benefits of this method.

3. How many types of Memory are there ?
Answer :-
* Primary Memory | Main Memory | Semiconductor Memory - Fast, volatile memory used for active processes (e.g., RAM).
* Secondary Memory | Auxiliary Memory | Magnetic Memory | Optical Memory - Slower, non-volatile memory used for storage (e.g., HDD, SSD).
* Cache Memory - Very fast, small memory located inside or near the CPU.
* Different features of various Memory :-
    Primary Memory :
        Access Time - Faster
        Storage Capacity - Smaller
        Cost bit of Storage - High
    Secondary Memory :
        Access Time - Slower
        Storage Capacity - Higher
        Cost bit of Storage - Low
    Cache Memory :
        Access Time - Fastest
        Storage Capacity - Smallest
        Cost bit of Storage - Highest

4. What is Primary Memory ?
Answer :-
* Primary memory, also known as main memory, is the memory that directly interacts with the CPU. It is used to store data and instructions that are currently being processed by the computer. 
* Volatile.
* Fast Access.
* Temporary Storage.
* High Cost.
* There are two main types of Primary Memory : 
    Random Access Memory (RAM) 
    Read-Only Memory (ROM)
* Ex - RAM , ROM

5. What is Secondary Memory ?
Answer :-
* Secondary memory, also known as auxiliary storage or external memory, is used to store data and programs permanently. It is not directly accessed by the CPU but through input/output operations.
* Non-Volatile.
* Slower Access.
* Large Storage Capacity.
* Low Cost.
* Ex - HDD , SSD , Optical Disk , USB Flash Drives

6. What is a Cache Memory ?
Answer :-
* Cache memory is a small, high-speed memory located close to the CPU. It stores frequently accessed data and instructions to speed up processing.
* To reduce the cost of a large sized memory, a special type of high speed memory, known as cache memory can be used in between the CPU and the main memory.

7. What do you mean by Memory Organization ?
Answer :-
* Memory organization refers to the way memory is structured and managed in a computer, including how memory is allocated, accessed, and optimized.
* The cost versus access time leads to a hierarchy of computer memory, where the memory is organized into a hierarchy, known as the memory hierarchy.
* This includes CPU registers, Cache memory, main memory and various secondary storage devices.
* Although the memory hierarchy is organized in such a way to minimize the cost, without compromising the overall speed of access.
* Refer to Image - Memory Organization

8. What are the two main functions of a Memory ?
Answer :-
* Data Storage - Holding data temporarily or permanently.
* Data Retrieval - Providing stored data to the CPU when needed.

9. What do you mean by Storage Devices ?
Answer :-
* Storage devices are hardware used to store digital data. Examples include HDDs, SSDs, CDs, DVDs, and USB drives.

10. What are the criteria on which Storage Devices are ranked ?
Answer :-
* The storage devices of a computer system are ranked according to the following criteria :
    Access Time - How quickly data can be accessed.
    Storage Capacity - Amount of data that can be stored.
    Cost per Bit of Storage - Expense per unit of data stored.

11. What do you mean by these :-
    Access Time 
    Storage Capacity 
    Cost per bit of Storage 
Answer :-
* Access Time :
    The time it takes to read/write data from/to memory.
    Time required to locate and retrieve stored data from the storage unit in response to a program instruction.
    Time interval between the read/write request and the availability of the data.
    Fast access time is always preferred.
* Storage Capacity :
    The maximum amount of data that can be stored.
    Large capacity is preferred.
* Cost per bit of Storage :
    The cost of storing each bit of data.
    Cost of a storage unit for a given storage capacity.
    Low cost per bit of storage is always preferred.
    Final goal is to minimize this cost.

12. What are the purpose of different types of Memories ?
Answer :-
* Internal Memory - Provides the CPU with quick access to data and instructions during processing.
* Primary Memory - Stores programs and data currently in use by the CPU for fast access.
* Secondary Memory - Provides large, non-volatile storage for data and programs not currently in use.

13. What do you mean by Memory Hierarchy ?
Answer :-
* Memory hierarchy is the arrangement of memory types in a system based on speed and size. Higher levels are faster but smaller 
(e.g., CPU registers), while lower levels are slower but larger (e.g., HDDs).

14. How are Storage Media ranked in terms of different criteras ?
Answer :-
* Storage media are ranked based on :-
    Speed - How fast data can be accessed.
    Capacity - How much data can be stored.
    Cost - Expense involved in storing data.

15. What are the 3 main categories on which memory devices are categorised ?
Answer :-
* Semiconductor (or Main) Memory
* Magnetic Memory
* Optical Memory

16. What do you mean by these :-
    Semi-conductor (Main) Memory
    Magnetic Memory 
    Optical Memory 
Answer :-
* Semi-conductor (Main) Memory - 
    Used for fast access.
    Used mainly for primary storage.
    Stores programs and data which are currently needed by the CPU.
    Electronic and Static Device.
    No moving parts in it.
    Faster , Compact & Lighter.
    Consumes less Power.
    Ex - RAM and ROM etc.
* Magnetic Memory - 
    Slow compared to semiconductor memory.
    Used for large storage.
    Ex - HDDs, magnetic tapes etc.
* Optical Memory - 
    Slow compared to semiconductor memory.
    Used for removable storage.
    Ex - CDs, DVDs etc. 

17. What is the relationship between access time and capacity of various types of Memory ?
Answer :-
* As the storage capacity Increases, the access time also Increases.
* Ex - RAM is faster but has less capacity than HDD.

18. What are the different characteristics of different types of Memory Technologies ?
Answer :-
* Speed - How fast data can be read/written.
* Durability - How long the memory lasts.
* Capacity - How much data can be stored.
* Cost - Expense per unit of data stored.

19. What are the two main methods to access information from various memory devices ?
Answer :-
* Sequential Access - Data is accessed in a fixed order.
* Direct Access - Data can be accessed directly without following a sequence.

20. What do mean by these :-
    Sequential or serial access
    Direct or Random access
Answer :-
* Sequential | Serial Access :
    Information on a serial device can only be retrieved in the same sequence in which it is stored.
    Data is recorded one after another in a predetermined sequence (such as in numeric order) on a storage medium.
    Sequential processing is quite suitable for such applications like preparation of monthly pay slips, or monthly electronic bills etc., where each address needs to be accessed in turn.
    If you are working with a sequential access device and information is stored at the last address, then data stored at the last address cannot be accessed until all preceding locations in the sequence have been traversed.
    Locating an individual item of data requires searching the recorded data on the tape until the desired item is located.
    Data is read in a linear order, like magnetic tapes.
    Sequential Access Memory such as magnetic tape is organized by arranging memory cells in a linear sequence.
    These do not have unique storage address that can be directly addressed.
    Instead, data is presented serially for writing and is retrieved serially during a read.
    Refer to Image - Sequential Access Memory
* Direct | Random Access :
    Information is available at random, i.e., any location in the device may be selected at random.
    So any location in the device can be accessed in approximately equal time in any order.
    Each storage position (1) has a unique address and (2) can be individually accessed in approximately equal time without searching through other storage positions.
    Magnetic disk and CDROM are typical random access storage devices.
    Data can be read in any order, like in RAM or HDD.
    Any data record stored on a magnetic or optical disk can be accessed directly in approximately the same time period.
    Refer to Image - Random Access Memory

21. Understand the Basic Storage Fundamentals ?
Answer :-
* Binary Representation of Data :-
    Data is stored and processed using electronic or magnetic signals.
    This method is known as "two-state" or binary representation.
* Electronic Circuits :-
    Transistors and semiconductor circuits operate in two states - conducting (ON) and non-conducting (OFF).
    Positive Logic Convention -
        ON state (conducting) represents the number 1.
        OFF state (non-conducting) represents the number 0.
    Negative Logic Convention (reversed logic) -
        ON state represents 0.
        OFF state represents 1.
* Bit and Byte :-
    The smallest unit of data is called a bit (binary digit).
    A bit can have a value of either 0 or 1.
    A group of 8 bits forms a byte.
    A byte typically represents one character of data.
* Memory Capacity :-
    Memory chip capacity is usually expressed in bits.
    Overall memory and secondary storage device capacity are expressed in bytes.
* Computer Codes :-
    Codes like ASCII (American Standard Code for Information Interchange) use combinations of bits to form bytes.
    ASCII represents numbers (0-9), letters (A-Z, a-z), and other characters through specific arrangements of bits.

22. What are the different Storage Capacities ?
Answer :-
1 byte (B) = 8 bits
1 kilobyte (KB) = 1024 bytes
1 megabyte (MB) = 1024 kilobytes
1 gigabyte (GB) = 1024 megabytes
1 terabyte (TB) = 1024 gigabytes
1 petabyte (PB) = 1024 terabytes
1 exabyte (EB) = 1024 petabytes
1 zettabyte (ZB) = 1024 exabytes
1 yottabyte (YB) = 1024 zettabytes

23. What is the Storage Mechanism of Main Memory ?
Answer :-
* Main memory (RAM) stores data in electronic cells, allowing fast read/write operations.

24. What are the types of Main Memory ?
Answer :-
* RAM - 
    Temporary storage 
    Volatile
* ROM - 
    Permanent storage 
    Non-Volatile

25. What do mean by these :-
    RAM 
    DRAM
    SRAM
    ROM 
    PROM
    EPROM
Answer :-
* RAM (Random Access Memory) - Volatile memory for temporary data.
    DRAM (Dynamic RAM) - Needs to be refreshed periodically.
    SRAM (Static RAM) - Faster, more expensive, doesn't need refreshing.
* ROM (Read-Only Memory) - Non-volatile, used for firmware.
    PROM (Programmable ROM) - Can be programmed once.
    EPROM (Erasable Programmable ROM) - Can be erased and reprogrammed.

26. What are the two types of Magnetic Memory ?
Answer :-
* Magnetic Disks
* Magnetic Tapes

27. What do mean by these :-
    Magnetic Disks 
    Megnetic Tapes 
Answer :-
* Magnetic Disks -
    Data is stored magnetically.
    Used in HDDs.
* Magnetic Tapes - 
    Sequential access storage.
    Used for backup.

28. What is the Storage Mechanism of Magnetic Memory ?
Answer :-
* Data is stored by magnetizing regions of a coated surface.

29. What are the 2 basic types of Magnetic Disk Arrangements ?
Answer :-
* Removable Disk Cartridge
* Fixed Disk Unit

30. How is Data Organised in Magnetic Disk ?
Answer :-
* Data is organized into tracks and sectors on the disk surface.

31. What is HDD ?
Answer :-
Hard Disk Drive, a type of secondary storage that uses magnetic storage to store and retrieve data.

32. What is the Storage Mechanism of HDD ?
Answer :-
* Data is stored magnetically on spinning platters.

33. How is Storage Organised in HDD ?
Answer :-
* Platters - Multiple disks stacked together.
* Tracks - Concentric circles on a platter.
* Sectors - Subdivisions of tracks.

34. What is a Platter ?
Answer :-
* A circular disk inside an HDD that stores data magnetically.

35. What do you mean by hard-disk-drive (HDD) unit ?
Answer :-
* The complete hard disk drive, including platters, read/write heads, and motor.

36. What do you mean by disk pack or multi-platter configuration ?
Answer :-
* Multiple platters stacked together to increase storage capacity.

37. What is the relationship among Capacity , Density and Speed ?
Answer :-
* Higher Density - More data can be stored.
* Higher Speed - Faster access to data, often associated with higher density.

38. What is Seek Time ?
Answer :-
* Time taken for the read/write head to move to the track where data is stored.

39. What is Latency Time / Search Time ?
Answer :-
* Time taken for the platter to rotate to the correct sector under the read/write head.

40. What is the Access time of Magnetic Disk ?
Answer :-
* Total time to read/write data, including seek time and latency time.

41. What is a Pendrive ?
Answer :-
* A USB flash drive used for portable storage.

42. What are Magnetic Tapes ?
Answer :-
* Used for data backup, stores data sequentially.

43. What is SSD ?
Answer :-
Solid-State Drive, a type of secondary storage that uses flash memory for faster read/write speeds.

44. What is the difference between HDD and SSD ?
Answer :-
* HDD - 
    Uses spinning platters. 
    Slower. 
    More capacity.
* SSD - 
    Uses flash memory. 
    Faster. 
    Less capacity.

45. Which one is better HDD or SSD ?
Answer :-
* SSD - 
    Better for speed. 
    Durability.  
    Power efficiency.
* HDD - 
    Better for cost per gigabyte. 
    Capacity.


46. What is a CD-ROM ?
Answer :-
* Compact Disc Read-Only Memory, an optical disc used for storing data.

47. What is a WORM ?
Answer :-
* Write Once, Read Many, a type of optical storage that can be written once and read multiple times.

48. What is a Erasable Optical Disk ?
Answer :-
* Optical discs that can be erased and rewritten, like CD-RW or DVD-RW.

49. What is a DVD-ROM, DVD-R and DVD-RAM ?
Answer :-
* DVD-ROM - Read-only.
* DVD-R - Recordable once.
* DVD-RAM - Rewritable.

50. What are the different types of Secondary Memories and its features ?
Answer :-
* HDD - 
    Magnetic storage. 
    Large capacity.
* SSD - 
    Flash memory. 
    Fast access.
* Optical Discs - 
    Removable. 
    Durable.
* USB Drives - 
    Portable.
    Convenient.

51. Understand the Memory Hierarchy in depth ?
Answer :-
* The hierarchy includes CPU registers, cache memory, main memory (RAM), secondary storage (HDD/SSD), and archival storage (magnetic tapes).
* Every programmer wishes to have a large and fast memory.
* The two requirements are conflicting :-
    Fast memories are expensive and small.
    Slow memories are cheaper and large.
* To give a user the illusion of both fast and large, the memory system of modern computers is organized in a hierarchical way.
* The very top of the hierarchy is CPU registers.
* Between the CPU and main memory, a fast cache memory is added.
* The hard disk is used by the technique of virtual memory to expand the capacity of main memory.
* Most computer systems make use of a hierarchy of memory technologies as a single type of memory is not sufficient.
* This hierarchy is known as the memory hierarchy.
* Overall goal of Memory Hierarchy is to obtain the highest possible access speed while minimizing the total cost of the memory system.
* Processor's Internal (CPU) Memories :-
    Small set of high-speed registers.
    Used for temporary storage during processing.
    Located internally within the processor.
* Primary (Main) Memory :-
    Faster access time compared to secondary memory.
    Directly accessed by the CPU.
    Stores programs and data currently needed by the CPU.
    Smaller storage capacity and higher cost per bit compared to secondary memory.
* Secondary (Auxiliary) Memory :-
    Used for bulk storage (mass storage) of programs, data, and other information.
    Larger capacity than primary memory.
    Slower access time compared to primary memory.
    Stores system software, large data files, and other less frequently accessed data.

*/