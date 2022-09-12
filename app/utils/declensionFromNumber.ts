export const declOfNum = (number: number, titles: [string, string, string]): string => {
    const cases = [2, 0, 1, 1, 1, 2]
    if(number < 100) {
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }
    if  ((number < 1000) && (number > 100))
    {
        return titles[(number % 1000 > 4 && number % 1000 < 20) ? 2 : cases[(number % 100 < 5) ? number % 100 : 5]];
    }
    if  ((number < 10000) && (number > 1000))
    {
        return titles[(number % 10000 > 4 && number % 10000 < 20) ? 2 : cases[(number % 1000 < 5) ? number % 1000 : 5]];
    }
    if  ((number < 100000) && (number > 10000))
    {
        return titles[(number % 100000 > 4 && number % 100000 < 20) ? 2 : cases[(number % 10000 < 5) ? number % 10000 : 5]];
    }
    if  ((number < 1000000) && (number > 100000))
    {
        return titles[(number % 1000000 > 4 && number % 1000000 < 20) ? 2 : cases[(number % 100000 < 5) ? number % 100000 : 5]];
    }
    return 'просмотров'
};