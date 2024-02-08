// import { vega } from 'vega';
// import { vegaLite } from 'vega-lite';
// import { vl } from 'vega-lite-api';
// import { Handler } from 'vega-tooltip';
// import { config } from '../config';
// import { getData } from './getData';
// import { viz } from './viz';


// const VegaLiteApi = () => {
//     vl.register(vega, vegaLite, {
//         view: { renderer: 'canvas' },
//         init: view => { view.tooltip(new Handler().call); }
//     })

//     const run = async () => {
//         const marks = viz
//             .data(await getData())
//             .width(window.innerWidth)
//             .height(window.innerHeight)
//             .autosize({ type: 'fit', contains: 'padding' })
//             .config(config);

//         return (
//             <div>
//                 vl.markPoint().
//                 encode(
//                 vl.x().fieldQ('acceleration')
//                 )
//             </div>
//         )
//     }

//     export default VegaLiteApi