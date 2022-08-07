const Middleware = (req, res) => {
  res.status(404).send('<h1>Page not found</h1>')
}
export default Middleware
