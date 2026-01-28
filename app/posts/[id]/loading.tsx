export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-blue-400 rotate-45 animate-spin" style={{borderRadius: '10px', animationDuration: '4s'}}></div>
        <div className="absolute inset-2 border-4 border-cyan-500 rotate-45 animate-spin" style={{borderRadius: '8px', animationDirection: 'reverse', animationDuration: '6s'}}></div>
        <div className="absolute inset-0 bg-linear-to-br from-blue-200 to-cyan-300 opacity-30 rotate-45 blur-md animate-pulse" style={{borderRadius: '10px'}}></div>
      </div>
      
      <p className="text-blue-600 text-lg font-medium animate-pulse">Loading Single Post...</p>
    </div>
  );
}