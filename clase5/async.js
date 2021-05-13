async function getProcessedData(url) {
    let data;
    try {
        data = await downloadData(url); // returns a promise
    } catch (e) {
        data = await downloadFallbackData(url)
    }
    return processDataInWorker(data)
}