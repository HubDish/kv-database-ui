const prefix = 'http://127.0.0.1:8000'

export default function getURL(){
    return {
        GET_STATISTICS: `${prefix}/get-statistics`,
        GET_AVAIL_BENCHMARKS: `${prefix}/get-avail-benchmarks`
    }
}