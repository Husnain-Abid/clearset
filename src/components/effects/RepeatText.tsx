interface RepeatTextProps {
  children: string;
  count?: number;
  className?: string;
  fadeOut?: boolean;
}

const RepeatText = ({ 
  children, 
  count = 5, 
  className = "",
  fadeOut = true 
}: RepeatTextProps) => {
  return (
    <div className={`relative ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className="block"
          style={{
            opacity: fadeOut ? 1 - (index * 0.2) : 1,
            transform: `translateY(${index * -0.15}em)`,
            color: index === 0 ? undefined : `hsl(var(--foreground) / ${1 - index * 0.2})`,
          }}
        >
          {children}
        </span>
      ))}
    </div>
  );
};

export default RepeatText;
