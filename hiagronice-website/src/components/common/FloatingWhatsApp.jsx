export default function FloatingWhatsApp() {
  const phoneNumber = "254726911914";
  const message = "Hello, I would like to inquire about your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white pl-3 pr-4 py-3 rounded-full shadow-lg transition-all duration-300 group"
      aria-label="Chat with us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 flex-shrink-0"
        fill="currentColor"
      >
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.703 4.61 1.912 6.482L4 29l7.72-1.867A11.94 11.94 0 0016.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3zm0 21.75c-1.94 0-3.75-.508-5.323-1.398l-.382-.221-4.583 1.108 1.128-4.463-.25-.399A9.72 9.72 0 016.25 15c0-5.376 4.375-9.75 9.751-9.75S25.75 9.624 25.75 15 21.377 24.75 16.001 24.75zm5.35-7.297c-.293-.147-1.735-.857-2.004-.955-.269-.098-.465-.147-.66.147-.196.293-.758.955-.929 1.152-.171.196-.343.221-.636.074-.293-.147-1.237-.456-2.357-1.454-.871-.777-1.46-1.737-1.631-2.03-.171-.293-.018-.451.129-.598.132-.132.293-.343.44-.514.147-.171.196-.293.293-.489.098-.196.049-.367-.024-.514-.074-.147-.66-1.591-.904-2.18-.238-.573-.48-.495-.66-.504l-.562-.01c-.196 0-.514.074-.783.367-.269.293-1.026 1.003-1.026 2.447 0 1.443 1.05 2.837 1.196 3.033.147.196 2.067 3.157 5.008 4.428.7.302 1.246.483 1.672.618.702.223 1.341.191 1.846.116.563-.084 1.735-.71 1.98-1.395.245-.685.245-1.271.171-1.395-.073-.123-.269-.196-.562-.343z"/>
      </svg>
      <span className="hidden sm:inline font-medium whitespace-nowrap">Chat with us</span>
    </a>
  );
}