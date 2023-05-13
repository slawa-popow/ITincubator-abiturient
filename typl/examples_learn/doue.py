

def big_sum(a: str, b: str) -> int:
    result, rest, sum_ij = '', 0, 0
    max_len_ab = max(len(a), len(b))
    a, b = a.zfill(max_len_ab), b.zfill(max_len_ab)
    a, b = list(a), list(b)

    while len(a) > 0:
        c, d = a.pop(), b.pop()
        sum_ij = int(c) +  int(d) + rest
        if 0 <= sum_ij <= 9:
            result += str(sum_ij)
            rest = 0
        else:
            x = sum_ij % 10
            rest = 1
            result += str(x )
             
    return str(rest) + result[::-1] if rest > 0 else result[::-1]  



print(big_sum('78975', '79845456'))