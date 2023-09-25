const prefix = 'http://127.0.0.1:8000'

export default function getURL(){
    return {
        GET_STATISTICS: `${prefix}/get-statistics`,
        GET_ADVICE: `${prefix}/get--advice`,
        GET_AVAIL_BENCHMARKS: `${prefix}/get-avail-benchmarks`,
        GET_AVAIL_OPTIONS: `${prefix}/get-avail-options`,
        UPLOAD_OPTIONS_FILE: `${prefix}/upload-options-file`
    }
}