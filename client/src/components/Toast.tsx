export default function Toast({ message }: { message: string | null }) {
  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-2">
      {message && (
        <div className="pointer-events-auto px-5 h-11 rounded-full bg-[#0A0A0A] text-white text-[12px] font-[600] tracking-[0.04em] flex items-center shadow-[0_12px_30px_rgba(0,0,0,0.3)] animate-[slideUp_0.3s_ease]">
          {message}
        </div>
      )}
    </div>
  );
}
