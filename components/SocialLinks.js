export default function SocialLinks({ title = "Connect with Us" }) {
  return (
    <section className="py-16 px-6 bg-neutral-950">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-2xl font-bold mb-8">{title}</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://x.com/ricepayofficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <i className="fa-brands fa-x-twitter text-3xl"></i>
            <span className="sr-only">X (Twitter)</span>
          </a>
          <a href="https://www.youtube.com/@ricepayofficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <i className="fa-brands fa-youtube text-3xl"></i>
            <span className="sr-only">YouTube</span>
          </a>
          <a href="https://www.instagram.com/ricepayofficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <i className="fa-brands fa-instagram text-3xl"></i>
            <span className="sr-only">Instagram</span>
          </a>
          <a href="https://www.tiktok.com/@ricepayofficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <i className="fa-brands fa-tiktok text-3xl"></i>
            <span className="sr-only">TikTok</span>
          </a>
        </div>
      </div>
    </section>
  );
}
