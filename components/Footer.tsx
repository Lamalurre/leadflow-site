export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-sm text-ink/50 sm:flex-row">
        <span>© {new Date().getFullYear()} LeadFlow</span>
        <span>Human-approved automation for service businesses.</span>
      </div>
    </footer>
  );
}
