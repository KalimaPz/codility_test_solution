
console.log(solution(512, 10))
console.log(solution(191, 4))
console.log(solution(285, 20))

// 512 , 10 => 972
// 191 , 4 => 591   
// 285 , 20  => 999

function solution(N, K) {
    let result = N.toString().split('')
    let time = K;
    let first = parseInt(result[0])
    let second = parseInt(result[1])
    let third = parseInt(result[2])
    // k + fist < 9 
    if ((K + first) <= 9) {
        first += K
        return parseInt([first, second, third].join(''))
    } else {
        if (first < 9) {
            let diff = Math.abs(first - 9)
            first += Math.abs(9 - first)
            time = time - diff
            second += time
            if (second > 9) {
                let sec_diff = second - 9
                second = 9
                // console.log(sec_diff)
                third += sec_diff
                if (third > 9) {
                    third = 9
                }
            }
        }

    }

    return parseInt([first, second, third].join(''))
}