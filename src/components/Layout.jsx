
 export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0f172a] to-[#1a1a2e] text-white px-4 py-6">
      <div className="max-w-3xl mx-auto">{children}</div>
    </div>
  );
};