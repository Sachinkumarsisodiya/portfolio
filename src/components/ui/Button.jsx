import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className,
  as = 'button',
  ...props 
}) {
  const Component = as;
  
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950 disabled:opacity-50 disabled:pointer-events-none active:scale-95 hover:scale-[1.02]";
  
  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-500 shadow-glow hover:shadow-glow-hover",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 shadow-soft dark:shadow-soft-dark",
    outline: "border border-gray-200 text-gray-700 hover:border-transparent hover:bg-primary-50 hover:text-primary-700 dark:border-gray-800 dark:text-gray-300 dark:hover:border-transparent dark:hover:bg-primary-900/30 dark:hover:text-primary-300",
    ghost: "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
  };
  
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg"
  };

  return (
    <Component 
      className={cn(baseStyles, variants[variant], sizes[size], className)} 
      {...props}
    >
      {children}
    </Component>
  );
}
