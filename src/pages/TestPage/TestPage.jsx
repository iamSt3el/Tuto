import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Award } from 'lucide-react';
import styles from './testpage.module.scss';

const testData = 
[
  {
    "question": "What is the main objective of K-means clustering algorithm?",
    "options": [
      "To classify labeled data points",
      "To minimize the within-cluster sum of squares (inertia)",
      "To maximize the distance between clusters",
      "To predict future data points"
    ],
    "correctAnswer": 1
  },
  {
    "question": "In K-means clustering, what does the 'elbow method' help determine?",
    "options": [
      "The convergence rate of the algorithm",
      "The optimal number of clusters (K)",
      "The size of each cluster",
      "The distance metric to use"
    ],
    "correctAnswer": 1
  },
  {
    "question": "What is the time complexity of the K-means algorithm for 'n' samples, 'k' clusters, and 'i' iterations?",
    "options": [
      "O(n)",
      "O(nki)",
      "O(n^2)",
      "O(k^2)"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following best describes anomaly detection?",
    "options": [
      "A supervised learning technique for classification",
      "A method to identify patterns in labeled data",
      "A technique to identify data points that deviate significantly from the norm",
      "A clustering algorithm for balanced datasets"
    ],
    "correctAnswer": 2
  },
  {
    "question": "What is the key characteristic of DBSCAN clustering compared to K-means?",
    "options": [
      "It requires specifying the number of clusters beforehand",
      "It can only form spherical clusters",
      "It can identify clusters of arbitrary shapes and handle noise",
      "It always produces balanced clusters"
    ],
    "correctAnswer": 2
  },
  {
    "question": "What range of values does the Silhouette Score typically have?",
    "options": [
      "0 to 1",
      "-1 to 1",
      "0 to infinity",
      "-infinity to +infinity"
    ],
    "correctAnswer": 1
  },
  {
    "question": "What does a high Davies-Bouldin Index indicate?",
    "options": [
      "Good clustering performance",
      "Poor clustering performance",
      "Optimal number of clusters",
      "High data dimensionality"
    ],
    "correctAnswer": 1
  },
  {
    "question": "In reinforcement learning, what is a policy?",
    "options": [
      "A set of training data",
      "The reward function",
      "A mapping from states to actions",
      "The learning rate of the algorithm"
    ],
    "correctAnswer": 2
  },
  {
    "question": "What is the purpose of the ε-greedy policy in Q-learning?",
    "options": [
      "To maximize immediate rewards",
      "To balance exploration and exploitation",
      "To minimize computational complexity",
      "To ensure convergence"
    ],
    "correctAnswer": 1
  },
  {
    "question": "What is the key difference between content-based and collaborative filtering?",
    "options": [
      "Content-based uses user ratings, while collaborative uses item features",
      "Collaborative uses user behavior patterns, while content-based uses item features",
      "Content-based is supervised, while collaborative is unsupervised",
      "There is no difference between them"
    ],
    "correctAnswer": 1
  },
  {
    "question": "What is the Bellman Equation used for in reinforcement learning?",
    "options": [
      "Feature selection",
      "Policy evaluation",
      "Calculating the optimal value function",
      "Determining the learning rate"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Which metric is most appropriate for evaluating clustering performance when true labels are available?",
    "options": [
      "Silhouette Score",
      "Davies-Bouldin Index",
      "Adjusted Rand Index",
      "Dunn Index"
    ],
    "correctAnswer": 2
  },
  {
    "question": "What is the main advantage of hierarchical clustering over K-means?",
    "options": [
      "Lower computational complexity",
      "No need to specify number of clusters beforehand",
      "Better handling of outliers",
      "Faster convergence"
    ],
    "correctAnswer": 1
  },
  {
    "question": "In Q-learning, what does the Q-value represent?",
    "options": [
      "The immediate reward",
      "The optimal policy",
      "The expected future rewards for taking an action in a state",
      "The learning rate"
    ],
    "correctAnswer": 2
  },
  {
    "question": "What is the primary challenge addressed by mean normalization in recommender systems?",
    "options": [
      "Cold start problem",
      "Different rating scales among users",
      "Computational complexity",
      "Feature selection"
    ],
    "correctAnswer": 1
  },
    {
      "question": "What is the primary assumption of the Gaussian distribution in anomaly detection?",
      "options": [
        "The data is always normally distributed",
        "Features are independent of each other",
        "Outliers follow a normal distribution",
        "The mean is always zero"
      ],
      "correctAnswer": 1
    },
    {
      "question": "In agglomerative clustering, what does the 'single linkage' criterion measure?",
      "options": [
        "The average distance between all points in two clusters",
        "The maximum distance between any two points in different clusters",
        "The minimum distance between any two points in different clusters",
        "The distance between cluster centroids"
      ],
      "correctAnswer": 2
    },
    {
      "question": "What is the main limitation of the Dunn Index as a clustering metric?",
      "options": [
        "It only works with K-means clustering",
        "It is sensitive to noise and outliers",
        "It can only compare two clusters at a time",
        "It requires true labels"
      ],
      "correctAnswer": 1
    },
    {
      "question": "Which parameter in DBSCAN determines the minimum cluster size?",
      "options": [
        "epsilon (ε)",
        "minPoints",
        "radius",
        "density"
      ],
      "correctAnswer": 1
    },
    {
      "question": "What is the key difference between V-measure and NMI?",
      "options": [
        "V-measure is symmetric while NMI isn't",
        "V-measure uses entropy while NMI uses mutual information",
        "V-measure combines homogeneity and completeness, while NMI is a single measure",
        "V-measure requires true labels while NMI doesn't"
      ],
      "correctAnswer": 2
    },
    {
      "question": "In reinforcement learning, what is the discount factor γ (gamma) used for?",
      "options": [
        "To determine the learning rate",
        "To weight immediate versus future rewards",
        "To calculate the error rate",
        "To determine the exploration rate"
      ],
      "correctAnswer": 1
    },
    {
      "question": "What is the 'mini-batch' approach in Q-learning used for?",
      "options": [
        "To reduce memory requirements",
        "To speed up training by updating on smaller subsets of experiences",
        "To increase exploration",
        "To improve convergence guarantee"
      ],
      "correctAnswer": 1
    },
    {
      "question": "Which of the following is NOT a common initialization method for K-means?",
      "options": [
        "Random initialization",
        "K-means++",
        "Forgy method",
        "DBSCAN initialization"
      ],
      "correctAnswer": 3
    },
    {
      "question": "What is the main advantage of soft clustering over hard clustering?",
      "options": [
        "It's computationally less expensive",
        "It allows points to belong to multiple clusters with different degrees",
        "It always produces better results",
        "It requires fewer parameters"
      ],
      "correctAnswer": 1
    },
    {
      "question": "In collaborative filtering, what is the cold start problem?",
      "options": [
        "System performance issues during initialization",
        "Difficulty in making recommendations for new users or items",
        "Slow convergence of the algorithm",
        "Issues with feature scaling"
      ],
      "correctAnswer": 1
    },
    {
      "question": "What is the main purpose of PCA in feature selection for clustering?",
      "options": [
        "To increase the number of features",
        "To reduce dimensionality while preserving variance",
        "To normalize the features",
        "To remove outliers"
      ],
      "correctAnswer": 1
    },
    {
      "question": "What is the relationship between homogeneity and completeness in clustering evaluation?",
      "options": [
        "They are always equal",
        "They are inversely proportional",
        "They represent different aspects of cluster quality and can trade off",
        "They are independent measures"
      ],
      "correctAnswer": 2
    },
    {
      "question": "In reinforcement learning, what is the difference between on-policy and off-policy learning?",
      "options": [
        "On-policy requires more computation",
        "Off-policy can learn from actions not taken by the current policy",
        "On-policy always converges faster",
        "Off-policy requires more memory"
      ],
      "correctAnswer": 1
    },
    {
      "question": "What is the purpose of the Adjusted Mutual Information (AMI) score?",
      "options": [
        "To normalize clustering results",
        "To account for chance in mutual information scores",
        "To compare different clustering algorithms",
        "To measure cluster separation"
      ],
      "correctAnswer": 1
    },
    {
      "question": "Which of the following is true about the Fowlkes-Mallows Index?",
      "options": [
        "It only works with hierarchical clustering",
        "It measures the similarity between two clusterings",
        "It requires a specific number of clusters",
        "It can't handle unbalanced clusters"
      ],
      "correctAnswer": 1
    },
    {
      "question": "What is the main challenge in determining the optimal number of clusters in K-means?",
      "options": [
        "Computational complexity",
        "The subjective nature of what constitutes optimal clustering",
        "Memory requirements",
        "Algorithm convergence"
      ],
      "correctAnswer": 1
    },
    {
      "question": "In content-based filtering, what is the primary source of information used for recommendations?",
      "options": [
        "User behavior patterns",
        "Item features and characteristics",
        "User ratings",
        "Social networks"
      ],
      "correctAnswer": 1
    },
    {
      "question": "What is the key advantage of using mini-batch updates in reinforcement learning?",
      "options": [
        "Better exploration",
        "More stable learning and reduced variance",
        "Guaranteed convergence",
        "Lower memory usage"
      ],
      "correctAnswer": 1
    },
    {
      "question": "Which clustering metric is most appropriate when clusters are expected to be of varying densities?",
      "options": [
        "Silhouette Score",
        "Davies-Bouldin Index",
        "DBSCAN-based metrics",
        "K-means inertia"
      ],
      "correctAnswer": 2
    },
    {
      "question": "What is the main ethical concern with recommender systems?",
      "options": [
        "Computational cost",
        "Filter bubbles and echo chambers",
        "System scalability",
        "User interface design"
      ],
      "correctAnswer": 1
    },
      {
        "question": "When implementing Q-learning with neural networks, what is the purpose of using a target network?",
        "options": [
          "To reduce computational complexity",
          "To improve exploration efficiency",
          "To stabilize training by reducing correlation between updates",
          "To increase the learning rate"
        ],
        "correctAnswer": 2
      },
      {
        "question": "In hierarchical clustering, what does the cophenetic correlation coefficient measure?",
        "options": [
          "The optimal number of clusters",
          "The correlation between original distances and dendrogram-derived distances",
          "The similarity between different clustering methods",
          "The internal cluster validity"
        ],
        "correctAnswer": 1
      },
      {
        "question": "What is the fundamental difference between implicit and explicit feedback in recommender systems?",
        "options": [
          "Implicit feedback is more accurate",
          "Explicit feedback requires user ratings while implicit feedback is derived from behavior",
          "Implicit feedback requires more computational resources",
          "Explicit feedback is collected automatically"
        ],
        "correctAnswer": 1
      },
      {
        "question": "In reinforcement learning, what is the difference between model-based and model-free approaches?",
        "options": [
          "Model-based approaches require less memory",
          "Model-free approaches require a complete environment model",
          "Model-based approaches learn a model of the environment's dynamics",
          "There is no significant difference between them"
        ],
        "correctAnswer": 2
      },
      {
        "question": "What is the key limitation of using the elbow method for determining the optimal number of clusters?",
        "options": [
          "High computational cost",
          "The 'elbow' point can be ambiguous and subjective",
          "It only works with K-means clustering",
          "It requires labeled data"
        ],
        "correctAnswer": 1
      },
      {
        "question": "In DBSCAN, what is the significance of a point being classified as a 'noise point'?",
        "options": [
          "It belongs to multiple clusters",
          "It doesn't have enough neighbors within epsilon distance",
          "It's an outlier in the feature space",
          "It's at the boundary of a cluster"
        ],
        "correctAnswer": 1
      },
      {
        "question": "What is the primary advantage of using the Adjusted Rand Index over the regular Rand Index?",
        "options": [
          "Better computational efficiency",
          "Adjustment for chance agreement",
          "Handling of missing values",
          "Support for hierarchical clustering"
        ],
        "correctAnswer": 1
      },
      {
        "question": "In reinforcement learning, what is the purpose of experience replay?",
        "options": [
          "To reduce memory usage",
          "To improve exploration",
          "To break correlations in the training data and improve sample efficiency",
          "To speed up convergence"
        ],
        "correctAnswer": 2
      },
      {
        "question": "What is the main challenge when applying PCA for feature selection in clustering?",
        "options": [
          "Determining the optimal number of components to retain",
          "Handling categorical variables",
          "Computing the covariance matrix",
          "Normalizing the features"
        ],
        "correctAnswer": 0
      },
      {
        "question": "In collaborative filtering, what is the purpose of matrix factorization?",
        "options": [
          "To reduce storage requirements",
          "To discover latent features that explain observed preferences",
          "To handle missing values",
          "To normalize user ratings"
        ],
        "correctAnswer": 1
      },
      {
        "question": "What is the key difference between policy iteration and value iteration in reinforcement learning?",
        "options": [
          "Policy iteration is faster",
          "Value iteration doesn't require a policy",
          "Policy iteration alternates between policy evaluation and improvement",
          "Value iteration can't handle continuous states"
        ],
        "correctAnswer": 2
      },
      {
        "question": "When using agglomerative clustering, what is the Ward linkage criterion optimizing?",
        "options": [
          "Minimum distance between clusters",
          "Maximum distance between clusters",
          "Variance within clusters",
          "Cluster size balance"
        ],
        "correctAnswer": 2
      },
      {
        "question": "What is the main advantage of using soft updates (Polyak averaging) in Q-learning?",
        "options": [
          "Faster convergence",
          "More stable learning process",
          "Lower memory requirements",
          "Better exploration"
        ],
        "correctAnswer": 1
      },
      {
        "question": "In recommender systems, what is the purpose of incorporating temporal dynamics?",
        "options": [
          "To reduce computational complexity",
          "To account for changing user preferences over time",
          "To handle missing data",
          "To improve storage efficiency"
        ],
        "correctAnswer": 1
      },
      {
        "question": "What is the relationship between the learning rate and exploration rate in Q-learning?",
        "options": [
          "They are always equal",
          "They are inversely proportional",
          "Higher learning rates require lower exploration rates",
          "They serve different purposes and are independently tuned"
        ],
        "correctAnswer": 3
      },
      {
        "question": "When using the V-measure for clustering evaluation, what does a score of 1.0 indicate?",
        "options": [
          "Perfect random clustering",
          "Perfect match with ground truth",
          "Average clustering performance",
          "Poor clustering performance"
        ],
        "correctAnswer": 1
      },
      {
        "question": "What is the main drawback of using Manhattan distance in K-means clustering?",
        "options": [
          "Higher computational cost",
          "Less interpretable results",
          "Sensitivity to feature scaling",
          "Poor performance with high-dimensional data"
        ],
        "correctAnswer": 3
      },
      {
        "question": "In reinforcement learning, what is the purpose of reward shaping?",
        "options": [
          "To normalize rewards",
          "To guide learning towards desired behaviors while maintaining optimal policy",
          "To reduce computational complexity",
          "To eliminate the need for exploration"
        ],
        "correctAnswer": 1
      },
      {
        "question": "What is the primary challenge in implementing hybrid recommender systems?",
        "options": [
          "High computational cost",
          "Difficulty in combining different types of information effectively",
          "Limited scalability",
          "Poor user interface integration"
        ],
        "correctAnswer": 1
      },
      {
        "question": "In anomaly detection, what is the advantage of using a Gaussian Mixture Model over a single Gaussian distribution?",
        "options": [
          "Lower computational complexity",
          "Ability to model more complex data distributions",
          "Better handling of missing values",
          "Simpler parameter estimation"
        ],
        "correctAnswer": 1
      },

        {
          "question": "In the context of K-means clustering, what is the significance of the inertia metric plateauing in the elbow method?",
          "options": [
            "The algorithm has failed to converge",
            "Additional clusters provide diminishing returns in explaining data variance",
            "The data is not suitable for clustering",
            "The initialization was poor"
          ],
          "correctAnswer": 1
        },
        {
          "question": "When implementing Q-learning with function approximation, what is the purpose of Double Q-learning?",
          "options": [
            "To double the learning speed",
            "To reduce overestimation bias in action values",
            "To increase exploration efficiency",
            "To handle continuous action spaces"
          ],
          "correctAnswer": 1
        },
        {
          "question": "In collaborative filtering, what is the 'long tail' problem?",
          "options": [
            "Computational complexity with large datasets",
            "Difficulty in recommending niche items with few ratings",
            "Users with unusual preferences",
            "System scalability issues"
          ],
          "correctAnswer": 1
        },
        {
          "question": "What is the key advantage of using UMAP over t-SNE for dimensionality reduction in clustering?",
          "options": [
            "Better preservation of global structure",
            "Faster computation time",
            "Simpler implementation",
            "Lower memory requirements"
          ],
          "correctAnswer": 0
        },
        {
          "question": "In reinforcement learning, what is the purpose of hierarchical reinforcement learning (HRL)?",
          "options": [
            "To reduce memory usage",
            "To break down complex tasks into simpler subtasks",
            "To improve exploration efficiency",
            "To speed up training"
          ],
          "correctAnswer": 1
        },
        {
          "question": "What is the main limitation of the Davies-Bouldin Index when evaluating clustering quality?",
          "options": [
            "High computational cost",
            "Sensitivity to cluster shape and density variations",
            "Requirement for true labels",
            "Limited scalability"
          ],
          "correctAnswer": 1
        },
        {
          "question": "In the context of recommender systems, what is the 'filter bubble' effect?",
          "options": [
            "A technical limitation of filtering algorithms",
            "Users being increasingly exposed to similar content, limiting diversity",
            "A method for removing noise from recommendations",
            "A way to improve recommendation accuracy"
          ],
          "correctAnswer": 1
        },
        {
          "question": "What is the primary difference between Monte Carlo and Temporal Difference learning in reinforcement learning?",
          "options": [
            "Computational efficiency",
            "Memory requirements",
            "When learning updates occur (episode end vs. each step)",
            "Exploration strategy"
          ],
          "correctAnswer": 2
        },
        {
          "question": "In DBSCAN clustering, what is the relationship between epsilon (ε) and minPoints parameters?",
          "options": [
            "They are independent",
            "Larger ε requires larger minPoints for meaningful clusters",
            "They must be equal",
            "They are inversely proportional"
          ],
          "correctAnswer": 1
        },
        {
          "question": "What is the main challenge in implementing deep reinforcement learning with sparse rewards?",
          "options": [
            "High memory usage",
            "Difficulty in credit assignment and exploration",
            "Slow convergence",
            "Model complexity"
          ],
          "correctAnswer": 1
        },
        {
          "question": "In the context of clustering metrics, why might the Calinski-Harabasz Index be preferred over the Silhouette Score?",
          "options": [
            "Lower computational complexity",
            "Better handling of high-dimensional data",
            "More interpretable results",
            "Support for non-spherical clusters"
          ],
          "correctAnswer": 0
        },
        {
          "question": "What is the primary purpose of curriculum learning in reinforcement learning?",
          "options": [
            "To reduce memory requirements",
            "To gradually increase task difficulty for better learning",
            "To improve computational efficiency",
            "To handle continuous action spaces"
          ],
          "correctAnswer": 1
        },
        {
          "question": "In recommender systems, what is the main advantage of using attention mechanisms?",
          "options": [
            "Reduced computation time",
            "Better capture of user-item interaction patterns",
            "Lower memory requirements",
            "Simpler implementation"
          ],
          "correctAnswer": 1
        },
        {
          "question": "What is the key difference between spectral clustering and K-means?",
          "options": [
            "Computational complexity",
            "Ability to find non-spherical clusters",
            "Number of parameters",
            "Initialization requirements"
          ],
          "correctAnswer": 1
        },
        {
          "question": "In reinforcement learning, what is the purpose of prioritized experience replay?",
          "options": [
            "To reduce memory usage",
            "To sample more important transitions more frequently",
            "To improve exploration",
            "To speed up convergence"
          ],
          "correctAnswer": 1
        },
        {
          "question": "What is the main challenge in implementing multi-armed bandits with non-stationary rewards?",
          "options": [
            "High computational cost",
            "Balancing exploration and adaptation to changing rewards",
            "Memory requirements",
            "Algorithm complexity"
          ],
          "correctAnswer": 1
        },
        {
          "question": "In clustering, what is the purpose of the Hopkins statistic?",
          "options": [
            "To determine the optimal number of clusters",
            "To measure the clustering tendency of the data",
            "To evaluate cluster quality",
            "To compare different clustering algorithms"
          ],
          "correctAnswer": 1
        },
        {
          "question": "What is the primary advantage of using Thompson Sampling in reinforcement learning?",
          "options": [
            "Guaranteed convergence",
            "Better exploration-exploitation balance",
            "Lower computational cost",
            "Simpler implementation"
          ],
          "correctAnswer": 1
        },
        {
          "question": "In recommender systems, what is the purpose of negative sampling?",
          "options": [
            "To improve recommendation diversity",
            "To reduce computational cost in training",
            "To handle missing data",
            "To increase model accuracy"
          ],
          "correctAnswer": 1
        },
        {
          "question": "What is the main advantage of using Wasserstein distance in clustering compared to Euclidean distance?",
          "options": [
            "Lower computational cost",
            "Better handling of distributions and probability masses",
            "Simpler implementation",
            "More interpretable results"
          ],
          "correctAnswer": 1
        },
          {
            "question": "In the context of reinforcement learning with continuous action spaces, what is the primary advantage of using the DDPG (Deep Deterministic Policy Gradient) algorithm?",
            "options": [
              "Lower memory requirements",
              "Ability to learn deterministic policies in continuous action spaces",
              "Faster convergence in discrete action spaces",
              "Simpler implementation than DQN"
            ],
            "correctAnswer": 1
          },
          {
            "question": "When using agglomerative clustering, what is the theoretical time complexity with complete linkage?",
            "options": [
              "O(n)",
              "O(n log n)",
              "O(n²)",
              "O(n³)"
            ],
            "correctAnswer": 3
          },
          {
            "question": "In recommender systems, what is the primary purpose of implementing self-attention mechanisms?",
            "options": [
              "To reduce computational complexity",
              "To capture sequential patterns in user behavior",
              "To handle missing data",
              "To normalize user ratings"
            ],
            "correctAnswer": 1
          },
          {
            "question": "What is the key difference between the Dunn Index and the Davies-Bouldin Index for cluster validation?",
            "options": [
              "Computational complexity",
              "Dunn Index maximizes for better clustering while Davies-Bouldin minimizes",
              "Handling of outliers",
              "Required number of clusters"
            ],
            "correctAnswer": 1
          },
          {
            "question": "In Q-learning, what is the primary purpose of implementing a Dueling Network Architecture?",
            "options": [
              "To improve exploration efficiency",
              "To separate state value and advantage estimation",
              "To reduce memory requirements",
              "To handle continuous action spaces"
            ],
            "correctAnswer": 1
          },
          {
            "question": "What is the main advantage of using Gaussian Mixture Models over K-means for clustering?",
            "options": [
              "Lower computational cost",
              "Ability to model clusters with different shapes and sizes",
              "Simpler parameter tuning",
              "Better handling of categorical data"
            ],
            "correctAnswer": 1
          },
          {
            "question": "In reinforcement learning, what is the primary challenge of implementing Hindsight Experience Replay (HER)?",
            "options": [
              "High memory requirements",
              "Complex goal relabeling strategy",
              "Slow convergence",
              "Limited applicability"
            ],
            "correctAnswer": 1
          },
          {
            "question": "What is the main limitation of using the Adjusted Mutual Information (AMI) score for clustering evaluation?",
            "options": [
              "High computational cost",
              "Requirement for ground truth labels",
              "Sensitivity to noise",
              "Limited range of values"
            ],
            "correctAnswer": 1
          },
          {
            "question": "In collaborative filtering, what is the primary purpose of implementing dropout in neural network-based approaches?",
            "options": [
              "To speed up training",
              "To prevent overfitting and improve generalization",
              "To handle missing values",
              "To reduce model complexity"
            ],
            "correctAnswer": 1
          },
          {
            "question": "What is the key advantage of using Proximal Policy Optimization (PPO) over traditional policy gradient methods?",
            "options": [
              "Lower memory usage",
              "More stable training through constrained policy updates",
              "Faster convergence in all cases",
              "Simpler implementation"
            ],
            "correctAnswer": 1
          },
          {
            "question": "In HDBSCAN clustering, what is the main improvement over traditional DBSCAN?",
            "options": [
              "Lower computational complexity",
              "Ability to find clusters of varying density",
              "Simpler parameter tuning",
              "Better handling of categorical data"
            ],
            "correctAnswer": 1
          },
          {
            "question": "What is the primary purpose of implementing cross-entropy in clustering objective functions?",
            "options": [
              "To reduce computational cost",
              "To measure the quality of soft clustering assignments",
              "To handle missing data",
              "To normalize cluster sizes"
            ],
            "correctAnswer": 1
          },
          {
            "question": "In reinforcement learning, what is the main advantage of using the Retrace(λ) algorithm?",
            "options": [
              "Faster convergence",
              "More efficient off-policy learning with safety guarantees",
              "Lower memory requirements",
              "Simpler implementation"
            ],
            "correctAnswer": 1
          },
          {
            "question": "What is the key benefit of using t-distributed Stochastic Neighbor Embedding (t-SNE) in clustering visualization?",
            "options": [
              "Linear computational complexity",
              "Better preservation of local structure in low dimensions",
              "Guaranteed global optimum",
              "Handling of categorical data"
            ],
            "correctAnswer": 1
          },
          {
            "question": "In recommender systems, what is the primary purpose of implementing attention mechanisms with self-attention?",
            "options": [
              "To reduce computation time",
              "To capture dynamic user-item relationships",
              "To handle missing data",
              "To normalize ratings"
            ],
            "correctAnswer": 1
          },
          {
            "question": "What is the main advantage of using Soft Actor-Critic (SAC) in reinforcement learning?",
            "options": [
              "Simpler implementation",
              "Maximum entropy framework for exploration and stability",
              "Lower memory requirements",
              "Faster convergence in all cases"
            ],
            "correctAnswer": 1
          },
          {
            "question": "In clustering, what is the primary purpose of the silhouette analysis?",
            "options": [
              "To determine cluster centers",
              "To evaluate how well each object fits within its cluster",
              "To handle missing data",
              "To normalize feature scales"
            ],
            "correctAnswer": 1
          },
          {
            "question": "What is the main advantage of using Wasserstein GAN for anomaly detection?",
            "options": [
              "Lower computational cost",
              "More stable training and better convergence properties",
              "Simpler implementation",
              "Guaranteed optimal solutions"
            ],
            "correctAnswer": 1
          },
          {
            "question": "In reinforcement learning, what is the primary purpose of implementing curiosity-driven exploration?",
            "options": [
              "To reduce memory usage",
              "To encourage exploration of novel states",
              "To speed up training",
              "To simplify the reward function"
            ],
            "correctAnswer": 1
          },
          {
            "question": "What is the key advantage of using Variational Autoencoders (VAEs) for clustering?",
            "options": [
              "Lower computational cost",
              "Ability to learn meaningful latent representations",
              "Simpler implementation",
              "Better handling of categorical data"
            ],
            "correctAnswer": 1
          }
        
      
    
  
]
    
    ;

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