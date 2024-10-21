import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex items-center justify-center text-[16px] text-colors-bgColor font-medium border-2 border-solid rounded-lg ",
  {
    variants: {
      variant: {
        default:
          "border-colors-primary bg-colors-primary text-white relative effect-custom effect-custom-default  ",
        outline:
          "border-colors-primary bg-colors-bgColor text-colors-primary relative effect-custom  effect-custom-outline    ",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "w-[164px] h-[36px]",
        sm: "px-11 py-2 ",
        lg: "h-10 px-8",
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
