/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(
    landStartTime,
    landDuration,
    waterStartTime,
    waterDuration
) {
    let answer = Infinity;

    for (let i = 0; i < landStartTime.length; i++) {

        const landFinish =
            landStartTime[i] + landDuration[i];

        for (let j = 0; j < waterStartTime.length; j++) {

            const waterStart = Math.max(
                landFinish,
                waterStartTime[j]
            );

            const finish1 =
                waterStart + waterDuration[j];

            answer = Math.min(answer, finish1);

            const waterFinish =
                waterStartTime[j] + waterDuration[j];

            const landStart = Math.max(
                waterFinish,
                landStartTime[i]
            );

            const finish2 =
                landStart + landDuration[i];

            answer = Math.min(answer, finish2);
        }
    }

    return answer;
};