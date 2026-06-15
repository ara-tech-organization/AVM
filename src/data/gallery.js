import before1 from '../assets/before-after/before-1.png'
import after1 from '../assets/before-after/after-1.png'
import before2 from '../assets/before-after/before-2.png'
import after2 from '../assets/before-after/after-2.png'
import before3 from '../assets/before-after/before-3.jpg'
import after3 from '../assets/before-after/after-3.jpg'

/**
 * Real before/after transformations. `before` and `after` are image URLs.
 * The homepage uses a split-screen showcase, the /gallery page a grid.
 * Add more entries here as additional before/after pairs become available.
 */
export const transformations = [
  {
    id: 1,
    title: 'Complete Smile Transformation',
    treatment: 'Cosmetic Dentistry',
    desc: 'A real AVM Smiles patient result — drag the slider to reveal a carefully planned smile transformation.',
    before: before1,
    after: after1,
  },
  {
    id: 2,
    title: 'Smile Makeover',
    treatment: 'Veneers & Whitening',
    desc: 'Stained and uneven teeth restored to a bright, even and natural-looking smile.',
    before: before2,
    after: after2,
  },
  {
    id: 3,
    title: 'Restored Confidence',
    treatment: 'Restorative Dentistry',
    desc: 'Damaged teeth rebuilt for full function and a confident, healthy smile.',
    before: before3,
    after: after3,
  },
]

export default transformations
