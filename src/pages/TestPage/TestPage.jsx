import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Award } from 'lucide-react';
import styles from './testpage.module.scss';

const testData = [
    {
      "question": "What is the time complexity of the Merge Sort algorithm?",
      "options": [
        "O(n)",
        "O(n log n)",
        "O(n^2)",
        "O(2^n)"
      ],
      "correctAnswer": 1
    },
    {
      "question": "Which of the following is NOT a characteristic of a greedy algorithm?",
      "options": [
        "It makes the locally optimal choice at each step",
        "It always leads to the globally optimal solution",
        "It never reconsiders its choices",
        "It is often used for optimization problems"
      ],
      "correctAnswer": 1
    },
    {
      "question": "What is the primary goal of dynamic programming?",
      "options": [
        "To sort data efficiently",
        "To search data quickly",
        "To optimize recursive algorithms by storing intermediate results",
        "To manage memory allocation"
      ],
      "correctAnswer": 2
    },
    {
      "question": "Which of the following problems is NP-complete?",
      "options": [
        "Finding the shortest path in a graph",
        "Sorting an array",
        "The Traveling Salesman Problem (decision version)",
        "Binary search in a sorted array"
      ],
      "correctAnswer": 2
    },
    {
      "question": "What is the time complexity of the best-known algorithm for the boolean matrix multiplication problem?",
      "options": [
        "O(n^2)",
        "O(n^2.37)",
        "O(n^3)",
        "O(n log n)"
      ],
      "correctAnswer": 1
    },
    {
      "question": "Which of the following is true about the relationship between P and NP?",
      "options": [
        "P is a subset of NP",
        "NP is a subset of P",
        "P and NP are disjoint sets",
        "P is equal to NP"
      ],
      "correctAnswer": 0
    },
    {
      "question": "What is the main principle behind the Divide and Conquer algorithm design paradigm?",
      "options": [
        "Solving the problem iteratively",
        "Breaking the problem into smaller subproblems, solving them, and combining the results",
        "Always choosing the locally optimal solution",
        "Storing intermediate results to avoid redundant computations"
      ],
      "correctAnswer": 1
    },
    {
      "question": "Which of the following algorithms is used to find the minimum spanning tree of a graph?",
      "options": [
        "Dijkstra's algorithm",
        "Depth-First Search",
        "Kruskal's algorithm",
        "Floyd-Warshall algorithm"
      ],
      "correctAnswer": 2
    },
    {
      "question": "What is the time complexity of the Knuth-Morris-Pratt (KMP) string matching algorithm?",
      "options": [
        "O(n + m)",
        "O(n * m)",
        "O(n log m)",
        "O(n^2)"
      ],
      "correctAnswer": 0
    },
    {
      "question": "Which of the following is NOT a property of a hash function used in cryptography?",
      "options": [
        "Pre-image resistance",
        "Collision resistance",
        "Reversibility",
        "Second pre-image resistance"
      ],
      "correctAnswer": 2
    },
    {
      "question": "What is the purpose of the Chinese Remainder Theorem?",
      "options": [
        "To find the prime factors of a number",
        "To solve a system of linear congruences",
        "To encrypt messages",
        "To find the shortest path in a graph"
      ],
      "correctAnswer": 1
    },
    {
      "question": "Which of the following sorting algorithms has the best average-case time complexity?",
      "options": [
        "Bubble Sort",
        "Insertion Sort",
        "Quick Sort",
        "Selection Sort"
      ],
      "correctAnswer": 2
    },
    {
      "question": "What is the space complexity of the recursive implementation of the Fibonacci sequence?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(2^n)"
      ],
      "correctAnswer": 2
    },
    {
      "question": "Which of the following is an example of a backtracking algorithm?",
      "options": [
        "Breadth-First Search",
        "Dijkstra's Algorithm",
        "N-Queens Problem Solution",
        "Binary Search"
      ],
      "correctAnswer": 2
    },
    {
      "question": "What is the primary advantage of using a balanced binary search tree over a regular binary search tree?",
      "options": [
        "Lower space complexity",
        "Faster insertion operations",
        "Guaranteed O(log n) time for search, insert, and delete operations",
        "Simpler implementation"
      ],
      "correctAnswer": 2
    },
    {
      "question": "What is the time complexity of the Floyd-Warshall algorithm for finding all pairs shortest paths?",
      "options": [
        "O(V^2)",
        "O(V^3)",
        "O(E log V)",
        "O(V E)"
      ],
      "correctAnswer": 1
    },
    {
      "question": "Which data structure is most suitable for implementing a priority queue?",
      "options": [
        "Array",
        "Linked List",
        "Binary Search Tree",
        "Heap"
      ],
      "correctAnswer": 3
    },
    {
      "question": "What is the primary purpose of the Master Theorem?",
      "options": [
        "To sort arrays efficiently",
        "To solve recurrence relations",
        "To find the shortest path in a graph",
        "To encrypt data"
      ],
      "correctAnswer": 1
    },
    {
      "question": "Which of the following is NOT a valid invariant for a red-black tree?",
      "options": [
        "The root is always black",
        "Every leaf (NIL) is black",
        "If a node is red, then both its children are black",
        "Every path from a node to its descendant leaves contains the same number of red nodes"
      ],
      "correctAnswer": 3
    },
    {
      "question": "What is the time complexity of the best algorithm for matrix multiplication?",
      "options": [
        "O(n^2)",
        "O(n^2.37)",
        "O(n^3)",
        "O(n log n)"
      ],
      "correctAnswer": 1
    },
    {
      "question": "Which of the following is NOT a property of B-trees?",
      "options": [
        "All leaves are at the same level",
        "A non-leaf node with k children contains k-1 keys",
        "The root has at least two children if it is not a leaf",
        "All nodes (including root) can have a maximum of 2 children"
      ],
      "correctAnswer": 3
    },
    {
      "question": "What is the primary use of the Rabin-Karp algorithm?",
      "options": [
        "Sorting",
        "Graph traversal",
        "String matching",
        "Matrix multiplication"
      ],
      "correctAnswer": 2
    },
    {
      "question": "Which of the following is true about the relationship between NP-hard and NP-complete problems?",
      "options": [
        "All NP-hard problems are NP-complete",
        "All NP-complete problems are NP-hard",
        "NP-hard and NP-complete are the same set of problems",
        "NP-hard and NP-complete are disjoint sets of problems"
      ],
      "correctAnswer": 1
    },
    {
      "question": "What is the primary purpose of the Bellman-Ford algorithm?",
      "options": [
        "To find the minimum spanning tree",
        "To find the shortest path in a graph with negative edge weights",
        "To sort an array",
        "To find the maximum flow in a network"
      ],
      "correctAnswer": 1
    },
    {
      "question": "Which of the following is NOT a type of balanced binary search tree?",
      "options": [
        "AVL tree",
        "Red-Black tree",
        "Splay tree",
        "Binomial heap"
      ],
      "correctAnswer": 3
    },
    {
      "question": "What is the time complexity of finding the kth smallest element in an unsorted array using QuickSelect algorithm?",
      "options": [
        "O(n)",
        "O(n log n)",
        "O(k log n)",
        "O(n^2)"
      ],
      "correctAnswer": 0
    },
    {
      "question": "Which of the following algorithms is used for topological sorting of a directed acyclic graph?",
      "options": [
        "Breadth-First Search",
        "Depth-First Search",
        "Dijkstra's Algorithm",
        "Floyd-Warshall Algorithm"
      ],
      "correctAnswer": 1
    },
    {
      "question": "What is the primary advantage of using a trie data structure?",
      "options": [
        "Efficient sorting of strings",
        "Constant time complexity for insert and search operations",
        "Space efficiency for storing large number of strings with common prefixes",
        "Balancing of the tree structure"
      ],
      "correctAnswer": 2
    },
    {
      "question": "Which of the following is NOT a valid operation on a binary heap?",
      "options": [
        "Insert",
        "Delete minimum",
        "Decrease key",
        "In-order traversal"
      ],
      "correctAnswer": 3
    },
    {
      "question": "What is the primary purpose of the A* search algorithm?",
      "options": [
        "To find the shortest path in a weighted graph",
        "To sort an array",
        "To find the minimum spanning tree",
        "To perform string matching"
      ],
      "correctAnswer": 0
    },
    {
      "question": "Which of the following data structures is most suitable for implementing a cache with a Least Recently Used (LRU) eviction policy?",
      "options": [
        "Array",
        "Binary Search Tree",
        "Hash Table with Doubly Linked List",
        "Stack"
      ],
      "correctAnswer": 2
    },
    {
      "question": "What is the time complexity of the Union-Find algorithm with path compression and union by rank?",
      "options": [
        "O(n)",
        "O(log n)",
        "O(α(n)), where α is the inverse Ackermann function",
        "O(1)"
      ],
      "correctAnswer": 2
    },
    {
      "question": "Which of the following is NOT a property of a min-heap?",
      "options": [
        "The root element is always the minimum",
        "It's a complete binary tree",
        "The left and right subtrees are also min-heaps",
        "In-order traversal always yields a sorted sequence"
      ],
      "correctAnswer": 3
    },
    {
      "question": "What is the primary purpose of the Bloom filter data structure?",
      "options": [
        "To sort large datasets",
        "To check if an element is present in a set",
        "To find the shortest path in a graph",
        "To perform matrix multiplication"
      ],
      "correctAnswer": 1
    },
    {
      "question": "Which of the following algorithms is used to find strongly connected components in a directed graph?",
      "options": [
        "Breadth-First Search",
        "Depth-First Search",
        "Kosaraju's Algorithm",
        "Prim's Algorithm"
      ],
      "correctAnswer": 2
    },
    {
      "question": "What is the time complexity of the best known algorithm for the integer factorization problem?",
      "options": [
        "O(n)",
        "O(n log n)",
        "O(2^(log n)^(1/3) * (log log n)^(2/3))",
        "O(n^(1/4))"
      ],
      "correctAnswer": 2
    },
    {
      "question": "Which of the following is NOT a valid balancing operation for AVL trees?",
      "options": [
        "Left rotation",
        "Right rotation",
        "Left-Right rotation",
        "Top-Down rotation"
      ],
      "correctAnswer": 3
    },
    {
      "question": "What is the primary purpose of the Boyer-Moore majority vote algorithm?",
      "options": [
        "To find the majority element in an array",
        "To sort an array",
        "To find the shortest path in a graph",
        "To perform string matching"
      ],
      "correctAnswer": 0
    },
    {
      "question": "Which of the following problems is known to be in P?",
      "options": [
        "Boolean Satisfiability Problem (SAT)",
        "Traveling Salesman Problem",
        "Linear Programming",
        "Graph Isomorphism"
      ],
      "correctAnswer": 2
    },
    {
      "question": "What is the primary purpose of the Fenwick Tree (Binary Indexed Tree) data structure?",
      "options": [
        "To perform range queries and updates on an array",
        "To sort an array efficiently",
        "To find the shortest path in a graph",
        "To perform string matching"
      ],
      "correctAnswer": 0
    },
    {
      "question": "Which of the following is NOT a property of the Fibonacci heap?",
      "options": [
        "Amortized O(1) time for insert and decrease-key operations",
        "Worst-case O(log n) time for delete-min operation",
        "Can be used to improve the asymptotic running time of Dijkstra's algorithm",
        "Guaranteed O(1) time for all operations"
      ],
      "correctAnswer": 3
    },
    {
      "question": "What is the primary purpose of the Z-algorithm in string matching?",
      "options": [
        "To find the longest palindromic substring",
        "To compute the Z-array for efficient pattern matching",
        "To sort strings lexicographically",
        "To compress strings"
      ],
      "correctAnswer": 1
    },
    {
      "question": "Which of the following is true about the relationship between P, NP, and NP-Complete?",
      "options": [
        "P ⊆ NP-Complete ⊆ NP",
        "NP-Complete ⊆ P ⊆ NP",
        "P ⊆ NP and NP-Complete ⊆ NP",
        "NP ⊆ P and NP-Complete ⊆ P"
      ],
      "correctAnswer": 2
    },
    {
      "question": "What is the primary purpose of the Tarjan's algorithm?",
      "options": [
        "To find strongly connected components in a directed graph",
        "To sort an array",
        "To find the shortest path in a graph",
        "To perform matrix multiplication"
      ],
      "correctAnswer": 0
    },{
        "question": "Which of the following data structures is most efficient for implementing a dictionary with fast insertion, deletion, and lookup operations?",
        "options": [
          "Array",
          "Linked List",
          "Binary Search Tree",
          "Hash Table"
        ],
        "correctAnswer": 3
      },
      {
        "question": "What is the time complexity of the Floyd-Warshall algorithm for finding the shortest paths between all pairs of vertices in a weighted graph?",
        "options": [
          "O(V^2)",
          "O(V^3)",
          "O(E log V)",
          "O(V E)"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Which of the following is NOT a typical use case for dynamic programming?",
        "options": [
          "Finding the shortest path in an unweighted graph",
          "Solving the knapsack problem",
          "Computing Fibonacci numbers",
          "Finding the longest common subsequence"
        ],
        "correctAnswer": 0
      },
      {
        "question": "What is the primary purpose of the Cooley-Tukey FFT algorithm?",
        "options": [
          "To sort large datasets",
          "To compute the Discrete Fourier Transform efficiently",
          "To find the shortest path in a graph",
          "To perform matrix multiplication"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Which of the following problems is known to be NP-hard?",
        "options": [
          "Finding a maximum matching in a bipartite graph",
          "Determining if a number is prime",
          "Solving linear equations",
          "Finding a Hamiltonian cycle in a graph"
        ],
        "correctAnswer": 3
      },
      {
        "question": "What is the primary advantage of using a skip list over a balanced binary search tree?",
        "options": [
          "Lower space complexity",
          "Simpler implementation",
          "Faster search operations",
          "Guaranteed O(1) insertion time"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Which of the following is NOT a property of a B-tree?",
        "options": [
          "All leaf nodes are at the same level",
          "Non-leaf nodes store keys and pointers to child nodes",
          "The tree is always perfectly balanced",
          "The number of keys in a node is bounded by a minimum and maximum value"
        ],
        "correctAnswer": 2
      },
      {
        "question": "What is the primary purpose of the Edmonds-Karp algorithm?",
        "options": [
          "To find the maximum flow in a flow network",
          "To sort an array",
          "To find the shortest path in a graph",
          "To perform string matching"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following data structures is most suitable for implementing a LRU (Least Recently Used) cache?",
        "options": [
          "Array",
          "Binary Search Tree",
          "Hash Table with Doubly Linked List",
          "Stack"
        ],
        "correctAnswer": 2
      },
      {
        "question": "What is the time complexity of the best known algorithm for multiplying two n-digit numbers?",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n^(log 3 / log 2))",
          "O(n^2)"
        ],
        "correctAnswer": 2
      },{
        "question": "What is the time complexity of the Sieve of Eratosthenes algorithm for finding all prime numbers up to n?",
        "options": [
          "O(n)",
          "O(n log log n)",
          "O(n log n)",
          "O(n^2)"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Which of the following is NOT a property of a Red-Black tree?",
        "options": [
          "The root is always black",
          "Every leaf (NIL) is black",
          "If a node is red, then both its children are black",
          "The tree is always perfectly balanced"
        ],
        "correctAnswer": 3
      },
      {
        "question": "What is the primary purpose of the Held-Karp algorithm?",
        "options": [
          "To solve the Traveling Salesman Problem",
          "To find the shortest path in a graph",
          "To sort an array",
          "To perform matrix multiplication"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following data structures is most efficient for implementing a priority queue with decrease-key operation?",
        "options": [
          "Binary Heap",
          "Binomial Heap",
          "Fibonacci Heap",
          "AVL Tree"
        ],
        "correctAnswer": 2
      },
      {
        "question": "What is the time complexity of the best known algorithm for integer factorization?",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(exp((log n)^(1/3) * (log log n)^(2/3)))",
          "O(2^n)"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Which of the following is NOT a typical application of the Fast Fourier Transform (FFT)?",
        "options": [
          "Digital signal processing",
          "Polynomial multiplication",
          "Image compression",
          "Sorting algorithms"
        ],
        "correctAnswer": 3
      },
      {
        "question": "What is the primary purpose of the Dinic's algorithm?",
        "options": [
          "To find the maximum flow in a flow network",
          "To find the shortest path in a graph",
          "To sort an array",
          "To perform string matching"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following problems is in co-NP but not known to be in NP?",
        "options": [
          "Boolean Satisfiability (SAT)",
          "Integer Factorization",
          "Graph Isomorphism",
          "Primality Testing"
        ],
        "correctAnswer": 1
      },
      {
        "question": "What is the primary advantage of using a van Emde Boas tree?",
        "options": [
          "O(log log u) time for insert, delete, and search operations",
          "O(1) time for all operations",
          "Guaranteed balance",
          "Lower space complexity compared to binary search trees"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following is NOT a property of the A* search algorithm?",
        "options": [
          "It is complete",
          "It is optimal if the heuristic is admissible",
          "It expands all nodes in the search space",
          "It uses both path cost and a heuristic estimate"
        ],
        "correctAnswer": 2
      },
      {
        "question": "What is the primary purpose of the Burrows-Wheeler transform?",
        "options": [
          "To encrypt data",
          "To compress data",
          "To sort strings",
          "To find the shortest path in a graph"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Which of the following is true about the relationship between NL and P?",
        "options": [
          "NL = P",
          "NL ⊆ P",
          "P ⊆ NL",
          "NL and P are incomparable"
        ],
        "correctAnswer": 1
      },
      {
        "question": "What is the time complexity of the best known algorithm for the 3SUM problem?",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(n^3)"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Which of the following data structures is most suitable for implementing an LFU (Least Frequently Used) cache?",
        "options": [
          "Array",
          "Binary Search Tree",
          "Hash Table with Doubly Linked List and Frequency Counter",
          "Stack"
        ],
        "correctAnswer": 2
      },
      {
        "question": "What is the primary purpose of the Johnson's algorithm?",
        "options": [
          "To find the shortest paths between all pairs of vertices in a sparse graph",
          "To sort an array",
          "To find the maximum flow in a network",
          "To perform string matching"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following is NOT a property of a suffix tree?",
        "options": [
          "It can be constructed in O(n) time for a string of length n",
          "It allows for O(m) time pattern matching for a pattern of length m",
          "It requires O(n) space for a string of length n",
          "It always has exactly n leaves for a string of length n"
        ],
        "correctAnswer": 3
      },
      {
        "question": "What is the primary purpose of the Pollard's rho algorithm?",
        "options": [
          "To find prime factors of a number",
          "To sort an array",
          "To find the shortest path in a graph",
          "To perform matrix multiplication"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following problems is known to be in BQP but not known to be in P?",
        "options": [
          "Integer Factorization",
          "Graph Isomorphism",
          "2-SAT",
          "Linear Programming"
        ],
        "correctAnswer": 0
      },
      {
        "question": "What is the primary advantage of using a Cuckoo hash table?",
        "options": [
          "O(1) worst-case lookup time",
          "Lower space complexity compared to other hash tables",
          "Simpler implementation",
          "Guaranteed O(1) insertion time"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following is NOT a typical use case for the Hungarian algorithm?",
        "options": [
          "Assignment problem",
          "Minimum cost perfect matching in bipartite graphs",
          "Finding the shortest path in a graph",
          "Maximum weight matching in bipartite graphs"
        ],
        "correctAnswer": 2
      },
      {
        "question": "What is the time complexity of the best known algorithm for multiplying two n × n matrices?",
        "options": [
          "O(n^2)",
          "O(n^2.37)",
          "O(n^3)",
          "O(n log n)"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Which of the following is NOT a property of a treap?",
        "options": [
          "It combines properties of binary search trees and heaps",
          "It uses randomization for balancing",
          "It guarantees O(log n) expected time for insert, delete, and search operations",
          "It always maintains perfect balance"
        ],
        "correctAnswer": 3
      },
      {
        "question": "What is the primary purpose of the Karger's algorithm?",
        "options": [
          "To find the minimum cut in an undirected graph",
          "To sort an array",
          "To find the shortest path in a graph",
          "To perform string matching"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following problems is known to be PSPACE-complete?",
        "options": [
          "Boolean Satisfiability (SAT)",
          "Traveling Salesman Problem",
          "Quantified Boolean Formula (QBF)",
          "3-Coloring"
        ],
        "correctAnswer": 2
      },
      {
        "question": "What is the primary advantage of using a Fibonacci heap over a binary heap?",
        "options": [
          "O(1) amortized time for insert and decrease-key operations",
          "Lower space complexity",
          "Simpler implementation",
          "Guaranteed O(1) time for all operations"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following is NOT a typical application of the Discrete Fourier Transform?",
        "options": [
          "Convolution",
          "Filtering in signal processing",
          "String matching",
          "Multiplication of large integers"
        ],
        "correctAnswer": 2
      },
      {
        "question": "What is the primary purpose of the Christofides algorithm?",
        "options": [
          "To find an approximate solution to the Traveling Salesman Problem",
          "To sort an array",
          "To find the shortest path in a graph",
          "To perform matrix multiplication"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following data structures is most efficient for range minimum queries on a static array?",
        "options": [
          "Segment Tree",
          "Fenwick Tree",
          "Sparse Table",
          "AVL Tree"
        ],
        "correctAnswer": 2
      },
      {
        "question": "What is the time complexity of the best known algorithm for the Closest Pair of Points problem in 2D?",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(n^3)"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Which of the following is NOT a property of a Merkle tree?",
        "options": [
          "It is a binary tree",
          "Leaf nodes contain the hash of data blocks",
          "Non-leaf nodes contain the hash of their children",
          "It guarantees O(1) time for verifying the integrity of data"
        ],
        "correctAnswer": 3
      },
      {
        "question": "What is the primary purpose of the Coppersmith–Winograd algorithm?",
        "options": [
          "To multiply matrices faster than the naive O(n^3) algorithm",
          "To sort an array",
          "To find the shortest path in a graph",
          "To perform string matching"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following problems is known to be in RP but not known to be in P?",
        "options": [
          "Primality Testing",
          "Matrix Multiplication",
          "Polynomial Identity Testing",
          "2-SAT"
        ],
        "correctAnswer": 2
      },
      {
        "question": "What is the primary advantage of using a skip list over a balanced binary search tree?",
        "options": [
          "Lower space complexity",
          "Simpler implementation",
          "Faster search operations",
          "Guaranteed O(1) insertion time"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Which of the following is NOT a typical use case for the Levenberg–Marquardt algorithm?",
        "options": [
          "Non-linear least squares problems",
          "Curve fitting",
          "Finding the shortest path in a graph",
          "Parameter estimation in machine learning models"
        ],
        "correctAnswer": 2
      },
      {
        "question": "What is the time complexity of the best known algorithm for the Graph Isomorphism problem?",
        "options": [
          "O(n)",
          "O(n log n)",
          "2^(O(√(n log n)))",
          "O(2^n)"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Which of the following data structures is most efficient for implementing a double-ended priority queue?",
        "options": [
          "Binary Heap",
          "Binomial Heap",
          "Min-Max Heap",
          "AVL Tree"
        ],
        "correctAnswer": 2
      },
      {
        "question": "What is the primary purpose of the Lempel-Ziv-Welch (LZW) algorithm?",
        "options": [
          "To compress data",
          "To sort an array",
          "To find the shortest path in a graph",
          "To perform matrix multiplication"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Which of the following problems is known to be NP-hard but not known to be in NP?",
        "options": [
          "Traveling Salesman Problem",
          "Boolean Satisfiability (SAT)",
          "Clique Problem",
          "Halting Problem"
        ],
        "correctAnswer": 3
      }
    ];

const MCQTest = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    setQuestions(testData);
  }, []);

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    if (answers.hasOwnProperty(questionIndex)) return; // Prevent changing answer if already answered

    const newAnswers = { ...answers, [questionIndex]: answerIndex };
    setAnswers(newAnswers);

    if (answerIndex === questions[questionIndex].correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const getOptionClass = (questionIndex, optionIndex) => {
    if (!answers.hasOwnProperty(questionIndex)) return styles.optionButton;
    if (optionIndex === questions[questionIndex].correctAnswer) return styles.correctAnswer;
    if (answers[questionIndex] === optionIndex) return styles.incorrectAnswer;
    return styles.optionButton;
  };

  const renderIcon = (questionIndex, optionIndex) => {
    if (!answers.hasOwnProperty(questionIndex)) return null;
    if (optionIndex === questions[questionIndex].correctAnswer) return <CheckCircle className={styles.icon} />;
    if (answers[questionIndex] === optionIndex) return <XCircle className={styles.icon} />;
    return null;
  };

  if (questions.length === 0) {
    return <div className={styles.loading}>Loading...</div>;
  }

  const allQuestionsAnswered = Object.keys(answers).length === questions.length;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Multiple Choice Quiz</h1>
      {questions.map((question, qIndex) => (
        <div key={qIndex} className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.questionTitle}>
              Question {qIndex + 1} of {questions.length}
            </h2>
            <p className={styles.question}>{question.question}</p>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.optionsGrid}>
              {question.options.map((option, oIndex) => (
                <button
                  key={oIndex}
                  onClick={() => handleAnswerSelect(qIndex, oIndex)}
                  className={getOptionClass(qIndex, oIndex)}
                  disabled={answers.hasOwnProperty(qIndex)}
                >
                  {option}
                  {renderIcon(qIndex, oIndex)}
                </button>
              ))}
            </div>
            {answers.hasOwnProperty(qIndex) && (
              <p className={styles.explanation}>
                {answers[qIndex] === question.correctAnswer 
                  ? "Correct! Well done." 
                  : `Incorrect. The correct answer is: ${question.options[question.correctAnswer]}`}
              </p>
            )}
          </div>
        </div>
      ))}
      {allQuestionsAnswered && (
        <div className={styles.resultsCard}>
          <h2 className={styles.resultsTitle}>Quiz Complete!</h2>
          <div className={styles.scoreContainer}>
            <Award className={styles.scoreIcon} />
            <p className={styles.resultsScore}>
              Your score: {score} out of {questions.length}
            </p>
          </div>
          <p className={styles.encouragement}>
            {score === questions.length 
              ? "Perfect score! Congratulations!" 
              : "Good effort! Review the questions above to see where you can improve."}
          </p>
        </div>
      )}
    </div>
  );
};

export default MCQTest;