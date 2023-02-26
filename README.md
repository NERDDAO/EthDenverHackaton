
# PROJECT TELESCOPE

 **PURPOSE**= to create a pipeline where anyone could submit, review or fund peer reviewed papers. 

 What is a peer reviewed paper?

 A peer-reviewed paper is an article or paper that has been evaluated by a group of experts in the same field of study or research in order to ensure that the information presented is accurate, reliable, and of high quality. This review process is known as peer review, and it typically involves sending the paper to several reviewers who are experts in the relevant subject matter.

The reviewers will carefully examine the paper and provide feedback on its scientific or academic merit, including factors such as the accuracy and completeness of the data, the soundness of the methods used, and the validity of the conclusions drawn. They may also suggest improvements to the paper or recommend that it be revised or rejected.

Peer review is an important part of the scholarly publishing process because it helps to ensure that the research being presented is rigorous and accurate. It helps to maintain the quality and credibility of scientific and academic work, and it provides a mechanism for researchers to get feedback from other experts in their field. Many academic journals use peer review as a key part of their submission process, and it is often considered a critical step in validating the quality of research in a given field.

 The review process:

   Author submits paper
        |
        v
   Paper is assigned to reviewers
        |
        v
   Reviewers evaluate paper and provide feedback
        |
        v
   Editor makes decision on acceptance, rejection, or revision
        |
        v
   Author revises paper (if necessary) and resubmits
        |
        v
   Process repeats until paper is accepted for publication


### The Problem with Traditional Scientific Publishing

The current structure of the scientific literature publishing industry creates a significant power imbalance between authors, reviewers, and publishers. In a traditional, centralized system, publishers have a great deal of control over which papers are accepted for publication and which are rejected. They may also have significant influence over the peer review process, including selecting reviewers, setting review criteria, and making final decisions on acceptance or rejection.

This power imbalance can lead to a number of issues, such as bias in the review process, conflicts of interest, and a lack of transparency and accountability. It can also make it difficult for authors to get their work published, especially if they are working outside of established academic institutions or do not have access to well-connected networks.

A decentralized peer review system could help to address some of these issues by distributing control and decision-making power more evenly among participants. In a decentralized system, reviewers and authors would have greater input into the review process, and the criteria for acceptance and rejection would be more transparent and consistent. This could help to reduce bias and conflicts of interest, and could also provide a more level playing field for authors who may not have access to traditional academic networks.

Decentralized systems could also use blockchain technology or other decentralized databases to create a more transparent, secure, and verifiable record of the review process. This could help to ensure that the process is fair and that reviewers are held accountable for their decisions.

Overall, a decentralized peer review system could provide a more democratic, transparent, and equitable way of evaluating and validating scientific and academic research. While there are certainly challenges to implementing such a system, including technical and social barriers, there is growing interest in exploring decentralized approaches to peer review and other aspects of scholarly publishing.

## Overview:

 The project is a decentralized scientific journal that allows users to submit their research, host a peer review process, and track impact scores based on the references on their papers. The journal is built on top of lens.xyz, a decentralized social graph, and is implemented as a dapp using Next.js.

  
  
  
  
   _________              _________
 |         |  <----->   |         |
 |  Peer   |            |   User  |
 | Review  |  <----->   |Interface|
 |_________|            |_________|
     |                      |
     v                      v
  _________              _________              _________
 |         |  <----->   |         |            |         |
 |  Paper  |            | Impact  |            |  User   |
 | Accepted|  <----->   |  Score  |  <----->   | Impact  |
 |_________|            |_________|            |_________|
     |                                            
     v                                                      
  _________              _________           
 |         |  <----->   |         |           
 |  Paper  |            |  Paper  |           
 |   A     |            |   B     |           
 |_________|            |_________|           
                          |               
                          v               
                       _________           
                      |         |           
                      |  Refs   |           
                      | PaperA  |           
                      |_________|           
                          |               
                          v               
                       _________           
                      |         |           
                      | Impact  |           
                      |  Score  |           
                      |_________|           
                          |               
                          v               
                       _________           
                      |         |           
                      |  User   |           
                      | Impact  |           
                      |_________|       

