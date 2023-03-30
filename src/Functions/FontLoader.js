import FontFaceObserver from 'fontfaceobserver'

const fontLoader = (setLoading) => {
  Promise.all([
    new FontFaceObserver('Main').load(),
    new FontFaceObserver('Grafitti').load(),
  ]).then(
    () => {
      setLoading(false)
    },
    (err) => {
      console.error('Failed to load fonts!', err)
      setLoading(false)
    },
  )
}
export default fontLoader
