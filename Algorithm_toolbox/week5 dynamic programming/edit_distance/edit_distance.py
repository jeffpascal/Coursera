# Uses python3


def edit_distance(s, t):
    slen = len(s) 
    slen = slen + 1
    tlen = len(t)
    tlen = tlen + 1

    d = [[x] + [0] * (tlen - 1) for x in range(slen)]
    d[0] = [x for x in range(tlen)]

    for i in range(1, slen):
        for j in range(1, tlen):

            if s[i - 1] == t[j - 1]:
                d[i][j] = d[i - 1][j - 1]
            else:
                d[i][j] = min(d[i][j - 1], d[i - 1][j], d[i - 1][j - 1]) + 1

    return d[-1][-1]


if __name__ == "__main__":
    print(edit_distance(input(), input()))