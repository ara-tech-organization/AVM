/**
 * Featured video testimonials. `id` is the YouTube video id used for the
 * thumbnail and lightbox embed. Replace with real patient-story videos.
 */
export const videoTestimonials = [
  {
    id: 'ScMzIvxBSi4',
    name: 'Priya Raghavan',
    treatment: 'Dental Implants',
    duration: '2:14',
  },
  {
    id: 'aqz-KE-bpKQ',
    name: 'Arjun Mehta',
    treatment: 'Smile Makeover',
    duration: '1:48',
  },
  {
    id: 'ysz5S6PUM-U',
    name: 'Sneha Karthik',
    treatment: 'Invisible Aligners',
    duration: '2:36',
  },
]

export const youtubeThumb = (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`
export const youtubeEmbed = (id) =>
  `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`

export default videoTestimonials
