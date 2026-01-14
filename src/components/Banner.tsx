export default function Banner() {
  return (
    <div className="w-full h-screen relative overflow-hidden rounded-xl">
      <iframe
        src="/solar/index.html"
        className="w-full h-full border-0"
        title="Solar System Banner"
      />
    </div>
  )
}
