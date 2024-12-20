export function BetaBanner() {
  return (
    <div className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto">
      <div
        className="bg-haiti-blue/90 backdrop-blur-sm text-white px-4 md:px-6 py-2 md:py-3 rounded-full 
                    shadow-lg border border-white/10 flex items-center gap-2 justify-center"
      >
        <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-emerald-400 rounded-full animate-pulse" />
        <span className="text-xs md:text-sm font-medium whitespace-nowrap">
          Beta Version - Currently in Development
        </span>
      </div>
    </div>
  );
}
