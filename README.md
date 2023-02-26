
# PROJECT TELESCOPE

 **PURPOSE**= to create a pipeline where anyone could submit, review or fund peer reviewed papers. 

 What is a peer reviewed paper?

 It is a structured essay that has been reviewed by a number of experts in order to validate the information.

 The review process:

 Author submits --->  Peer reviews---> Article Approved
       ^
       |                  |              
    Revision <------------|


## Overview:

 The project is a decentralized scientific journal that allows users to submit their research, host a peer review process, and track impact scores based on the references on their papers. The journal is built on top of lens.xyz, a decentralized social graph, and is implemented as a dapp using Next.js.

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