# Uses python3
import sys


def optimal_sequence(n):
    hops = [0] * (n + 1)

    hops[1] = 1
    for i in range(2, n + 1):
        ind = [i - 1]
        if i % 2 == 0:
            ind.append(i // 2)
        if i % 3 == 0:
            ind.append(i // 3)

        min_hops = min([hops[x] for x in ind])

        hops[i] = min_hops + 1

    pointer = n
    sequence = [pointer]
    while pointer != 1:
        candidates = [pointer - 1]
        if pointer % 2 == 0:
            candidates.append(pointer // 2)
        if pointer % 3 == 0:
            candidates.append(pointer // 3)

        pointer = min(
            [(c, hops[c]) for c in candidates],
            key=lambda x: x[1]
        )[0]
        sequence.append(pointer)

    return reversed(sequence)


input = sys.stdin.read()
n = int(input)
sequence = list(optimal_sequence(n))
print(len(sequence) - 1)
for x in sequence:
    print(x, end=" ")
