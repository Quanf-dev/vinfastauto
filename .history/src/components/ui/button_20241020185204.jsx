import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex items-center justify-center text-[16px] text-colors-bgColor font-medium border-2 border-solid rounded-lg ",
  {
    variants: {
      variant: {
        default: "border-colors-primary bg-colors-primary text-white shadow  ",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border-colors-primary bg-colors-bgColor text-colors-primary    ",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "px-11 ",
        default: "w-[164px] h-[36px]",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, link = "", ...props }, ref) => {
    const Comp = link.length > 0 ? "a" : "button";
    return (
      <Comp
        variant={variant}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
