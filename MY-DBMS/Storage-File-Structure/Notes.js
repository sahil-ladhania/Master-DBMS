/*

1. Storage System.
Answer :
Storage system is a mechanism used to store and retrieve data efficiently.
Databases are stored in file formats, which contain records.
At physical level, the actual data is stored in electromagnetic format on some device.
These storage devices can be broadly categorized into three types :-
    Primary Memory
    Secondary Memory
    Tertiary Memory
High Speed - Primary Memory > Secondary Memory > Tertiary Memory
High Cardinality - Primary Memory < Secondary Memory < Tertiary Memory
Primary Memory :-
    Characteristics - 
        Volatile - Data is lost when power is turned off.
        Fast access times - Allows for quick retrieval of data by the CPU.
        Directly accessible by the CPU - Provides the CPU with immediate access to data and instructions.
        Includes CPU registers, cache memory, and RAM (main memory).
        Very small in size.
        Ultra-fast access speed.
        Requires continuous power supply to maintain data integrity.
        Ex of Primary Memory - 
            * RAM (DDR4 RAM , SRAM(Static RAM)).
Secondary Memory :-
    Characteristics - 
        Non-volatile - Data remains intact even when the power is turned off.
        Slower access times compared to primary memory (RAM).
        Indirectly accessible by the CPU - Requires data to be transferred to primary memory (RAM) before the CPU can work on it.
        Used for storing data for future use or backup.
        Not part of the CPU chipset or motherboard.
        Offers larger storage capacity compared to primary storage.
        Data is retained even when power is turned off.
        Ex of Secondary Memory - 
            * Storage Devices (HDD (Hard Disk Drive) , SSD (Solid State Drive) , USB Flash Drive).
Tertiary Memory :-
    Characteristics - 
        Very large storage capacities, suitable for long-term archival purposes.
        Slow access times compared to primary and secondary memory.
        Typically requires manual intervention (e.g., loading tapes or discs) to access data.
        Used for storing huge volumes of data.
        External to the computer system.
        Slowest speed among the three types of storage.
        Primarily used for system backups.
        Provides high-capacity storage at a lower cost per unit compared to primary and secondary storage.
        Ex of Tertiary Memory - 
            * Offline Storage (Magnetic Tape , Optical Discs (CDs, DVDs, Blu-ray Discs))
Memory Hierarchy :-
    * CPU has direct access to main memory and registers.
    * Main memory access time is slower than CPU speed.
    * Cache memory introduced to minimize speed mismatch.
    * Cache memory provides fastest access and stores frequently accessed data.
Magnetic Disks :-
    * Most common secondary storage devices in modern computer systems.
    * Utilize magnetization to store information.
    * Consist of metal disks coated with magnetizable material.
    * Disks are placed vertically on a spindle.
    * Read/write head moves between disks to magnetize or de-magnetize spots.
    * Magnetized spots represent binary values (0 or 1).
    * Formatted with tracks (concentric circles) and sectors.
    * Each sector typically stores 512 bytes of data.
    * Data stored on hard disks in a well-defined order for efficient storage and retrieval.
RAID (Redundant Array of Independent Disks) :-
    * RAID is a technology used to connect multiple secondary storage devices and treat them as a single logical unit.
    * It aims to improve data reliability, fault tolerance, and/or performance.
    * By distributing or replicating data across multiple disks, RAID provides redundancy and/or increased access speed.
RAID Types :-
    RAID 0
    RAID 1
    RAID 2(Obsolute)
    RAID 3
    RAID 4
    RAID 5
    RAID 6


2. File Structure.
Answer :
Refers to the organization of data within files and how files are stored on storage devices.
Relative data and information is stored collectively in file formats.
File is a sequence of records stored in binary format.
Disk drive is formatted into several blocks that can store records.
File records are mapped onto those disk blocks.
File Organization - Defines how file records are mapped onto disk blocks.
4 Types of File Organization :-
    Heap File Organization - 
        * OS allocates memory without detailed accounting.
        * Records can be placed anywhere in the memory area.
        * Software manages records; no support for ordering, sequencing, or indexing.
    Sequential File Organization -  
        * Each record contains a unique key field.
        * Records stored in sequential order based on the unique key field.
        * Not all records are physically stored sequentially due to practical limitations.
    Hash File Organization - 
        * Utilizes hash function computation on record fields.
        * Hash function output determines the location of disk blocks for record placement.
    Clustered File Organization - 
        * Not ideal for large databases.
        * Related records from one or more relations stored in the same disk block.
        * Ordering of records not based on primary or search key.
File Operations - Operations on database files can be broadly classified into two categories (Update & Retrieval).

*/