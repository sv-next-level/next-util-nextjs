"use client";

import * as React from "react";

import { useMediaQuery } from "@/nextjs/hooks";
import { cn } from "@/nextjs/lib/utils";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/nextjs/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "@/nextjs/components/ui/drawer";

interface BaseProps {
  children: React.ReactNode;
}

interface RootDialogResponsiveProps extends BaseProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface DialogResponsiveProps extends BaseProps {
  className?: string;
  asChild?: true;
}

const desktop = "(min-width: 768px)";

const DialogResponsive = ({
  children,
  ...props
}: RootDialogResponsiveProps) => {
  const isDesktop = useMediaQuery(desktop);
  const DialogResponsive = isDesktop ? Dialog : Drawer;

  return <DialogResponsive {...props}>{children}</DialogResponsive>;
};

const DialogResponsiveTrigger = ({
  className,
  children,
  ...props
}: DialogResponsiveProps) => {
  const isDesktop = useMediaQuery(desktop);
  const DialogResponsiveTrigger = isDesktop ? DialogTrigger : DrawerTrigger;

  return (
    <DialogResponsiveTrigger className={className} {...props}>
      {children}
    </DialogResponsiveTrigger>
  );
};

const DialogResponsiveClose = ({
  className,
  children,
  ...props
}: DialogResponsiveProps) => {
  const isDesktop = useMediaQuery(desktop);
  const DialogResponsiveClose = isDesktop ? DialogClose : DrawerClose;

  return (
    <DialogResponsiveClose className={className} {...props}>
      {children}
    </DialogResponsiveClose>
  );
};

const DialogResponsiveContent = ({
  className,
  children,
  ...props
}: DialogResponsiveProps) => {
  const isDesktop = useMediaQuery(desktop);
  const DialogResponsiveContent = isDesktop ? DialogContent : DrawerContent;

  return (
    <DialogResponsiveContent className={className} {...props}>
      {children}
    </DialogResponsiveContent>
  );
};

const DialogResponsiveDescription = ({
  className,
  children,
  ...props
}: DialogResponsiveProps) => {
  const isDesktop = useMediaQuery(desktop);
  const DialogResponsiveDescription = isDesktop
    ? DialogDescription
    : DrawerDescription;

  return (
    <DialogResponsiveDescription className={className} {...props}>
      {children}
    </DialogResponsiveDescription>
  );
};

const DialogResponsiveHeader = ({
  className,
  children,
  ...props
}: DialogResponsiveProps) => {
  const isDesktop = useMediaQuery(desktop);
  const DialogResponsiveHeader = isDesktop ? DialogHeader : DrawerHeader;

  return (
    <DialogResponsiveHeader className={className} {...props}>
      {children}
    </DialogResponsiveHeader>
  );
};

const DialogResponsiveTitle = ({
  className,
  children,
  ...props
}: DialogResponsiveProps) => {
  const isDesktop = useMediaQuery(desktop);
  const DialogResponsiveTitle = isDesktop ? DialogTitle : DrawerTitle;

  return (
    <DialogResponsiveTitle className={className} {...props}>
      {children}
    </DialogResponsiveTitle>
  );
};

const DialogResponsiveBody = ({
  className,
  children,
  ...props
}: DialogResponsiveProps) => {
  return (
    <div className={cn("px-4 md:px-0", className)} {...props}>
      {children}
    </div>
  );
};

const DialogResponsiveFooter = ({
  className,
  children,
  ...props
}: DialogResponsiveProps) => {
  const isDesktop = useMediaQuery(desktop);
  const DialogResponsiveFooter = isDesktop ? DialogFooter : DrawerFooter;

  return (
    <DialogResponsiveFooter className={className} {...props}>
      {children}
    </DialogResponsiveFooter>
  );
};

const DialogResponsivePortal = ({
  children,
  ...props
}: DialogResponsiveProps) => {
  const isDesktop = useMediaQuery(desktop);
  const DialogResponsivePortal = isDesktop ? DialogPortal : DrawerPortal;

  return <DialogResponsivePortal {...props}>{children}</DialogResponsivePortal>;
};

const DialogResponsiveOverlay = ({
  className,
  children,
  ...props
}: DialogResponsiveProps) => {
  const isDesktop = useMediaQuery(desktop);
  const DialogResponsiveOverlay = isDesktop ? DialogOverlay : DrawerOverlay;

  return (
    <DialogResponsiveOverlay className={className} {...props}>
      {children}
    </DialogResponsiveOverlay>
  );
};

export {
  DialogResponsive,
  DialogResponsiveTrigger,
  DialogResponsiveClose,
  DialogResponsiveContent,
  DialogResponsiveDescription,
  DialogResponsiveHeader,
  DialogResponsiveTitle,
  DialogResponsiveBody,
  DialogResponsiveFooter,
  DialogResponsiveOverlay,
  DialogResponsivePortal,
};