The diagram above shows how Impact score would be calculated. In this example we have Paper A and Paper B. Paper A has an impact score associated with it, and Paper B has cited Paper A in its references. The reference is tracked in the data store, and when calculating the impact score for Paper A, the system would take into account the fact that Paper B has cited it. The updated impact score for Paper A would then be stored in the data store and updated in the user profiles. This updated diagram shows how a decentralized publishing system could incorporate a reference process to help calculate and update the impact scores of published papers.                          

Lens.xyz posts are used instead of a decentralized data store to store the papers, reviews, and impact scores. The peer review and submission process occurs through the Lens.xyz platform, and the impact scores are stored in Lens.xyz posts. User profiles are also stored as Lens.xyz posts, which are linked to the relevant papers and impact scores. This updated diagram shows how a decentralized publishing system could integrate Lens.xyz to store the data and provide a more user-friendly interface for users

## Architecture: 

The architecture of the project will consist of several key components:

**Submission System:** A web interface for users to submit their research. This system should allow users to upload files, provide metadata about their work, and track the status of their submission.
**Peer Review System**: A system for managing the peer review process. This system should allow users to submit reviews, manage conflicts of interest, and assign scores to submissions.
**Impact Score System**: A system for tracking impact scores for submissions and users. This system should be able to calculate impact scores based on the references in a paper and should provide a way for users to track their impact scores over time.
**Lens Integration:** Integration with the lens.xyz social graph to allow users to connect with other researchers, find collaborators, and share their work.
Backend: A backend system for managing user accounts, authentication, and data storage. This backend will likely need to be decentralized and use a blockchain-based database like IPFS.
Technology Stack: Based on your preferences, the technology stack for this project will include the following:

**Frontend:** Next.js, React, and CSS for the web interface.
**Backend:** IPFS or a similar decentralized database, and Solidity or a similar smart contract language for managing the peer review and impact score systems on the blockchain.
Lens Integration: Use the Lens SDK to integrate with the lens.xyz social graph.

**Challenges:** 
-> Peer review requires high quality comments
-> Anyone could review but some comments are more valuable than others
-> Existing impact scores are managed by centralized 3rd parties


PROPOSED ACTIVITIES

Submission System

- Design and implement a web interface for submitting research papers.
- Implement functionality to upload files, enter metadata, and track the status of submissions.
- Build an authentication system to verify the identity of users submitting papers.
- Integrate with the backend to store submitted papers and metadata.
- Peer Review System

- Design and implement a system for managing the peer review process.
- Develop a rating system for reviewers to score submissions.
- Build functionality to prevent conflicts of interest between reviewers and authors.
- Implement a notification system to inform reviewers of new submissions and deadlines.
- Develop a system to allow authors to revise and resubmit their papers based on feedback from reviewers.
- Impact Score System

- Develop an algorithm for calculating impact scores based on the references in a paper.
- Create a system for tracking impact scores for submissions and users.
- Build functionality to display impact scores for submissions and users.
- Design a dashboard to show users their impact scores and how they can improve them.
- Lens Integration

- Integrate the Lens SDK into the project to allow users to connect with other researchers and share their work.
- Implement functionality to search for collaborators and find related research papers.
- Build a social networking system to allow users to connect with other researchers in the community.

Backend

- Develop a backend system for managing user accounts and authentication.
- Implement a decentralized database like IPFS to store data.
- Build a smart contract system using Solidity to manage the peer review and impact score systems on the blockchain.
- Develop a system for tracking transactions and payments for funding peer reviewed papers.

Challenges

- Build a system to incentivize high-quality comments from reviewers and reduce low-quality or spam comments.
- Develop a reputation system for reviewers to increase the value of their comments and improve the quality of the review process.
- Design a decentralized impact score system that is transparent, secure, and independent of centralized third parties.