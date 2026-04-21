type SiteShellProps = Readonly<{
  children: React.ReactNode;
}>;

export function SiteShell({ children }: SiteShellProps) {
  return <div className="flex min-h-screen flex-col">{children}</div>;
}
