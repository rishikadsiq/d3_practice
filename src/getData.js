import { csv } from "d3";

const csvUrl = 'https://gist.githubusercontent.com/curran/1f838f68e5142a8a06da/raw/auto-mpg.csv';

export const getData = async () => {
    const data = await csv(csvUrl);
    console.log(data[0]);
    return data;
}