# ICS4U - 2024 Fall - Assignment 3

## Notes

You are **encouraged to work together** on the assignments. There is no limit to how many people contribute to an assignment. But you must submit different files. The code can be identical.

In the root folder of your assign, create a file titled `diary.txt`. In this file, you must list out the names of everyone who contributed to the assignment. If you worked alone, state you worked solo. Below is an example format:

```
Assignment 0

Q1. I worked solo.
Q2. I worked with Joe and Tina. Joe told me I wrote the wrong if statement.
...
```

If a group member assisted you on a question, in a few short sentence state how they helped you. **Please give credit where credit is due.**

#### THERE IS NO PENALTY FOR WORKING TOGETHER

## Instructions

Submit all your files in the `src` folder. Save your Typescript file, not your JavaScript file. Every question must be titled the same file name as the question number (e.g. answer for Q1 should be titled `q1.ts`). The basic template of the file is provided for you.

Additional parameter(s) beyond the required ones in the question are allowed.

#### You cannot use any JS methods from `Math`, `String`, or `Array`. Also, no `Map` or `Set`.

## Q1. Bunny Ears 2

We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication) and must use DAC.

**Examples**

```typescript
bunnyEars2(0) → 0
bunnyEars2(1) → 2
bunnyEars2(2) → 5
```

## Q2. Intersections

Given two integer array `nums1` and `nums`, return an array of their intersection (elements that exists in both array). Each element in the result must be **unique** and you may return the result in **any order**.

**Example 1**:

**Input**: nums1 = `[1,2,2,1]`, nums2 = `[2,2]`
**Output**: `[2]`

**Example 2**:

**Input**: nums1 = `[4,9,5]`, nums2 = `[9,4,9,8,4]`
**Output**: `[9,4]`
**Explanation**: `[4,9]` is also accepted.

## Q3. Balanced Binary Tree

Given a binary tree's root node `root: TreeNode`, create a function `isHeightBalanced` to determine if it is height-balanced. All nodes contain `value: number`.

A height-balanced binary tree is defined as a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

## Q4. Same Tree

Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

_\*Examples are shown using trees as arrays but the actual input is a `TreeNode`_

**Example 1**
Input: `p = [1,2,3]`, `q = [1,2,3]`
Output: `true`

**Example 2**
Input: `p = [1,2,null]`, `q = [1,null,2]`
Output: `false`

**Example 3**
Input: `p = [1,2,1]`, `q = [1,1,2]`
Output: `false`

## Q5. Conditions

Given an array of ints, is it possible to choose a group of some of the ints, beginning at the start index, such that the group sums to the given target? However, with the additional constraint that all 6's must be chosen.

```typescript
groupSum6([5, 6, 2], 8) → true
groupSum6([5, 6, 2], 9) → false
groupSum6([5, 6, 2], 7) → false
```

## Q6. Counting Bits

Given an integer `n`, return an array `ans` of length `n + 1` such that for each `i` (`0 <= i <= n`), `ans[i]` is the **number of `1`'s** in the binary representation of `i`.

**No bitwise operators.**

**Example 1**:

**Input**: n = 2
**Output**: `[0,1,1]`
**Explanation**:
0 --> 0
1 --> 1
2 --> 10

**Example 2**:

**Input**: n = 5
**Output**: `[0,1,1,2,1,2]`
**Explanation**:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101

## Q7. Peak Index in a Mountain Array

You are given an integer **mountain** array `arr` of length `n` where the values increase to a **peak element** and then decrease.

Return the index of the peak element.

**Example 1**:
**Input**: arr = `[0,1,0]`
**Output**: 1

**Example 2**:
**Input**: arr = `[0,2,1,0]`
**Output**: 1

**Example 3**:
**Input**: arr = `[0,10,5,2]`
**Output**: 1
