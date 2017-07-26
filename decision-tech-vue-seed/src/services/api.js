export const getBroadbandDeals = () => {
    return fetch('/assets/deals.json')
        .then(res => res.json())
        .then(rest => rest.deals)
}
