export async function fetchCount(amount: number = 1): Promise<{ data: number }> {
    return {data: amount};
}
