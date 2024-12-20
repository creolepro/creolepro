export function BetaBanner() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
      <div
        className="bg-haiti-blue/90 backdrop-blur-sm text-white px-6 py-3 rounded-full 
                    shadow-lg border border-white/10 flex items-center gap-2"
      >
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        <span className="text-sm font-medium">
          Beta Version - Currently in Development
        </span>
      </div>
    </div>
  );
}
