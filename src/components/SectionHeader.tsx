interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}

export default function SectionHeader({ eyebrow, title, description, light }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <span className={`inline-block text-xs font-semibold uppercase tracking-[0.08em] mb-3 ${light ? "text-blue-300" : "text-[#2563EB]"}`}>
        {eyebrow}
      </span>
      <div className={`w-12 h-[3px] rounded-full mx-auto mb-4 ${light ? "bg-blue-400" : "bg-[#2563EB]"}`} />
      <h2 className={`text-3xl md:text-4xl font-bold max-w-2xl mx-auto leading-tight ${light ? "text-white" : "text-[#1E293B]"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-2xl mx-auto ${light ? "text-slate-300" : "text-[#64748B]"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
