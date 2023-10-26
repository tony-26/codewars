# Question 5
import random
import time


def sortTimeUsing(soft, A):
    startingTime = time.time()
    soft(A)
    timeCount = time.time() - startingTime

    return timeCount


def insertionSort(A):
    for i in range(1, len(A)):
        insert(A[i], A, i)


def insert(v, A, hi):
    for i in range(hi-1, -1, -1):
        if v >= A[i]:
            A[i+1] = v
            return
        A[i+1] = A[i]
    A[0] = v


def selectionSort(A):
    for i in range(len(A)):
        imin = findMin(i, A)
        swap(i, imin, A)


def findMin(i, A):
    imin = i
    for j in range(i+1, len(A)):
        if A[j] < A[imin]:
            imin = j
    return imin


def swap(i, j, A):
    tmp = A[i]
    A[i] = A[j]
    A[j] = tmp


random_array = [random.randint(1, 100) for _ in range(100000)]
# print(random_array)

# tests
arrays = [random_array]


for A in arrays:
    selection_time = sortTimeUsing(selectionSort, A.copy())
    insertion_time = sortTimeUsing(insertionSort, A.copy())

    print("Time taken for selection sort:", selection_time)
    print("Time taken for insertion sort:", insertion_time)
    print("-----------------------------------------------")
