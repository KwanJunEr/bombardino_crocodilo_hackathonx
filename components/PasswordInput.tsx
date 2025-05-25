import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputId = id || "password";

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="space-y-2">
        {label && <Label htmlFor={inputId}>{label}</Label>}
        <div className="relative">
          <Input
            id={inputId}
            type={showPassword ? "text" : "password"}
            className={cn(
              error && "border-destructive focus-visible:ring-destructive",
              "pr-10",
              className
            )}
            ref={ref}
            {...props}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={togglePasswordVisibility}
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Eye className="h-4 w-4" aria-hidden="true" />
            )}
            <span className="sr-only">
              {showPassword ? "Hide password" : "Show password"}
            </span>
          </button>
        </div>
        {error && <p className="text-sm font-medium text-destructive">{error}</p>}
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };