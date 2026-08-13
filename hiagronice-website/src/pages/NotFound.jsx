import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold text-gray-900">404</h1>
      <p className="text-gray-600 mt-2">Page not found.</p>
      <Link to="/" className="text-brand font-semibold mt-4 inline-block">
        ← Back to Home
      </Link>
    </div>
  );
}
