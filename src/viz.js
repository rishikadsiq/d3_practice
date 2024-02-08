import { vl } from 'vega-lite-api';

export const viz = vl.markPoint()
    .encode(
        vl.x().field('acceleration').scale({ zero: false }),
        vl.y().field('horsepower').scale({ zero: false }),
        vl.tooltip().field('name')
    );