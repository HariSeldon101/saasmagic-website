interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ 
  children
}: PageWrapperProps) {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}